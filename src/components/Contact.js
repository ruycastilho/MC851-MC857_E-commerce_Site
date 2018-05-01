import React, { Component } from 'react';
import styled from 'styled-components';

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

const SelectDiv = styled.div`
    background-color: transparent;
    border:none;
    overflow:hidden;
    padding:5px;
    height: 10%;
    float:left;
    width:100%;
    float:left;
    display: flex;
    justify-content:left;
`;

const SelectLeftDiv = styled.div`
    background-color: transparent;
    border:none;
    overflow:hidden;
    padding:5px;
    height: 100%;
    float:left;
    width:20%;
    display: flex;
    justify-content: left;
`;

const SelectRightDiv = styled.div`
    background-color: transparent;
    border:none;
    overflow:hidden;
    padding:5px;
    height: 100%;
    float:left;
    display: flex;
    justify-content: left;
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
    font-size: 1.5  em;
    color: coral;
    border-bottom: 1px solid;
`;
const LabelText = Text.extend`
    text-align:left;    
    border:none;

`;

const Form = styled.form`
    font-family: 'Ubuntu', sans-serif;
    padding:5px;
    color: oldlace;
    max-width:80%;
    max-height: 100%;
    float:left;

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

const SubmitInput = styled.input`
    float:right;
    padding: 1.0em;
    color: oldlace;
    background: coral;
    border: solid;
    border-width: 2px;
    margin-top:160px;
    max-height: 50px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    font-size: 1.5 em;
    
`;

const TextArea = styled.textarea`
    float:left;
    color: coral;
    background: white;
    border: solid;
    border-width: 1px;
    margin: 10px;
    width:500px;
    height:200px;
    max-height:100%;
    max-width:100%;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border-color:coral;
    font-size: 2.0 em;
`;

class Tickets extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            typeOfTicket: "Default",
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

  render() {

    const typeOfTicket = this.state.typeOfTicket === "Default" ? (
        null
    ) : (
        <SelectRightDiv>
            <LabelText>Código do Pedido:</LabelText>
            <Input type="text" placeholder="Digite o número do pedido" ></Input>
        </SelectRightDiv>
    );
    
    return (
      <div>
        <TopDiv>
            <Title>Novo Ticket</Title>
        </TopDiv>
        <MiddleDiv >
            <SelectDiv>
                <SelectLeftDiv>
                <LabelText>Selecione o tipo de Ticket:</LabelText>
                    <Select name="typeOfTicket" onChange={this.handleChange}>
                        <option value="Default">Geral</option>
                        <option value="Order">Pedido</option>
                    </Select>
                </SelectLeftDiv>
                {typeOfTicket}

            </SelectDiv>

            <Form>
                <LabelText>Corpo do Ticket</LabelText>
                <TextArea type="text" placeholder="Escreva seu ticket aqui.." ></TextArea> 
                <SubmitInput type="submit" value="Enviar Ticket"></SubmitInput>      
                <SubmitInput type="submit" value="Cancelar"></SubmitInput> 
            </Form>
        </MiddleDiv>
      </div>
    );
  }
}

export default Tickets;
