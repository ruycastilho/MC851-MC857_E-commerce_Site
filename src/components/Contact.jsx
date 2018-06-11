import React, { Component } from 'react';
import styled from 'styled-components';
import {Button, Row, Col, Container,Form, FormGroup, Label, Input } from 'reactstrap';
import "../OptionsNav.css";
import "../Contact.css";
import AccordionItem from "./Accordion";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            ticket: [],
            typeOfTicket: "Default",
			nav_active: 1,
			isLoggedIn: props.isLoggedIn,
            username: props.username
        };
    }

    componentWillReceiveProps(newProps) {
        this.state = {
            isLoggedIn: newProps.isLoggedIn,
            username: newProps.username,
        };
	}
    shouldComponentUpdate(nextProps) {
        return this.state.isLoggedIn != nextProps.isLoggedIn;
    }	
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        
        var text = document.getElementById("mensagem").value;
        try {
            const res = fetch('http://127.0.0.1:8000/api/add_ticket/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // message: 'Alguma mensagem num ticket',
                    message: text,
                    sender: 'sindo',
                    timestamp: '2018-05-18T12:00',
                }),
            });
            const ticket = res.json();
            this.setState({
                ticket
            });
        } catch (e) {
            console.log(e);
        }
    }

    navIsActive(x) {
    	return this.state.nav_active == x ? true : false;
    }

    navToggleActive(x) {
    	this.setState({nav_active: x});
    }

     orderToggleValue(x) {
    	this.setState({typeOfTicket: x});
    }

    render() {

	const typeOfTicket = this.state.typeOfTicket === "Default" ? (
            null
	) : (
	    <Col xs="12" sm="6" md="3">
              <FormGroup className="form-check">
		<Label >Número do pedido</Label>
		<Input type="number" name="numero_pedido" id="numero" placeholder="N˚. do pedido" /> 
              </FormGroup>
	    </Col>
	);
	
	const body = this.state.nav_active == 0 ? (
		<Form className="container-fluid" id="form" >
		  <FormGroup tag="fieldset" row>
		    <Col xs="12" sm="6" md="4">
		      <Label className="col-12"  >Tipo de ticket</Label>
		      <FormGroup check className="col-6" inline>
			<Label check>
			  <Input type="radio" name="radio" value="Default" onClick={() => this.orderToggleValue("Default")}/>{' '}
			  Geral
			</Label>
		      </FormGroup>
		      <FormGroup check className="col-6" inline>
			<Label check>
			  <Input type="radio" name="radio" value="Order" onClick={() => this.orderToggleValue("Order")} />{' '}
			  Pedido
			</Label>
		      </FormGroup>
		    </Col>
		    {typeOfTicket}
		    <Col xs="12" sm="6" md="5">
		      <FormGroup >
			<Label className="col-12">Escreva seu ticket aqui</Label>
			<Col >
			  <Input type="textarea" name="text" id="mensagem" />
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
	    <div>
	    <AccordionItem
	      data={"06/06/2006"}
	      msgs={["Esta é a primeira mensagem","Esta é a réplica","Esta é a tréplica"]}
	      id={2489294}
	      status={"Aberto"}
	      name={"Este é o nome de um ticket"}/>
	    <AccordionItem
	      data={"02/03/1998"}
	      msgs={["Esta é a primeira mensagem","Esta é a réplica","Esta é a tréplica"]}
	      id={123454321}
	      status={"Fechado"}
	      name={"Este é um outro ticket"}/>
	    </div>
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
	      {body}
	    </div>
	);
    }
}

export default Contact;