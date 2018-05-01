import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Settings from './Settings';
import Orders from './Orders';
import Tickets from './Tickets';

// import styled from 'styled-components';

class Main extends Component {

  render() {
    return (
    <main>
        <Switch>
            <Route exact path='/Configuracoes' component={Settings}/>
            <Route path='/Pedidos' component={Orders}/>
            <Route path='/Tickets' component={Tickets}/>
        </Switch>
    </main>
    );
  }
}

export default Main;

