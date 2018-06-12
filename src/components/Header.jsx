import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import cart from '../cart.svg';
import user from '../user.svg';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import ReduxThunk from 'redux-thunk'

import {
	Col,
	Row,
	Container,
    Button,
    Collapse,
    Form,
    FormGroup,
    Label,
    Input,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';

import '../header.css';
import $ from 'jquery';
import AlertMsg from './Alert';
import axios from 'axios';
import { connect } from 'react-redux';
import * as FA from 'react-icons/lib/fa';

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

const PageLink = styled(Link)`
   font-size: 1.1em;
   background: coral;
   color: oldlace;
   margin: 0.5em;
   padding: 0.25em 1em;
   border: solid;
   border-width: 1px;
   border-color: coral;
   max-width:100%;
   max-height:100%;
   float:right;
   font-family: 'Ubuntu', sans-serif;
   text-decoration: none;
 `;




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
		var login = document.getElementById("loginForm");
		var id = $("#loginId").val();
		var pwd = $("#loginPwd").val();

        const body =
		{
			username: id,
			password: pwd
		}

		const payload = JSON.stringify(body);

		axios.post('http://127.0.0.1:8000/website/login/',	JSON.stringify(body))
		.then(response => {

			if (response.data.status == 200) {
				// this.props.setLogin(response);
				this.props.setLoginError(false);
				this.props.setStatus(true);
				this.props.setUser(id);
			this.handleSearch
				localStorage.setItem('user', id);
			}
			else {
				this.props.setLoginError(true);

			}
		
		})
		.catch(function (error) {
			// alert(error);
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
	
		var user = localStorage.removeItem('user');

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
			<Form inline className="ml-auto" id="loginForm" onSubmit={this.handleLogin}>
			<Nav className="ml-auto" right navbar >
			<NavItem>
			<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
				<Input id="loginId" type="text" placeholder="Nome" ></Input>
			</FormGroup>
			</NavItem>
			<NavItem>
			<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
				<Input id="loginPwd" type="password" placeholder="Senha" ></Input>
			</FormGroup>
			</NavItem>
			<NavItem>
			<Button id="">Entrar</Button>
			</NavItem>
			<NavItem>
			<Button id=""> Cadastrar </Button>
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
					<Link to='/Carrinho' id="link"><img type="image" src={cart} id="carrinho"></img></Link>
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
