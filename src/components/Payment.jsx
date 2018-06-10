import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
const Text = styled.p`
    font-family: 'Ubuntu', sans-serif;
    padding: 5px;
    margin: 10px;
    font-size: 1.1  em;
    color: coral;
    border-bottom: 1px solid;
`;
const LabelText = Text.extend`
    text-align:left;    
    border:none;

`;

const SelectDiv = styled.div`
    background-color: transparent;
    border:none;
    overflow:hidden;
    padding:5px;
    height: 10%;
    float:left;
    width:100%;
    display: flex;
    justify-content: left;
`;

class Payment extends Component {

  constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);

      this.state = {
          typeOfPayment: "creditCard",
      }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleClick() {
    // do something
    }

  render() {
    const paymentMethod = this.state.typeOfPayment === "creditCard" ? (
        <Container>
            <Form className="form-group" >
                <FormGroup>
                    <Label for="name">Nome</Label>
                    <Input type="name" name="name" id="name" placeholder="Digite seu nome aqui" />
                </FormGroup>
                <FormGroup>
                    <Label for="number">Número do Cartão</Label>
                    <Input type="name" name="number" id="number" placeholder="Digite o número do cartão aqui" />
                </FormGroup>
                <FormGroup>
                    <Label for="cpf">CPF</Label>
                    <Input name="cpf" id="cpf" placeholder="Digite seu CPF aqui" />
                </FormGroup>
                <FormGroup>
                    <Label for="cod">Código de Segurança</Label>
                    <Input name="cod" id="cod" placeholder="Digite o código de segurança" />
                </FormGroup>
                <FormGroup>
                    <Label for="data">Data de Validade</Label>
                    <Input name="data" id="data" placeholder="Digite a data de validade do cartão" />
                </FormGroup>
                <Button className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4" onClick={this.handleClick}>Finalizar</Button>
            </Form>

        </Container>
    ) : (

        <Container>
            <Form className="form-group" >
                <FormGroup>
                    <Label for="name">Nome</Label>
                    <Input type="name" name="name" id="name" placeholder="Digite seu nome aqui" />
                </FormGroup>
                <FormGroup>
                    <Label for="address">Endereço</Label>
                    <Input type="address" name="address" id="address" placeholder="Digite seu endereço aqui" />
                </FormGroup>
                <FormGroup>
                    <Label for="cep">CEP</Label>
                    <Input name="cep" id="cep" placeholder="Digite seu CEP aqui" />
                </FormGroup>
                <FormGroup>
                    <Label for="cpf">CPF</Label>
                    <Input name="cpf" id="cpf" placeholder="Digite seu CPF aqui" />
                </FormGroup>
                <Button className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4" onClick={this.handleClick}>Finalizar</Button>
            </Form>

        </Container>
        
    );

    return (
        <div>
            <TopDiv>
                <TopLeftDiv>
                    <Title>Pagamento</Title>
                </TopLeftDiv>
            </TopDiv>
            <MiddleDiv>
                <Col>
                    <FormGroup className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">
                        <Label for="exampleSelect">Opção de Pagamento</Label>
                        <Input onChange={this.handleChange} type="select" name="typeOfPayment" id="select">
                            <option value="creditCard">Cartão de Crédito</option>
                            <option value="bankSlip">Boleto Bancário</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col>
                    {paymentMethod}
                </Col>

            </MiddleDiv>
        </div>

    );
  }
}

export default Payment;
