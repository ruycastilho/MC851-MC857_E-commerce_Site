import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import cart from '../cart.svg';

const Title = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.5em;
    text-align: left;
    padding:auto;
    color: coral;
    float:left;

`;
const Text = styled.p`
    font-family: 'Ubuntu', sans-serif;
    color: oldlace;
    padding: auto;
    font-size: 1.0  em;
    text-align: left;
    color: coral;
    max-height: 50px;
    float:right;
`;


const Logo = styled.img`
    float: left;
    max-height: 55px;
    width:55px;
    border:0px;
    float:left;

`;

const HeaderDiv = styled.div`
    background-color: whitesmoke;
    border-bottom-style: inset;
    border-width: 3px;
    border-color: coral;
    overflow:hidden;
    height: 50px;
    float:left;
    width:100%;
    `;



const Form = styled.form`
  font-family: 'Ubuntu', sans-serif;
  padding: auto;
  color: oldlace;

    margin:0px
    font-size: 1.5em;
    text-align: left;
    max-width:100%;
    max-height: 100%;
    float:right;

`;

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: coral;
    background: white;
    border: solid;
    border-width: 2px;
    max-height: 50px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
`;

const Button = styled.button`
  background: coral;
  color: oldlace;
  font-size: 0.75em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: solid;
  border-width: 1px;
  border-color: coral;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  max-width:100%;
  max-height:100%;
  float:right;
  font-family: 'Ubuntu', sans-serif;

`;

const SignButton = Button.extend`
  font-size: 1.1em;

`;

const Cart = styled.input`
  max-height: 40px;
  padding: 0.25em 1em;
  border: none;
  float:right;

`;

class Header extends Component {

  // const status = this.state.status;

  render() {
    return (
      <HeaderDiv className="Header">
        <header className="Header">
          <Logo src={logo} className="Title-Logo"/>
          <Title className="Header-title">SAColão E-Commerce</Title>
          <Cart type="image" src={cart}></Cart>
          <SignButton>Cadastro</SignButton>
          <Text>Não tem conta?</Text>
         
          <Form>
            <Input type="text" placeholder="Nome" ></Input>
            <Input type="password" placeholder="Senha" ></Input>
            <Button type="button" onclick="alert('!!')">Entrar</Button> 
          </Form>
        </header>
      </HeaderDiv>
    );
  }
}

export default Header;
