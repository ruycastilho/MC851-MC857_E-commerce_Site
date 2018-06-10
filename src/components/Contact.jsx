import React, { Component } from 'react';
import styled from 'styled-components';
import {Button, Row, Col, Container,Form, FormGroup, Label, Input } from 'reactstrap';
import "../OptionsNav.css";
import "../Contact.css";
import AccordionItem from "./Accordion";

class Tickets extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            ticket: [],
            typeOfTicket: "Default",
	    nav_active: 1,
        };
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
		      <div className="btn-group2">
			<Button  type="submit" value="Enviar Ticket" id="submit_ticket">Enviar </Button>
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

export default Tickets;

// <SelectRightDiv>
//             <LabelText>Código do Pedido:</LabelText>
//             <Input type="text" placeholder="Digite o número do pedido" ></Input>
//         </SelectRightDiv>
// <TopDiv>
//     <TopLeftDiv>
//         <Title>Novo ticket</Title>
//     </TopLeftDiv>
// </TopDiv>
// <MiddleDiv >
//     <SelectDiv>
//         <SelectLeftDiv>
//         <LabelText>Selecione o tipo de Ticket:</LabelText>
//             <Select name="typeOfTicket" onChange={this.handleChange}>
//                 <option value="Default">Geral</option>
//                 <option value="Order">Pedido</option>
//             </Select>
//         </SelectLeftDiv>
//         {typeOfTicket}

//     </SelectDiv>

//     <Form onSubmit={this.handleSubmit}>
//         <LabelText>Corpo do Ticket</LabelText>
//         <TextArea id="mensagem" type="text" placeholder="Escreva seu ticket aqui.." ></TextArea> 
//         <SubmitInput type="submit" value="Enviar Ticket" ></SubmitInput>      
//         <SubmitInput type="submit" value="Cancelar"></SubmitInput> 
//     </Form>
// </MiddleDiv>

// const MiddleDiv = styled.div`
//     background-color: whitesmoke;
//     border-bottom-style: inset;
//     border-top-style: outset;
//     border-width: 3px;
//     border-color: gray;
//     overflow:hidden;
//     // height: 100%;
//     height: 400px;
//     width:100%;
//     margin-top: 200px;

// `;

// const TopDiv = styled.div`
//     background-color: transparent;
//     overflow:hidden;
//     height: 10%;
//     float:left;
//     width:100%;
//     height:10%;
//     margin-top: 100px;
//     display:inline-block;
// `;

// const TopLeftDiv = styled.div`
//     background-color: coral;
//     border-right-style: inset;
//     border-width: 3px;
//     border-color: gray;
//     overflow:hidden;
//     height: 100%;
//     float:left;
//     width:20%;    
//     -webkit-border-radius: 0 50px 0 0;
//     -moz-border-radius: 0 50px 0 0;
//     border-radius: 0 50px 0 0;
// `;

// const SelectDiv = styled.div`
//     background-color: transparent;
//     border:none;
//     overflow:hidden;
//     padding:5px;
//     height: 10%;
//     float:left;
//     width:100%;
//     float:left;
//     display: flex;
//     justify-content:left;
// `;

// const SelectLeftDiv = styled.div`
//     background-color: transparent;
//     border:none;
//     overflow:hidden;
//     padding:5px;
//     height: 100%;
//     float:left;
//     width:20%;
//     display: flex;
//     justify-content: left;
// `;

// const SelectRightDiv = styled.div`
//     background-color: transparent;
//     border:none;
//     overflow:hidden;
//     padding:5px;
//     height: 100%;
//     float:left;
//     display: flex;
//     justify-content: left;
// `;

// const Title = styled.h1`
//     font-family: 'Ubuntu', sans-serif;
//     font-size: 1.1em;
//     display: block;
//     color: oldlace;
//     text-align:center;
//     height:100%;
//     margin:0;
//     padding: 14px 16px;
//     text-decoration: none;
// `;

// const Text = styled.p`
//     font-family: 'Ubuntu', sans-serif;
//     padding: 5px;
//     margin: 10px;
//     font-size: 1.5  em;
//     color: coral;
//     border-bottom: 1px solid;
// `;
// const LabelText = Text.extend`
//     text-align:left;    
//     border:none;

// `;

// const Form = styled.form`
//     font-family: 'Ubuntu', sans-serif;
//     padding:5px;
//     color: oldlace;
//     max-width:80%;
//     max-height: 100%;
//     float:left;

// `;
// const Select = styled.select`
//     padding: 0.5em;
//     margin:3px;
//     color: whitesmoke;
//     background: coral;
//     -webkit-border-radius: 15px;
//     -moz-border-radius: 15px;
//     border-radius: 15px;
//     border-color:transparent;
//     max-height: 35px;
//     float:left;
// `;

// const Input = styled.input`
//     padding: 0.5em;
//     color: coral;
//     background: white;
//     border: solid;
//     border-width: 2px;
//     max-height: 50px;
//     -webkit-border-radius: 50px;
//     -moz-border-radius: 50px;
//     border-radius: 50px;
// `;

// const SubmitInput = styled.input`
//     float:right;
//     padding: 1.0em;
//     color: oldlace;
//     background: coral;
//     border: solid;
//     border-width: 2px;
//     margin-top:160px;
//     max-height: 50px;
//     -webkit-border-radius: 30px;
//     -moz-border-radius: 30px;
//     border-radius: 30px;
//     font-size: 1.5 em;

// `;

// const TextArea = styled.textarea`
//     float:left;
//     color: coral;
//     background: white;
//     border: solid;
//     border-width: 1px;
//     margin: 10px;
//     width:500px;
//     height:200px;
//     max-height:100%;
//     max-width:100%;
//     -webkit-border-radius: 5px;
//     -moz-border-radius: 5px;
//     border-radius: 5px;
//     border-color:coral;
//     font-size: 2.0 em;
// `;
