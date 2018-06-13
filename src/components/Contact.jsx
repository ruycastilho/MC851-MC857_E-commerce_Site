import React, { Component } from 'react';
import {Button, Card, CardBody, Row, Col, Container,Form, FormGroup, Label, Input } from 'reactstrap';
import "../OptionsNav.css";
import "../Contact.css";
import AccordionItem from "./Accordion";
import { connect } from 'react-redux';
import AlertMsg from './Alert';
import axios from 'axios';
import $ from 'jquery';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            ticket: [],
            typeOfTicket: "Default",
			nav_active: 0,
			wasSubmitted: false,
			wasSuccess: false,
			errorMsg: "Erro ao enviar ticket.",
			tickets: [],
        };
    }

    handleSubmit(event) {
		event.preventDefault();
		var message = $("#ticket_msg").val();

        // var text = document.getElementById("mensagem").value;
		
		if (this.state.typeOfTicket === "Default") {
			const body = {
				message: message,
			};	

			
			axios.post('http://127.0.0.1:8000/customer_support/add_ticket/',	JSON.stringify(body))
			.then(response => {

				if (response.data.status === 201) {
					this.setState({wasSuccess: true});
				}
				else {
					this.setState({wasSuccess: false});

				}
				this.setState({wasSubmitted: true});

			})
			.catch(function (error) {
				// alert(error);
				this.setState({wasSuccess: false});
				this.setState({wasSubmitted: true});

			});	

		}
		else {
			var order = $("#orderID").val();

			const body = {
				message: message,
				order: order,

			};	

			axios.post('http://127.0.0.1:8000/customer_support/add_ticket_order/',	JSON.stringify(body))
			.then(response => {

				if (response.data.status === 201) {
					this.setState({wasSuccess: true});

				}
				else {
					this.setState({wasSuccess: false});

				}
				this.setState({wasSubmitted: true});

			})
			.catch(function (error) {
				// alert(error);
				this.setState({wasSuccess: false});
				this.setState({wasSubmitted: true});

			});	

		}
		
	}

    navIsActive(x) {
    	return this.state.nav_active === x ? true : false;
    }

    navToggleActive(x) {
		this.setState({nav_active: x});
		// alert("!");
		if (this.props.isLoggedIn && x === 1) {
		
			axios.get('http://127.0.0.1:8000/customer_support/get_all_tickets/')
			.then(response => {
				const tickets = response.data.content;
				// alert(JSON.stringify(response.data.content));

                const Test = tickets.map(ticket => {
					return  <AccordionItem
								msg_amount={ticket.messageSize}
								type="Ticket"
								order={ticket.compraId}
								msgs={ticket.messagesList.map( (x) => {
										return <Card>
													<CardBody>
														<Col>
															<Label >Data: {x.timestamp.replace("T", " ")}</Label>
														</Col>
														<Col>
															<Label >Enviado por: {x.sender} </Label>
														</Col>
														<Col>
															<Label >Mensagem: {x.message} </Label>
														</Col>
													</CardBody>
												</Card>
									})}
								id={ticket.ticketId}
								status={ticket.statusId}
							/>
				});
				
				this.setState({tickets: Test});
	
				if (response.data.status === 201) {
					this.setState({wasSuccess: true});

				}
				else {
					this.setState({wasSuccess: false});

				}
				this.setState({wasSubmitted: true});

			})
			.catch(function (error) {
				// alert(error);
				this.setState({wasSuccess: false});
				this.setState({wasSubmitted: true});

			});	

		}
    }

     orderToggleValue(x) {
    	this.setState({typeOfTicket: x});
    }

    render() {

		const typeOfTicket = this.state.typeOfTicket === "Default" ? (
			null
		) : (
			<Col xs="12" sm="6" md="3">
				<FormGroup id="orderForm" className="form-check">
					<Label >Número do pedido</Label>
					<Input min="0" type="number" name="numero_pedido" id="orderID" placeholder="N˚. do pedido" /> 
				</FormGroup>
			</Col>
		);
		

		var feedback;
		if (this.state.wasSubmitted ) {
			feedback = this.state.wasSuccess ? (
				<AlertMsg msg="Ticket enviado com sucesso!" type="success" />
			) : (
				<AlertMsg msg="Erro ao enviar ticket." type="error" />
			)
		} else {
			feedback = null;

		}
		
		const content = this.props.isLoggedIn ? (

			this.state.nav_active === 0 ? (
				<Form className="container-fluid" id="form" onSubmit={(e) => {this.handleSubmit(e)} }>
					<FormGroup tag="fieldset" row>
					<Col xs="12" sm="6" md="4">
						<Label className="col-12">Tipo de ticket</Label>
						<FormGroup check className="col-6" inline>
							<Label check>
								<Input type="radio" name="radio" value="Default" onClick={() => this.orderToggleValue("Default")}/>
								Geral
							</Label>
						</FormGroup>
						<FormGroup check className="col-6" inline>
							<Label check>
								<Input type="radio" name="radio" value="Order" onClick={() => this.orderToggleValue("Order")} />
								Pedido
							</Label>
						</FormGroup>
					</Col>

					{typeOfTicket}

					<Col xs="12" sm="6" md="5">
						<FormGroup >
							<Label className="col-12">Escreva seu ticket aqui</Label>
							<Col >
								<Input type="textarea" name="text" id="ticket_msg" />
							</Col>
						</FormGroup>
					</Col>
					<Col xs="12" >
						<div className="btn-group2" class="centerBlock text-center">
							<Button type="submit" id="submit_ticket">Enviar </Button>
						</div>
					</Col>
					
				</FormGroup>
				
				</Form>
			) : (
				this.state.tickets
			)

			
		) : (
			<AlertMsg msg="Faça login para ver seus tickets ou criar novos!" type="error"/>
		);


		return (
			<div>
				<Container className="btn-group2">
					<Row className="btn-group2 ">
						<Button className="col-12" disabled> Serviço de Atendimento ao Cliente </Button>
						<Button onClick={() => this.navToggleActive(0)} active={this.navIsActive(0)} className="col-6"> Novo Ticket </Button>
						<Button onClick={() => this.navToggleActive(1)} active={this.navIsActive(1)} className="col-6"> Meus Tickets </Button>
					</Row >
				</Container>
				{content}
				{feedback}
			</div>
		);
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        isLoggedIn: state.isLoggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (username) => {
            dispatch({
                type: "CHANGE_USER",
                payload: username
            })
        }    ,
        setStatus: (status) => {
            dispatch({
                type: "CHANGE_STATUS",
                payload: status
            })
        }    ,    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Contact);


// color:#9e1847;
