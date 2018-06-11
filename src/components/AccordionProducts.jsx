import React, { Component } from 'react';
import { Button, Collapse, CardBody, Card, Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';


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
	this.state = { collapse: true };

	this.messages = props.msgs;
	this.data = props.data;
	this.name = props.name;
	this.id = props.id;
	this.status = props.status;

	this.src = props.src;
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
		      <div className="centerBlock " >
			<img className="img" src={this.src} alt="Generic placeholder image" />
                      </div>
		    </Col>
		  </Row>
		  
		</Container>
              </Collapse>
	    </div>
	);
    }
}

export default AccordionItem;
