import React, { Component } from 'react';
import Home from './Home.jsx';
import Signup from './Signup.jsx';
import Payment from './Payment.jsx';
import User from './User.jsx';
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
    constructor(props) {
	    super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn,
            username: props.username,
        };

    }

<<<<<<< HEAD
=======

    static getDerivedStateFromProps(props, state) {
        // Any time the current user changes,
        // Reset any parts of state that are tied to that user.
        // In this simple example, that's just the email.

        if (props.isLoggedIn) {
            alert("main prop true")
        }
        else {
            alert("main prop false")

        }

        if (props.isLoggedIn !== state.isLoggedIn) {
          alert("mudando na main");
          return {
            isLoggedIn: props.isLoggedIn,
            username: props.username
          };
        }
        return null;
    }

>>>>>>> 2e8ff07b4c6ba1883a054726554704f8ec1f2028
    render() {
        return (
        <MainDiv>
            <Switch>
<<<<<<< HEAD
                <Route exact path='/' component={Home}/>
                <Route path='/Cadastro' component={Signup}/>
                <Route path='/Pagamento' component={Payment}/>
                <Route path='/Conta' component={User}/>
                <Route path='/Carrinho' component={Cart}/>
                <Route path='/Contato' component={Contact}/>
=======
                <Route key={this.props.isLoggedIn} isLoggedIn={this.state.isLoggedIn} username={this.state.username} exact path='/' component={Home}/>
                <Route key={this.props.isLoggedIn} isLoggedIn={this.state.isLoggedIn} username={this.state.username} path='/Cadastro' component={Signup}/>
                <Route key={this.props.isLoggedIn} isLoggedIn={this.state.isLoggedIn} username={this.state.username} path='/Pagamento' component={Payment}/>
                <Route key={this.props.isLoggedIn} isLoggedIn={this.state.isLoggedIn} username={this.state.username} path='/Conta' component={User}/>
                <Route key={this.props.isLoggedIn} isLoggedIn={this.props.isLoggedIn} username={this.props.username} path='/Carrinho' component={Cart}/>
                <Route key={this.props.isLoggedIn} isLoggedIn={this.state.isLoggedIn} username={this.state.username} path='/Contato' component={Contact}/>
>>>>>>> 2e8ff07b4c6ba1883a054726554704f8ec1f2028
            </Switch>
        </MainDiv>
        );
    }
}

export default Main;

