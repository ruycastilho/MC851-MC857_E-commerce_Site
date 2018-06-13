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
		this.state = {
			collapse: false
		};
		this.statusTransform = this.statusTransform.bind(this);
    }

    toggle() {
	this.setState({ collapse: !this.state.collapse });
    }

	statusTransform(x) {
		if (x === 0) {
			return "Aberto";
		}
		else {
			return "Fechado";
		}
	}
	
    render() {

	const cards = this.props.msgs.map( (x) => <Card>
												<CardBody>
													{x.timestamp} : 
													{x.sender} : 
													{x.message} 
												</CardBody>
											</Card>);
	
	return (
	    <div style={itemstyle}>
              <Toggle  onClick={this.toggle} style={togglestyle} > {this.name} ({this.id})</Toggle>
              <Collapse isOpen={this.state.collapse} style={collapsiblestyle}>
		<Container>
		  <Row>
		    <Col xs="4">
		      Id: {this.props.id}
		    </Col>
		     <Col xs="4">
		       Status: {this.statusTransform(this.props.status)}
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
