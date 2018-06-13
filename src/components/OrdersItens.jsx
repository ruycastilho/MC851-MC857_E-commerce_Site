import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

const imgstyle = {
    "max-width":"100%",
    "max-height": "250px",
    padding: "1em",
    "text-align": "center",
};

const itemstyle = {
    "border-bottom": "1px solid coral"
};

// class Toggle extends Button{};

class Item extends Component {
    constructor(props) {
	super(props);
	// this.toggle = this.toggle.bind(this);
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

  //   toggle() {
	// this.setState({ collapse: !this.state.collapse });
  //   }

    render() {

	return (
	    <div style={itemstyle}>
	      <Container>
		<Row>
		  <Col xs="12" sm="6" className="text-center" >
		    <img style={imgstyle} src={this.src} alt="image" />
		  </Col>
		  <Col  xs="12" sm="6" style={{"padding":"1em 0"}}>
		    <Col xs="12">
		      Nome: {this.name}
		    </Col>
		    <Col xs="12">
		      Id: {this.id}
		    </Col>
		    <Col xs="12">
		      Valor: {this.valor}
		    </Col>
		    <Col xs="12">
		      Quantidade: {this.qtdade}
		    </Col>
		  </Col>
		</Row>
		  
		</Container>
	    </div>
	);
    }
}

export default Item;
