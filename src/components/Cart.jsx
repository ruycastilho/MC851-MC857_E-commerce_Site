import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import producttest from '../producttest.jpg';
import {Navbar, Nav, NavItem, NavLink, ButtonGroup ,Button, Row, Col, Container } from 'reactstrap';
import "../Cart.css";


const MiddleDiv = styled.div`
    background-color: whitesmoke;
    border-bottom-style: inset;
    border-top-style: outset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    height: 100%;
    width:100%;
    margin-top: 200px;

`;
const MiddleRightDiv = styled.div`
    background-color: whitesmoke;
    overflow:hidden;
    height: 100%;
    width:40%;
    float: right;
    // margin-top: 5%;
`;
const MiddleLeftDiv = styled.div`
    background-color: whitesmoke;
    overflow:hidden;
    height: 100%;
    width:60%;
    float: left;
    display: flex;
    flex-direction: row;

`;

const TopDiv = styled.div`
    background-color: transparent;
    overflow:hidden;
    height: 10%;
    float:left;
    width:100%;
    height:10%;
    margin-top: 100px;
    display:inline-block;
`;

const TopLeftDiv = styled.div`
    background-color: coral;
    border-right-style: inset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    height: 100%;
    float:left;
    width:20%;    
    -webkit-border-radius: 0 50px 0 0;
    -moz-border-radius: 0 50px 0 0;
    border-radius: 0 50px 0 0;
`;



const DeliveryDiv = styled.div`
    background-color: whitesmoke;
    border-bottom-style: inset;
    border-right-style: inset;
    border-left-style: outset;
    border-top-style: outset;
    border-width: 3px;
    border-color: grey;
    overflow:hidden;
    height: 50%;
    width:60%;
    margin: 0 auto;
    -webkit-border-radius: 20px 20px 20px 20px;
    -moz-border-radius: 20px 20px 20px 20px;
    border-radius: 20px 20px 20px 20px;

`;

const PriceAndFinishDiv = styled.div`
    background-color: transparent;
    overflow:hidden;
    height: 50%;
    width:60%;
    margin: 0 auto;
    justify-content: center;
    
`;

const FinishDiv = styled.div`
    background-color: transparent;
    overflow:hidden;
    height: 50%;
    width:100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;

`;

const PriceDiv = styled.div`
    background-color: transparent;
    overflow:hidden;
    height: 20%;
    width:100%;
    margin: 0 auto;
    display:inline-block;

`;

const ProductDescriptionDiv = styled.div`
    background-color: transparent;
    overflow:hidden;
    height: 30%;
    width:100%;
    margin: 0 auto;
    // border: solid;
    // border-width: 1px;
    // border-color: silver;
    // -webkit-border-radius: 20px;
    // -moz-border-radius: 20px;
    // border-radius: 20px;
    display: flex;
    justify-content: row;
`;

const ProductQuantityDiv = styled.div`
    background-color: transparent;
    overflow:hidden;
    height: 30%;
    width:100%;
    margin: 0 auto;
    // border: solid;
    // border-width: 1px;
    // border-color: silver;
    // -webkit-border-radius: 20px;
    // -moz-border-radius: 20px;
    // border-radius: 20px;
    display: inline-block;
`;


const CartTitleDiv = styled.div`
    background-color: transparent;
    overflow:hidden;
    height: 30%;
    width:100%;
    display: flex;
    justify-content: spaced-around;
    border-bottom: solid 1px coral;

`;
const CartColumnDiv = styled.div`
    background-color: transparent;
    overflow:hidden;
    height: 30%;
    width:33%;

    // display: flex;
    // justify-content: spaced-around;

`;
// const Title = styled.h1`
//     font-family: 'Ubuntu', sans-serif;
//     font-size: 1.1em;
//     display: block;
//     color: oldlace;
//     text-align:center;
//     height:100%;
//     margin:0;
//     padding: 14px 16px;
//     text-decoration: none;
// `;

// const PageLink = styled(Link)`
//   font-size: 1.1em;
//   background: coral;
//   color: oldlace;
//   margin: 0.5em;
//   padding: 0.25em 1em;
//   border: solid;
//   border-width: 1px;
//   border-color: coral;
//   -webkit-border-radius: 50px;
//   -moz-border-radius: 50px;
//   border-radius: 50px;
//   width:100%;
//   height:100%;
//   font-family: 'Ubuntu', sans-serif;
//   text-decoration: none;
  
// `;


// const Text = styled.p`
//     font-family: 'Ubuntu', sans-serif;
//     padding: 5px;
//     margin: 10px;
//     font-size: 1.5 em;
//     text-align: center;
//     color: coral;
//     border-bottom: 1px solid;
// `;

// const PriceText = styled.p`
//     font-family: 'Ubuntu', sans-serif;
//     padding: 5px;
//     margin: 10px;
//     font-size: 1.5 em;
//     text-align: center;
//     color: grey;
//     border:none;
//     width: 30%;
//     float:right;


// `;

// const ProductDivText = Text.extend`
//     border:none;
//     text-align: center;
//     color: grey;
//     border:none;
//     width:50%;
//     height: 100%;
//     margin: 5px;
// `;

// const ProductPriceText = ProductDivText.extend`
//     padding: 11px;
//     margin: auto;
//     height: 100%;
    
// `;


// const LabelText = Text.extend`
//     float:left;
//     text-align:left;    
//     border:none;
// `;

// const CartTitleText = Text.extend`
//     border-bottom: dashed;
//     border-width: 1px;
// `;


// const PriceLabel = LabelText.extend`
//     width: 50%;
// `;

// const Form = styled.form`
//     font-family: 'Ubuntu', sans-serif;
//     padding: auto;
//     color: oldlace;
//     margin:0px
//     max-width:100%;
//     max-height: 100%;
//     display: inline;
// `;

// const Input = styled.input`
//     padding: 0.5em;
//     margin: 0.5em;
//     color: coral;
//     background: white;
//     border: solid;
//     border-width: 2px;
//     max-height: 50px;
//     -webkit-border-radius: 50px;
//     -moz-border-radius: 50px;
//     border-radius: 50px;
//     float:center;
//     width: 60%;
// `;
// const QuantityInput = styled.input`
//     padding: 0.5em;
//     margin-left: 42%;
//     color: coral;
//     background: white;
//     border: solid;
//     border-width: 2px;
//     max-height: 50px;
//     -webkit-border-radius: 20px;
//     -moz-border-radius: 20px;
//     border-radius: 20px;
//     width: 10%;
//     text-align: center;
    
 
// `;

// const SubmitInput = styled.input`
//     padding: 1.0em;
//     margin: auto;
//     color: oldlace;
//     background: coral;
//     border: solid;
//     border-width: 2px;
//     max-height: 50px;
//     -webkit-border-radius: 30px;
//     -moz-border-radius: 30px;
//     border-radius: 30px;
//     font-size: 1.5 em;
//     float: right;
// `;

// const RemoveButton = styled.button`
//     color: oldlace;
//     background: coral;
//     border: solid;
//     border-width: 1px;
//     -webkit-border-radius: 20px;
//     -moz-border-radius: 20px;
//     border-radius: 20px;
//     font-size: 1.5 em;
//     float: right;
//     padding: 8px;
//     width: auto;
//     height: 100%;
// `;

// const ProductImg = styled.img`
//     width: 15%;
//     padding: 0.25em 1em;
//     border: none;
//     max-width:100%;
//     max-height:100%;
// `;

// const ProductName = styled.p`
//     font-family: 'Ubuntu', sans-serif;
//     padding: 5px;
//     margin: 10px;
//     font-size: 1.5 em;
//     text-align: center;
//     color: grey;
//     border:none;
//     width: 30%;
// `;

// const ProductDetails = ProductDivText.extend`
//     color: silver;
//     height: 100%;


// `;


class Cart extends Component {
  render() {
    
    // const product = (
    //     <ProductDiv>
    //         <ProductImg type="image" src={producttest} ></ProductImg>
    //         <ProductName>Iphone X</ProductName>
    //         <ProductDetails>16GB de Memória</ProductDetails> 
    //     </ProductDiv>
    // );
 
    return (
        <div>
            {/* <TopDiv>
                <TopLeftDiv>
                    <Title>Carrinho</Title>
                </TopLeftDiv>
            </TopDiv>
            <MiddleDiv>
                <MiddleLeftDiv>

                    <CartColumnDiv>
                        <CartTitleText>Produto</CartTitleText>

                        <ProductDescriptionDiv>
                            <ProductImg type="image" src={producttest} ></ProductImg>
                            <ProductDivText>Iphone X</ProductDivText>
                            <ProductDetails>16 GB</ProductDetails>
                        </ProductDescriptionDiv>

                        <ProductDescriptionDiv>
                            <ProductImg type="image" src={producttest} ></ProductImg>
                            <ProductDivText>Iphone X</ProductDivText>
                            <ProductDetails>16 GB</ProductDetails>
                        </ProductDescriptionDiv>

                        <ProductDescriptionDiv>
                            <ProductImg type="image" src={producttest} ></ProductImg>
                            <ProductDivText>Iphone X</ProductDivText>
                            <ProductDetails>16 GB</ProductDetails>
                        </ProductDescriptionDiv>

                    </CartColumnDiv>

                    <CartColumnDiv>
                        <CartTitleText>Quantidade</CartTitleText>

                        <ProductQuantityDiv>
                            <QuantityInput type="text" placeholder="1" ></QuantityInput>
                            <RemoveButton type="button">Remover</RemoveButton>
                        </ProductQuantityDiv>

                        <ProductQuantityDiv>
                            <QuantityInput type="text" placeholder="1" ></QuantityInput>
                            <RemoveButton type="button">Remover</RemoveButton>
                        </ProductQuantityDiv>

                        <ProductQuantityDiv>
                            <QuantityInput type="text" placeholder="1" ></QuantityInput>
                            <RemoveButton type="button">Remover</RemoveButton>
                        </ProductQuantityDiv>

                    </CartColumnDiv>

                    <CartColumnDiv>

                        <CartTitleText>Preço (R$)</CartTitleText>
                        <ProductPriceText>20,00</ProductPriceText>
                        <ProductPriceText>20,00</ProductPriceText>
                        <ProductPriceText>20,00</ProductPriceText>

                    </CartColumnDiv>

                </MiddleLeftDiv>
                <MiddleRightDiv>
                    <DeliveryDiv>
                        <Text>Cálculo do Frete</Text>
                        <Form>
                            <LabelText>CEP</LabelText>
                            <Input type="text" placeholder="Digite um CEP" ></Input>
                            <SubmitInput type="submit" value="Calcular"></SubmitInput> 
                        </Form>
                    </DeliveryDiv>
                    <PriceAndFinishDiv>
                        <PriceDiv>
                            <PriceLabel>Custo do Frete: R$</PriceLabel>
                            <PriceText>10,00</PriceText>
                        </PriceDiv>
                        <PriceDiv>

                            <PriceLabel>Custo dos Produtos: R$</PriceLabel>
                            <PriceText>20,00</PriceText>
                        </PriceDiv>
                        <PriceDiv>
                            <PriceLabel>Custo Total: R$</PriceLabel>
                            <PriceText>30,00</PriceText>
                        </PriceDiv>
                        <FinishDiv>
                            <PageLink to='/'>Continuar Compras</PageLink>
                            <PageLink to='/Contato'>Finalizar Compra &rarr;</PageLink>      
                        </FinishDiv>
                    </PriceAndFinishDiv>

                </MiddleRightDiv>

            </MiddleDiv> */}
        </div>

    );
  }
}

export default Cart;
