import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Item from "./Orders";
import "../User.css";

const MiddleDiv = styled.div`
    background-color: whitesmoke;
    border-bottom-style: inset;
    border-top-style: outset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    height: 100%;
    width:100%;
`;

const TopDiv = styled.div`
    background-color: transparent;
    overflow:hidden;
    height: 10%;
    width:100%;
    height:10%;
    display: flex;
    justify-content: center;  
    
`;

const TopLeftDiv = styled.div`
    background-color: coral;
    border-right-style: inset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    height:100%;
    width:100%; 


`;
const Title = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.1em;
    display: block;
    color: oldlace;
    text-align:center;
    height:100%;
    margin:0;
    padding: 14px 16px;
    text-decoration: none;
`;

class User extends Component {
    constructor() {
        super();
        this.state = {
	    nav_active: 1,
        };
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
  	
	const body = this.state.nav_active == 0 ? (
            <Container>
              <Form className="form-group" >
                <FormGroup className="text-center" >
                  <Label  or="email">Alterar e-mail</Label>
                  <Input className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4" type="email" name="email" id="email" placeholder="Digite o novo e-mail aqui" />
                </FormGroup>
                <Button className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4" onClick={this.handleClick}>Alterar</Button>

              </Form>
            </Container>
	) : (
	    <div>
              <Item
                data={"06/06/2006"}
                id={2489294}
                status_ent={"Entregue"}
		status_pag={"Confirmado"}
		name={"Este é um Pedido"}
		src={"https://images-na.ssl-images-amazon.com/images/I/514LJcIGpfL._SX300_BO1,204,203,200_.jpg"}
		valor={"R$66,60"}
		qtdade={"7"}
		total={"R$466,20"}
		adress={"Rua dos bobos, número zero"}
		/>
              <Item
		data={"10/06/2018"}
                id={2489294839}
                status_ent={"Ainda em estoque"}
		status_pag={"Pendente"}
		name={"Este é um outro Pedido"}
		src={"https://images-na.ssl-images-amazon.com/images/I/514LJcIGpfL._SX300_BO1,204,203,200_.jpg"}
		valor={"R$66,60"}
		qtdade={"7"}
		total={"R$466,20"}
		adress={"Av. dos bobos, número zero"}
		/>
	    </div>
	);

	return (
            <div>
              <TopDiv>
                <TopLeftDiv>
                  <Title>Conta</Title>
                </TopLeftDiv>
              </TopDiv>
              <MiddleDiv>
		<Container className="btn-group2">
                  <Row className="btn-group2 ">
                    <Button onClick={() => this.navToggleActive(0)} active={this.navIsActive(0)} className="col-6"> Configurações </Button>
                    <Button onClick={() => this.navToggleActive(1)} active={this.navIsActive(1)} className="col-6"> Meus Pedidos </Button>
                  </Row>
		</Container>
		{body}

              </MiddleDiv>
            </div>

	);
    }
}

export default User;
