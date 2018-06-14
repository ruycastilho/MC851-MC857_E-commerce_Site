import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import cart from '../cart.svg';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
    Button,
    Collapse,
    Container,
    Col,
    Form,
    FormGroup,
    Input,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Row
} from 'reactstrap';

import '../header.css';
import $ from 'jquery';
import AlertMsg from './Alert';
import axios from 'axios';
import { connect } from 'react-redux';
import * as FA from 'react-icons/lib/fa';
axios.defaults.withCredentials = true;

const Logo = styled.img`
     float: left;
     max-height: 55px;
     width:55px;
     border:0px;
     float:left;
 
 `;

class Header extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    isOpen: false,
	    loginAttempt: 0,
	};

	this.toggle = this.toggle.bind(this);
	this.handleLogin = this.handleLogin.bind(this);
	this.handleLogout = this.handleLogout.bind(this);
    }

    checkAttempt(){
	var n = this.state.loginAttempt;
	n = n+1;
	this.setState({ loginAttempt: n});
	console.log("tentativas de login: " + this.state.loginAttempt);
    }
    
    toggle() {
	this.setState({
	    isOpen: !this.state.isOpen
	});
    }

    handleLogin(event) {
	event.preventDefault();
	// var login = document.getElementById("loginForm");
	var id = $("#loginId").val();
	var pwd = $("#loginPwd").val();

        const body =
	    {
		username: id,
		password: pwd
	    };

	axios.post('http://127.0.0.1:8000/website/login/', JSON.stringify(body))
	    .then(response => {

		if (response.data.status === 200) {
		    
		    this.props.setLoginError(false);
		    this.props.setStatus(true);
		    this.props.setUser(id);
		    localStorage.setItem('user', id);
		}
		else {
		    this.props.setLoginError(true);
		}
		
	    })
	    .catch(function (error) {
		// alert(error);
		// alert("!");
		
		this.props.setLoginError(true);

	    });	

    }

    handleLogout(event) {
	event.preventDefault();

	try {
	    axios.get('http://127.0.0.1:8000/website/logout/')

		.then(function (response) {

		})
		.catch(function (error) {
		    alert(error);
		});		
	    
	} catch (error) {
	    
	}
	
        this.props.setStatus(false);
        this.props.setUser("");
	
	localStorage.removeItem('user');

    }
    
    render() {
	const isLoggedIn = this.props.isLoggedIn;

	const error = (this.props.loginErrorMsg)  ? (
	    <AlertMsg msg={"Falha no Login"} type="error" />
	) : null;

	const shownElement = isLoggedIn ? (

	    <Nav className="ml-auto" right navbar >
	      <NavItem>
		<h1>Boas vindas, {this.props.username}!</h1>
	      </NavItem>
	      
	      <Link to='/Conta' id="link" style={{"min-width":"40px","line-height":"3em"}}>
		<FA.FaUser style={{"color":"coral", "font-size":"1.5em",}}/>
	      </Link>
	      
	      <NavItem>
		<Form>
		  <Button type="button" onClick={this.handleLogout}>Sair</Button>

		</Form>
	      </NavItem>
	    </Nav>

	) : (
	    <Form  className="ml-auto container-fluid" id="loginForm" onSubmit={this.handleLogin}>
	      <Nav className="ml-auto row" right navbar >
		<NavItem className="col-12 col-md-3">
		  <FormGroup className="col-12">
		    <Input id="loginId" type="text" placeholder="Nome" className="col-12" ></Input>
		  </FormGroup>
		</NavItem>

		<NavItem className="col-12 col-md-3">
		  <FormGroup className="col-12">
		    <Input id="loginPwd" type="password" placeholder="Senha"  className="col-12"></Input>
		  </FormGroup>
		</NavItem>

		<NavItem className="col-12 col-md-3">
		    <Button id="" className="col-12">Entrar</Button>
		</NavItem>

		<NavItem className="col-12 col-md-3">
		  <Link to='/Cadastro' id="link" className="">
		    <Button id="" className="col-12"> Cadastrar </Button>
		  </Link>
		</NavItem>
	      </Nav>
	    </Form>

	);

	
	return (
	    <div>
	      <Navbar light expand="md" className="navbar2">
		<Logo src={logo} className="Title-Logo"/>
		<NavbarBrand href="/" className="navbar-brand2"> SAColão E-commerce </NavbarBrand>
		<NavbarToggler onClick={this.toggle} />
		<Collapse isOpen={this.state.isOpen} navbar id="loginForm"  >
		  {shownElement}
		    <Link to='/Carrinho' className="link">
			<img alt="cart" src={cart} id="carrinho"></img>
		    </Link>
		</Collapse>
	      </Navbar>
	      {error}
	    </div>
	);
    }
}


const mapStateToProps = (state) => {
    return {
        username: state.username,
		isLoggedIn: state.isLoggedIn,
		loginErrorMsg: state.loginErrorMsg,
		searchString: state.searchString
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
		setSearch: (string) => {
            dispatch({
                type: "CHANGE_SEARCH",
                payload: string
            })		}	,
		setUser: (username) => {
            dispatch({
                type: "CHANGE_USER",
                payload: username
            })
        }    ,
        setStatus: (status) => {
            dispatch({
                type: "CHANGE_STATUS",
                payload: status
            })
		}    ,
		setLoginError: (status) => {
            dispatch({
                type: "CHANGE_LOGIN_ERROR",
                payload: status
            })
        }    ,
	
	}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Header));
