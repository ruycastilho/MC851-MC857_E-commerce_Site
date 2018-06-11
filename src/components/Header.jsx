import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import cart from '../cart.svg';
import user from '../user.svg';
import { Link } from 'react-router-dom';
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
import * as FA from 'react-icons/lib/fa';
import axios from 'axios';
import { connect } from 'react-redux';

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
			errorMsg: null,
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
    
    setErrorMsg(msg){
		this.setState({errorMsg: msg});
    }
    
    toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
    }


    handleLogin() {
		var login = document.getElementById("loginForm");
		var id = $("#loginId").val();
		var pwd = $("#loginPwd").val();

        const body =
		{
			username: id,
			password: pwd
		}

		try {

			axios.post('http://127.0.0.1:8000/website/login/',	JSON.stringify(body))
			.then(function (response) {
			})
			.catch(function (error) {
				alert(error);
			  });		
		
			localStorage.setItem('user', id);

		  } catch (error) {
			alert('localStorage error: ' + error.message);
			
          }

        // alert("in");
        this.props.setStatus(true);
		this.props.setUser(id);
		
		localStorage.setItem('user', id);
    }

    handleLogout(event) {

		try {

			axios.get('http://127.0.0.1:8000/website/logout/')
			.then(function (response) {
			})
			.catch(function (error) {
				alert(error);
			  });		
		
			localStorage.removeItem('user');
	
		} catch (error) {
			alert('localStorage error: ' + error.message);
			
        }
        this.props.setStatus(false);
        this.props.setUser("");
	
		var user = localStorage.removeItem('user');

        // alert("out");
	}
	
    render() {
		const isLoggedIn = this.props.isLoggedIn;

		const error = (this.state.errorMsg)  ? (
			<AlertMsg msg={this.state.errorMsg} type="error" />
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
			<Nav className="search-nav">
			<Form >		 
			<InputGroup >
				<Input placeholder="O que você procura?"/>
				<InputGroupAddon addonType="prepend" >
				<Button color="coral" className="search-bar-button">
				<FA.FaSearch color="white" style={{"font-size":"1.5em"}} />
				</Button>
				</InputGroupAddon>
			</InputGroup>
			</Form>
			</Nav>
			{error}
			</div>
		);
    }
}





// export default Header;


const mapStateToProps = (state) => {
    return {
        username: state.username,
        isLoggedIn: state.isLoggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
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
        }    ,    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Header);
