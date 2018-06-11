import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavLink, ButtonGroup ,Button, Row, Col, Container } from 'reactstrap';
import "../OptionsNav.css";



class OptionsNav extends Component {

    constructor(){
	super();
	this.state = {
	    active: 7
	};
    }


    isActive(x) {
    	return this.state.active == x ? true : false;
    }

    toggleActive(x) {
    	this.setState({active: x});
    }

    
    render() {
	return (
	    <Container className="btn-group2">

	      <Row className="btn-group2 ">
			<Button onClick={() => this.toggleActive(7)} active={this.isActive(7)} className="col-6 col-sm-6 col-md-3 col-xl-auto"> Todos </Button>
			<Button onClick={() => this.toggleActive(0)} active={this.isActive(0)} className="col-6 col-sm-4 col-md-3 col-xl-auto"> Eletrônicos </Button>
			<Button onClick={() => this.toggleActive(1)} active={this.isActive(1)} className="col-6 col-sm-4 col-md-3 col-xl-auto"> Refrigeradores </Button>
			<Button onClick={() => this.toggleActive(2)} active={this.isActive(2)} className="col-6 col-sm-4 col-md-3 col-xl-auto"> Lavadoras </Button>
			<Button onClick={() => this.toggleActive(3)} active={this.isActive(3)} className="col-6 col-sm-4 col-md-3 col-xl-auto"> Móveis </Button>
			<Button onClick={() => this.toggleActive(4)} active={this.isActive(4)} className="col-6 col-sm-4 col-md-3 col-xl-auto"> Livros </Button>
			<Button onClick={() => this.toggleActive(5)} active={this.isActive(5)} className="col-6 col-sm-4 col-md-3 col-xl-auto"> Notebook </Button>
			<Button onClick={() => this.toggleActive(6)} active={this.isActive(6)} className="col-6 col-sm-6 col-md-3 col-xl-auto"> Smartphones </Button>

	      </Row >

	    </Container>
	);
    }
}

export default OptionsNav;


