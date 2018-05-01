import React, { Component } from 'react';
import Home from './Home';
import Signup from './Signup';
import Payment from './Payment';
import User from './User';
import Cart from './Cart';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom'
// import styled from 'styled-components';

class Main extends Component {

  render() {
    return (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Cadastro' component={Signup}/>
            <Route path='/Pagamento' component={Payment}/>
            <Route path='/User' component={User}/>
            <Route path='/Carrinho' component={Cart}/>
            <Route path='/Contato' component={Contact}/>
        </Switch>
    </main>
    );
  }
}

export default Main;

