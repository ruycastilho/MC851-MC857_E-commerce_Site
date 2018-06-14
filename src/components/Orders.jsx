import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Item from "./OrdersItens";
import AlertMsg from './Alert';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

const orderstyle = {
    "margin-top": '1em',
    "background-color": "white",
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

 const mapStateToProps = (state) => {
    return {
        username: state.username,
		isLoggedIn: state.isLoggedIn,
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
		}    ,
	
	}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Order));
