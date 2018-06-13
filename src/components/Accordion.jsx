import React, { Component } from 'react';
import { Button, Collapse, CardBody, Card, Container, Row, Col } from 'reactstrap';

const itemstyle = {
    "margin-top": '1em',
};

const collapsiblestyle = {
        "padding-bottom": "0.5em",
    "border-bottom": "1px solid #f88379"
};

const togglestyle = {
    width: "100%",
    "background-color":"#f88379",
    "border":"2px solid #f88379",
};

class Toggle extends Button{};

class AccordionItem extends Component {
    constructor(props) {
	super(props);
	this.toggle = this.toggle.bind(this);
	this.state = { collapse: false };

	this.messages = props.msgs;
	this.data = props.data;
	this.name = props.name;
	this.id = props.id;
	this.status = props.status;
    }

    toggle() {
	this.setState({ collapse: !this.state.collapse });
    }

    render() {

	const cards = this.messages.map( (x) => <Card><CardBody> {x} </CardBody></Card>);
	
	return (
	    <div style={itemstyle}>
              <Toggle  onClick={this.toggle} style={togglestyle} > {this.name} ({this.id})</Toggle>
              <Collapse isOpen={this.state.collapse} style={collapsiblestyle}>
		<Container>
		  <Row>
		    <Col xs="12">
		      {this.name}
		    </Col>
		    <Col xs="4">
		      {this.data}
		    </Col>
		    <Col xs="4">
		      Id: {this.id}
		    </Col>
		     <Col xs="4">
		       Status: {this.status}
		    </Col>
		  </Row>
		  {cards}
		  
		</Container>
              </Collapse>
	    </div>
	);
    }
}

export default AccordionItem;
