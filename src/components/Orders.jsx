import React, { Component } from 'react';
import { Button, Collapse, CardBody, Card, Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';


const itemstyle = {
    "margin-top": '1em',
    "background-color": "white",
};

const collapsiblestyle = {
    "padding-bottom": "0.5em",
    "border-bottom": "1px solid #f88379"
};

const imgstyle = {
    "max-width":"100%",
    padding: "1em",
    "text-align": "center",
};

class Toggle extends Button{};

class Item extends Component {
    constructor(props) {
	super(props);
	this.toggle = this.toggle.bind(this);
	this.state = { collapse: true };

	this.valor = props.valor;
	this.qtdade = props.qtdade;
	this.total = props.total;
	this.data = props.data;
	this.name = props.name;
	this.id = props.id;
	this.status_pag = props.status_pag;
	this.status_ent = props.status_ent;
	this.src = props.src;
	this.adress = props.adress;
    }

    toggle() {
	this.setState({ collapse: !this.state.collapse });
    }

    render() {

	return (
	    <div style={itemstyle}>
	      <Container>
		<Row>
		  <Col xs="12" className="text-center">
		    <h1>{this.name}</h1> 
		  </Col>
		  <Col xs="12" sm="6" className="text-center" >
		    <img style={imgstyle} src={this.src}  />
		  </Col>
		  <Col  xs="12" sm="6" style={{"padding":"1em 0"}}>
		    <Col xs="12">
		      Id: {this.id}
		    </Col>
		    <Col xs="12">
		      Data: {this.data}
		    </Col>
		    <Col xs="12">
		      Valor: {this.valor}
		    </Col>
		    <Col xs="12">
		      Quantidade: {this.qtdade}
		    </Col>
		    <Col xs="12">
		      Total: {this.total}
		    </Col>
		    <Col xs="12">
		      Status pagamento: {this.status_pag}
		    </Col>
		    <Col xs="12">
		      Status entrega: {this.status_ent}
		    </Col>
		    <Col xs="12">
		    Endereço de entrega: {this.adress}
		  </Col>
		  </Col>
		</Row>
		  
		</Container>
	    </div>
	);
    }
}

export default Item;
