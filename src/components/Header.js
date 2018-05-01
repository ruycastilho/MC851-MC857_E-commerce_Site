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
    max-height: 50px;
    float:left;
    width:100%;
    position: fixed;

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

const Button = styled.button`
  background: coral;
  color: oldlace;
  font-size: 1.1em;
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
  width: 40px;
  padding: 0.25em 1em;
  border: none;
  float:right;
  max-width:100%;
  max-height:100%;
`;


class Header extends Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      isLoggedIn: false,
      username: "Nome",
    };
  }

  handleLogin(event) {
    var login = document.getElementById("loginForm");
    event.preventDefault();

    if (login.elements[0].value === "admin" && login.elements[1].value === "admin") {
      this.setState({isLoggedIn: true, username:login.elements[0].value});
      super.setState({isLoggedIn:true,  username:login.elements[0].value});
    }
    else {
      var input = document.getElementById("loginId");
      input.value = input.defaultValue;

      input = document.getElementById("loginPwd");
      input.value = input.defaultValue;
      alert("Nome e/ou Senha inválidos.");
      
    }

  } 

  handleLogout(event) {
    event.preventDefault();
    this.setState({isLoggedIn: false});
    super.setState({isLoggedIn: false});

  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    const shownElement = isLoggedIn ? (
        <div>
          <Button type="button" onClick={this.handleLogout}>Sair</Button>          
          <Text>Boas vindas, {this.state.username}!</Text>
          <Link to='/User'><Img type="image" src={user} ></Img></Link>
        </div>
      ) : (
        <div>
          <PageLink to='/Cadastro'>Cadastro</PageLink>
          <Text>Não tem conta?</Text>
          <Form id="loginForm" onSubmit={this.handleLogin} method="post">
            <Input id="loginId" type="text" placeholder="Nome" ></Input>
            <Input id="loginPwd" type="password" placeholder="Senha" ></Input>
            <SubmitInput type="submit" value="Entrar"></SubmitInput>      
          </Form>
        </div>
      );

    return (
      <HeaderDiv className="Header">
        <header className="Header">
          <Logo src={logo} className="Title-Logo"/>
          <Link to='/'><Title className="Header-title">SAColão E-Commerce</Title></Link>
          <Link to='/Carrinho'><Img type="image" src={cart} ></Img></Link>
          {shownElement}
        </header>
      </HeaderDiv>
    );
  }
}

export default Header;
