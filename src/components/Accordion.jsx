import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Collapse, CardBody, Card, Container, Row, Col } from 'reactstrap';
import $ from 'jquery';
import axios from 'axios';
import AlertMsg from './Alert';

const itemstyle = {
    "margin-top": '1em',
};

const collapsiblestyle = {
        "padding-bottom": "0.5em",
    "border-bottom": "1px solid #f88379"
};

const togglestyle = {
    width: "100%",
    "background-color":"#f88379",
    "border":"2px solid #f88379",
};

class Toggle extends Button{};

class AccordionItem extends Component {
    constructor(props) {
	super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			collapse: false,
			type: this.props.compraId === null ? "Default" : "Order",
			wasSubmitted: false,
			msgs: this.props.msgs,
			wasSuccess: false,
		};
		this.statusTransform = this.statusTransform.bind(this);

    }

    toggle() {
	this.setState({ collapse: !this.state.collapse });
    }

	updateMessages(event) {
		event.preventDefault();

		axios.get('http://127.0.0.1:8000/customer_support/get_message_by_number/' + this.props.id)
		.then(response => {
			const messages = response.data.content;
			// alert(JSON.stringify(response.data.content));

			const Test = messages.map(message => {
				return <Card>
						<CardBody>
							<Col>
								<Label >Data: {message.timestamp.replace("T", " ")}</Label>
							</Col>
							<Col>
								<Label >Enviado por: {message.sender} </Label>
							</Col>
							<Col>
								<Label >Mensagem: {message.message} </Label>
							</Col>
						</CardBody>
					</Card>
			});
			this.setState({	msgs: Test});


		})
		.catch(function (error) {
			// alert(error);

		});	

	}
	statusTransform(x) {
		if (x === 0) {
			return "Aberto";
		}
		else {
			return "Fechado";
		}
	}
	
	handleSubmit(event) {
		event.preventDefault();
		var message = $("#"+this.props.id).val();

		// alert(message);
		
			const body = {
				message: message,
			};	

			
			axios.post('http://127.0.0.1:8000/customer_support/add_message_to_ticket/' + this.props.id,	JSON.stringify(body))
			.then(response => {

				if (response.data.status === 200) {
					this.setState({wasSuccess: true});

					

				}
				else {
					this.setState({wasSuccess: false});

		

				}
				this.setState({wasSubmitted: true});
				this.updateMessages(event);
				
			})
			.catch(function (error) {
				// alert(error);
				this.setState({	wasSubmitted: true,
								wasSuccess: false});


			});	

	}


    render() {

	var feedback;
	if (this.state.wasSubmitted ) {
		feedback = this.state.wasSuccess ? (
			<AlertMsg msg="Mensagem adicionada com sucesso!" type="success" />
		) : (
			<AlertMsg msg="Erro ao adicionar mensagem." type="error" />
		)
	} else {
		feedback = null;

	}

	const add = this.props.status === 0 ? (
		<Col className="col-12">
			<Form className="container-fluid" id="addmsg" onSubmit={(e) => {this.handleSubmit(e)} }>
				<FormGroup tag="fieldset" row>
					<Col className="col-12">
						<FormGroup >
							<Label className="col-12">Adicionar mensagem</Label>
							<Col >
								<Input className="col-12" type="textarea" name="text" id={this.props.id} />
							</Col>
						</FormGroup>
					</Col>
					<Col className="col-12" >
						<div className="btn-group2" class="centerBlock text-center">
							<Button type="submit" id="submit_ticket">Enviar </Button>
						</div>
					</Col>
				</FormGroup>
			</Form>
		</Col>
	) : (
		null
	);
	return (
	    <div style={itemstyle}>
			<Toggle  onClick={this.toggle} style={togglestyle} >ID: {this.props.id}</Toggle>
			<Collapse isOpen={this.state.collapse} style={collapsiblestyle}>
				<Container>
					<Row>
						<Col className="col-12">
							Status: {this.statusTransform(this.props.status)}
						</Col>
						<Col className="col-12">
							Compra: {this.props.order === null ? (
								"-"
							) : (
								this.props.order
							)}
						</Col>
						<Col className="col-12">
							Lista de Mensagens:
						</Col>
					</Row>
					{this.state.msgs}
					{add}
					{feedback}

				</Container>
			</Collapse>
	    </div>
	);
    }
}

export default AccordionItem;
