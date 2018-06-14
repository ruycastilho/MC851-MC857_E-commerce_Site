import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Form, Media, Input, InputGroup, InputGroupText, InputGroupAddon, Button, Row, Col } from 'reactstrap';
import "../Cart.css";
import AlertMsg from './Alert';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import {url_backend} from "./Link";

const MiddleDiv = styled.div`
    background-color: whitesmoke;
    border-bottom-style: inset;
    border-top-style: outset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    height: 100%;
    width:100%;
    min-height: 50%;

`;
const MiddleRightDiv = styled.div`
    background-color: whitesmoke;
    overflow:hidden;
    height: 100%;
    min-height: 50%;
    width:100%;
`;
const MiddleLeftDiv = styled.div`
    background-color: whitesmoke;
    overflow-y:auto;
    overflow-x:hidden;
    height: 100%;
    min-height: 50%;
    width:100%;
    // float: left;
    // display: flex;
    // flex-direction: row;

`;
const TopDiv = styled.div`
    background-color: transparent;
    overflow:hidden;
    height: 10%;
    width:100%;
    height:10%;
    display: flex;
    justify-content: center;  
    
`;

const TopLeftDiv = styled.div`
    background-color: coral;
    border-right-style: inset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    height:100%;
    width:100%; 

`;

const Title = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.1em;
    display: block;
    color: oldlace;
    text-align:center;
    height:100%;
    margin:0;
    padding: 14px 16px;
    text-decoration: none;
`;

const Text = styled.p`
    font-family: 'Ubuntu', sans-serif;
    padding: 5px;
    margin: 10px;
    font-size: 1.5 em;
    text-align: center;
    color: coral;
    border-bottom: 1px solid;
`;

const PriceText = styled.p`
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.5 em;
    text-align: center;
    color: grey;
    width: 100%;
    margin: 0 auto;


`;

class Product extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.state = {
            quantity: this.props.quantity,
            shouldAlert: false,
            msgtype: ""
        };
    }

    handleChange(event) {
        event.preventDefault();
	var number = $("#"+this.props.id).val();
        const body =
	    {
		"product_id": this.props.id,
		"product_quantity": number,
	    };

        axios.post('http://127.0.0.1:8000/cart/update_product/', JSON.stringify(body))
            .then(response => {

<<<<<<< HEAD
            // alert(JSON.stringify(response.data));
            if ( response.data.status !== 200) {
                this.setState({ alertMsg: "Quantidade indisponível em estoque.", msgtype: "error"})
            } else {
                this.setState({ quantity: number, alertMsg: "Quantidade alterada com sucesso!", msgtype: "success"})
=======
		// alert(JSON.stringify(response.data));
		if ( response.data.status !== 200) {
                    this.setState({ shouldAlert: true});
		}
>>>>>>> faa6a351133af674db6c48cccd7716a75f743610

            }
            this.setState({ shouldAlert: true})

            })
            .catch(function (error) {
		// alert(error);

            });


    }
    handleRemove(event) {
        const body =
	    {
		"product_id": this.props.id,
	    };

        axios.post('http://127.0.0.1:8000/cart/remove_product/', JSON.stringify(body))
        .then(response => {
            this.props.refresh(event);

        })
        .catch(function (error) {
            // alert(error);

            });

    }

    render() {

        const alert = this.state.shouldAlert ? (
            <AlertMsg type={this.state.msgtype} msg={this.state.alertMsg} />
        ) : (
            null
        );

        return (
            <div>
                '<Row >
                    <Col className="col-12 col-lg-3">
                        <div className="centerBlock " >
                            <img src={this.props.src} alt="product image" />
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-3">
                        <div className="centerBlock text-center">
                            <Media body>
                                <Media heading>
                                {this.props.name}
                                </Media>
                                <Col xs="12">
                                    {this.props.category}
                                </Col>
                                <Col xs="12">
                                    Preço Unitário: {this.props.price}
                                </Col>
                            </Media>
                        </div>
                        
                    </Col>
                    <Col className="col-12 col-lg-3">
                        <div className="centerBlock text-center">
                            <Form onSubmit={(e) => {this.handleChange(e)}}>
                                <InputGroup >
                                    <Row>
                                        <Input placeholder={this.props.quantity} type="number" id={this.props.id} step="1" />
                                    </Row>
                                </InputGroup>
                                <Button type="submit" color="success">Alterar</Button>{' '}
                                <Button onClick={(e) => {this.handleRemove(e)}} color="danger">Remover</Button>{' '}
                            </Form>
                    
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-3">
                        <div className="centerBlock text-center price-text">
                            <PriceText>Subtotal</PriceText>
                        <PriceText>R$ {Math.round((this.state.quantity*this.props.price) * 100)/100}</PriceText>
                        </div>                                    
                    </Col>      
                </Row>
                <Col>
                    <div className="text-center " >
                        {alert}     
                    </div>
                </Col>'
            </div>
        );
	
    }
}

class Cart extends Component {
    constructor(props) {
        super(props);
        
        this.handleLoad = this.handleLoad.bind(this);
        this.handleDelivery = this.handleDelivery.bind(this);
        this.state = {
            products: [],
            deliveryCost: 0.0,
            productsCost: 0.0,
        };
    }

    handleLoad(event) {
        event.preventDefault();
    
        axios.get('http://127.0.0.1:8000/cart/show_cart/')
        .then(response => {
            const cart = response.data.content;
            // alert(JSON.stringify(cart));
            var prod_cost = 0;

            const Test = cart.map(product => {
                prod_cost += product.price*product.quantity;

                return  <Product
                            refresh={this.handleLoad}
                            id={product.id}
                            name={product.nome}
                            category={product.category}
                            src={product.url}
                            price={product.price}
                            quantity={product.quantity}
                        />
            });
            // alert(prod_cost);
            this.setState({ products: Test,
                            productsCost: prod_cost});
        })
        .catch(function (error) {
            // alert(error);
            
        });	
    }

    handleDelivery(event) {
        event.preventDefault();
	var cep = $("#cepForm").val();

        const body =
	      {
		  "CEP": cep,
		  "tipoEntrega": "PAC",
	      };

        axios.post('http://127.0.0.1:8000/cart/get_frete_value/', JSON.stringify(body))
            .then(response => {

		// const value = response.data;
		// alert(JSON.stringify(response.data));
		this.setState({ deliveryCost: response.data.content });


            })
            .catch(function (error) {
		// alert(error);

            });


    }

    componentDidMount() {
        // api
        var ev = new Event('refresh');
        this.handleLoad(ev);
	
    }


    render() {

    var finalize;

    if (this.props.isLoggedIn === false ) {
        finalize = <AlertMsg msg="Faça Login para Finalizar Compra!" type="error" />

    } else if ( this.state.products.length === 0 ) {
        finalize = <AlertMsg msg="É necessário adicionar algum produto" type="error" />
    
    } else if (this.state.deliveryCost === 0) {
        finalize = <AlertMsg msg="É necessário calcular o frete!" type="error" />

    }
    else {
        finalize = <Link to="/Pagamento"><Button color="danger">Finalizar Compra</Button></Link>

    }

	return (
            <div>
              <TopDiv>
                <TopLeftDiv>
                  <Title>Carrinho </Title>
                </TopLeftDiv>
              </TopDiv>
              <MiddleDiv>
                <Row>
                    <Col className="col-12 col-lg-8">
                        <MiddleLeftDiv>
                            {this.state.products}
                        </MiddleLeftDiv>
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <MiddleRightDiv>
                            
                            <Col className="col-12"  >
                                <Form onSubmit={(e) => {this.handleDelivery(e)}}>
                                    <Text>Cálculo do Frete</Text>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText color="link">CEP</InputGroupText>
                                        </InputGroupAddon>
                                        <Input id="cepForm" placeholder="Digite seu CEP" />
                                        <InputGroupAddon addonType="append">
                                            <Button type="submit" color="info">Calcular</Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Form>
                            </Col>

                            <Col className="col-12" >
                                <Text>Custo dos Produtos</Text>
                                <PriceText>R$: {Math.round(this.state.productsCost * 100)/100}</PriceText>

                                <Text>Custo do Frete</Text>
                                <PriceText>R$: {Math.round(this.state.deliveryCost * 100)/100}</PriceText>

                                <Text>Custo Total</Text>
                                <PriceText>R$: {Math.round((this.state.productsCost + this.state.deliveryCost) * 100)/100}</PriceText>


                            </Col>

                            <Col className="col-12" >
                                <div className="text-center ">

                                    {finalize}
                                
                                </div>   

                            </Col>
                        </MiddleRightDiv>
                    </Col>

                </Row>
              </MiddleDiv>
            </div>

	);
    }
}

// export default Cart;


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
            });
        }    ,
        setStatus: (status) => {
            dispatch({
                type: "CHANGE_STATUS",
                payload: status
            });
        }    ,    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Cart));
