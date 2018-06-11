import React, { Component } from 'react';
import { Button, Collapse, CardBody, Card, Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Item from "./OrdersItens";
import AlertMsg from './Alert';

const orderstyle = {
    "margin-top": '1em',
    "background-color": "white",
};


const collapsiblestyle = {
    "padding-bottom": "0.5em",
    "border-bottom": "1px solid #f88379"
};

const imgstyle = {
    "max-width":"100%",
    "max-height": "250px",
    padding: "1em",
    "text-align": "center",
};

const itemstyle = {
    "border-bottom": "1px solid coral"
};


class Order extends Component {
    constructor(props) {
	super(props);

	this.valor = props.valor;
	this.qtdade = props.qtdade;
	this.total = props.total;
	this.data = props.data;
	this.name = props.name;
	this.id_order = props.id_order;
	this.id_prods= props.id_prods;
	this.status_pag = props.status_pag;
	this.status_ent = props.status_ent;
	this.src = props.src;
	this.adress = props.adress;
    }

    render() {
	
	const n = Array.from(Array(  this.name.length ).keys());

	const itens = (this.name.length === this.valor.length
		      &&  this.id_prods.length === this.src.length
		       && this.name.length === this.src.length
		      && this.name.length === this.qtdade.length) ? (
			  n.map((x) =>
				<Col xs="12">
 				<Item
				id={this.id_prods[x]}
 				name={this.name[x]}
 				src={this.src[x]}
 				valor={this.valor[x]}
 				qtdade={this.qtdade[x]}
 				/>
 				</Col>

			       )
		      ) : (
			   <AlertMsg msg={"Ocorreu um erro ao mostrar os produtos. Tente novamente ou entre em contato com o SAC™"} type="error" />
		      );

	return (
	    <Container style={orderstyle}>
		<Row>
		  <Col xs="12" className="text-center">
		    <h1> Pedido ({this.id_order}) </h1>
		  </Col>
		  {itens}
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
		     <Col xs="12">
		      Data: {this.data}
		    </Col>
		</Row>
	      </Container>
	);
    }
}

export default Order;

 // 		  <Col xs="12">
 // 		    <Item
 // 		      data={"10/06/2018"}
 // 		      id={2489294839}
 // 		      status_ent={"Ainda em estoque"}
 // 		      name={"Gotham"}
 // 		      src={"https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9417533&qld=90&l=430&a=-1"}
 // 		      valor={"R$66,60"}
 // 		      qtdade={"7"}
 // 		      adress={"Av. dos bobos, número zero"}
 // 		      />
 // 		  </Col>
