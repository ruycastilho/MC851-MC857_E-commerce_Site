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
			wasSubmitted: false,
			msgs: this.props.msgs,
			wasSuccess: false,
			errorMsg: "",
			successMsg: "",
			status: this.props.status,

		};
		this.statusTransform = this.statusTransform.bind(this);
		this.handleClosing = this.handleClosing.bind(this);
    }

    toggle() {
	this.setState({ collapse: !this.state.collapse });
    }

	handleClosing(event) {
		event.preventDefault();
		// alert(message);
		
			const body = {
				message: "Ticket Fechado",
			};	

			axios.post('https://safe-beyond-19805.herokuapp.com/customer_support/close_ticket/' + this.props.id,	JSON.stringify(body))
			.then(response => {

				this.setState({wasSubmitted: true});
				this.updateMessages(event);

				if (response.data.status === 200) {
					this.setState({	wasSuccess: true,
									successMsg: "Ticket fechado com sucesso!",
									status: 1});
					
				}
				else {
					this.setState({	wasSuccess: true,
									errorMsg: "Erro ao fechar ticket."});

				}
				
			})
			.catch(function (error) {
				// alert(error);
				this.setState({	wasSubmitted: true,
								wasSuccess: false,
								errorMsg: "Erro ao fechar ticket."});

			});	

	}

	updateMessages(event) {
		event.preventDefault();

		axios.get('https://safe-beyond-19805.herokuapp.com/customer_support/get_message_by_number/' + this.props.id)
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

			axios.post('https://safe-beyond-19805.herokuapp.com/customer_support/add_message_to_ticket/' + this.props.id,	JSON.stringify(body))
			.then(response => {

				this.setState({wasSubmitted: true});
				this.updateMessages(event);
				if (response.data.status === 200) {
					this.setState({	wasSuccess: true,
									successMsg: "Mensagem adicionada com sucesso."});

				}
				else {
					this.setState({	wasSuccess: true,
									errorMsg: "Erro ao adicionar mensagem."});

				}
				
			})
			.catch(function (error) {
				// alert(error);
				this.setState({	wasSubmitted: true,
								wasSuccess: false,
								errorMsg: "Erro ao adicionar mensagem."});

			});	
		}

		render() {

		if (this.props.type === "Ticket") {

			var feedback;
			if (this.state.wasSubmitted ) {
				feedback = this.state.wasSuccess ? (
					<AlertMsg msg={this.state.successMsg} type="success" />
				) : (
					<AlertMsg msg={this.state.errorMsg} type="error" />
				)
			} else {
				feedback = null;
		
			}
		
			const add = this.state.status === 0 ? (
				<div>
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
					<Col className="col-12">
						<div className="btn-group2" class="centerBlock text-center">
							<Button onClick={(e) => {this.handleClosing(e)}} id="submit_ticket">Fechar Ticket </Button>
						</div>
					</Col>
				</div>
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
									Situação: {this.statusTransform(this.state.status)}
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
			else if (this.props.type === "Order") {
				// adicionar detalhes de pedido:
				//     detalhes da compra: nome do item, o valor unitário, quantidade de itens comprados, valor total dos itens, valor total da compra e
				//     endereço de entrega, datas de compras, de entrega, código de rastreio, situação de pagamento, situação de
				//     entrega. ORDENADOS do mais novo pro mais antigo

				return (
					<div style={itemstyle}>
						<Toggle  onClick={this.toggle} style={togglestyle} >ID: {this.props.id}</Toggle>
						<Collapse isOpen={this.state.collapse} style={collapsiblestyle}>
							<Container>
								<Row>
									<Col className="col-12">
										Tipo de Pagamento: {this.props.type_payment}						
									</Col>
									<Col className="col-12">
										Data do Pagamento: {this.props.date_payment}						
									</Col>
									<Col className="col-12">
										Data da Entrega: {this.props.date_deliver}	
									</Col>
									<Col className="col-12">
										Situação do Pagamento: {this.props.status_payment}								
									</Col>
									<Col className="col-12">
										Situação da Entrega: {this.props.status_deliver}
									</Col>
									<Col className="col-12">
										Código de Rastreio: {this.props.code}
									</Col>
									<Col className="col-12">
										Endereço de Entrega: {this.props.address}
									</Col>
									<Col className="col-12">
										Preço Total: {this.props.price}
									</Col>
									<Col className="col-12">
										Lista de Produtos:
									</Col>
								</Row>
								<Row>
									{this.props.orders}
								</Row>
			
							</Container>
						</Collapse>
					</div>
				);
			}

		}
	}

	export default AccordionItem;
