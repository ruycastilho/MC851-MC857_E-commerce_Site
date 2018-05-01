import React, { Component } from 'react';
import styled from 'styled-components';
// import { Switch, Route } from 'react-router-dom'

const MiddleDiv = styled.div`
    background-color: whitesmoke;
    border-bottom-style: inset;
    border-top-style: outset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    // height: 100%;
    height: 400px;
    width:100%;
    margin-top: 200px;
    
`;

const TopDiv = styled.div`
    background-color: coral;
    border-bottom-style: inset;
    border-right-style: inset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    height: 100%;
    float:left;
    width:20%;
    margin-top: 100px;
    -webkit-border-radius: 0 50px 0 0;
    -moz-border-radius: 0 50px 0 0;
    border-radius: 0 50px 0 0;

`;

const Title = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.1em;
    text-align: center;
    padding:auto;
    color: whitesmoke;

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

const Form = styled.form`
    font-family: 'Ubuntu', sans-serif;
    padding: auto;
    color: oldlace;
    margin:0px
    max-width:50%;
    position:relative;
    top:0%;
    left:25%;
    max-height: 100%;

`;

const Input = styled.input`
    padding: 0.5em;
    color: coral;
    background: white;
    border: solid;
    border-width: 2px;
    max-height: 50px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
`;

const InputButton = styled.input`
    padding: 0.5em;
    color: whitesmoke;
    background: coral;
    border: solid;
    border-width: 2px;
    max-height: 50px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    position: relative;
    left:30%;
`;

const SubmitInput = styled.input`
    float:right;
    padding: 1.0em;
    color: oldlace;
    background: coral;
    border: solid;
    border-width: 2px;
    max-height: 50px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    font-size: 1.5 em;
`;

const Select = styled.select`
    padding: 0.5em;
    margin:3px;
    color: whitesmoke;
    background: coral;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    border-color:transparent;
    max-height: 35px;
    float:left;
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
        <Form>
            <LabelText>Nome de Titular</LabelText>
            <Input type="text" placeholder="Digite um nome" ></Input>
            <LabelText>Número do Cartão</LabelText>
            <Input type="password" placeholder="Digite uma senha" ></Input>
            <LabelText>Código de Segurança</LabelText>
            <Input type="text" placeholder="Digite um e-mail" ></Input>
            <LabelText>Validade</LabelText>
            <Input type="text" placeholder="Digite um e-mail" ></Input> 
            <SubmitInput type="submit" value="Finalizar Pagamento"></SubmitInput>      
            <SubmitInput type="submit" value="Cancelar"></SubmitInput> 
        </Form>
    ) : (
        <InputButton type="button" onclick={this.handleClick} value="Imprima Boleto"></InputButton>
    );

    return (
        <div>
            <TopDiv>
                <Title>Pagamento</Title>
            </TopDiv>
            <MiddleDiv>
                <SelectDiv>
                    <LabelText>Selecione o tipo de Pagamento:</LabelText>
                    <Select name="typeOfPayment" onChange={this.handleChange}>
                        <option value="creditCard">Cartão de Crédito</option>
                        <option value="slip">Boleto Bancário</option>
                    </Select>
                </SelectDiv>
                {paymentMethod}
            </MiddleDiv>
        </div>

    );
  }
}

export default Payment;
