import React, { Component } from 'react';
import Home from './Home.jsx';
import Signup from './Signup.jsx';
import Payment from './Payment';
import User from './User';
import Cart from './Cart.jsx';
import Contact from './Contact.jsx';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const MainDiv = styled.main`
    float:left;
    width:100%;
    margin:0;
    margin-top:3%;  
    padding:0;
    // min-height:100%;
    // height:100%;
    flex: 1 0 auto;
`;


class Main extends Component {

  render() {
    return (
    <MainDiv>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Cadastro' component={Signup}/>
            <Route path='/Pagamento' component={Payment}/>
            <Route path='/Conta' component={User}/>
            <Route path='/Carrinho' component={Cart}/>
            <Route path='/Contato' component={Contact}/>
        </Switch>
    </MainDiv>
    );
  }
}

export default Main;

