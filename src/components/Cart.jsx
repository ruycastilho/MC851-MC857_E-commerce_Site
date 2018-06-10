import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import producttest from '../producttest.jpg';
import {Media, Input, InputGroup, Form, FormGroup, InputGroupText, InputGroupAddon, ButtonGroup ,Button, Row, Col, Container } from 'reactstrap';
import "../Cart.css";
import AlertMsg from './Alert';

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


class Cart extends Component {
  render() {
    
    const product = (
        <Row >
            <Col className="col-12 col-lg-3">
                <div class="centerBlock " >
                    <img class="img" src="https://images-na.ssl-images-amazon.com/images/I/514LJcIGpfL._SX300_BO1,204,203,200_.jpg" alt="Generic placeholder image" />
                </div>
            </Col>
            <Col className="col-12 col-lg-3">
                <div class="centerBlock text-center">
                    <Media body>
                        <Media heading>
                        Nome do Produto
                        </Media>
                        Descrição do Produto
                    </Media>
                </div>
                
            </Col>
            <Col className="col-12 col-lg-3">
                <div class="centerBlock text-center">

                    <InputGroup>
                        <Input placeholder="Quantidade" type="number" step="1" />
                    </InputGroup>
                    <Button color="danger">Remover</Button>{' '}
            
                </div>
            </Col>
            <Col className="col-12 col-lg-3">
                <div class="centerBlock text-center price-text">
                    <PriceText>R$: XX,XX</PriceText>
                </div>                                    
            </Col>             
        </Row>
    );
 
    const finalize = null;
    // const finalize = this.state.isLoggedIn ? (
//      <Button color="danger">Finalizar Compra</Button>{' '}
    // ) : (
        {/* <AlertMsg msg="Faça Login para Finalizar Compra!" type="error" /> */}
    // );

    return (
        <div>
            <TopDiv>
                <TopLeftDiv>
                    <Title>Carrinho</Title>
                </TopLeftDiv>
            </TopDiv>
            <MiddleDiv>
                <Row>
                    <Col className="col-12 col-lg-8">
                        <MiddleLeftDiv>
                        
                        {product}
                        {product}
                        {product}


                        </MiddleLeftDiv>
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <MiddleRightDiv>
                            
                            <Col className="col-12"  >
                                <Text>Cálculo do Frete</Text>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText color="link">CEP</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Digite seu CEP" />
                                    <InputGroupAddon addonType="append">
                                        <Button color="info">Calcular</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                 
                            </Col>

                            <Col className="col-12" >
                                <Text>Custo dos Produtos</Text>
                                <PriceText>R$: XX,XX</PriceText>

                                <Text>Custo do Frete</Text>
                                <PriceText>R$: XX,XX</PriceText>

                                <Text>Custo Total</Text>
                                <PriceText>R$: XX,XX</PriceText>


                            </Col>

                            <Col className="col-12" >
                                <div class="text-center ">
                                    {/* <Button color="danger">Finalizar Compra</Button> */}
                                    <AlertMsg msg="Faça Login para Finalizar Compra!" type="error" />

                                    {/* {finalize} */}
                                
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

export default Cart;
