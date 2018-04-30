import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import cart from '../cart.svg';
import user from '../user.svg';
import { Link } from 'react-router-dom'

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

const SubmitInput = styled.input`
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

const PageLink = styled(Link)`
  font-size: 1.1em;
  background: coral;
  color: oldlace;
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
  text-decoration: none;
`;


const Img = styled.img`
  max-height: 40px;
  padding: 0.25em 1em;
  border: none;
  float:right;

`;


class Header extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isLoggedIn: true,
      username: "Nome",
    };
  }

  handleSubmit() {
    var login = document.getElementById("loginForm");
    
    if (login.elements[0].value === "test" && login.elements[1].value === "test1") {
      this.setState({isLoggedIn: true, username:login.elements[0]});
      super.setState({isLoggedIn:true,  username:login.elements[0]});
    }

  } 

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    const shownElement = isLoggedIn ? (
        <div>
          <Text>Boas vindas, {this.state.username}!</Text>
          <Link to='/User'><Img type="image" src={user} ></Img></Link>
        </div>
      ) : (
        <div>
          <PageLink to='/Cadastro'>Cadastro</PageLink>
          <Text>Não tem conta?</Text>
          <Form onSubmit={this.handleSubmit}>
            <Input name="loginId" type="text" placeholder="Nome" ></Input>
            <Input name="loginPwd" type="password" placeholder="Senha" ></Input>
            <SubmitInput type="submit" value="Entrar"></SubmitInput>      
          </Form>
        </div>
      );

    return (
      <HeaderDiv className="Header">
        <header className="Header">
          <Logo src={logo} className="Title-Logo"/>
          <Title className="Header-title">SAColão E-Commerce</Title>
          <Link to='/Carrinho'><Img type="image" src={cart} ></Img></Link>
          {shownElement}
        </header>
      </HeaderDiv>
    );
  }
}

export default Header;
