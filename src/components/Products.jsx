import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import producttest from '../producttest.jpg';

const MainDiv = styled.div`
width: 100%;
margin: 2em auto;
`;


const ProdImg = styled.div`
width: 100%;
padding-top: 133%;
margin: 0.25em 0;
background: white url(${props => props.src}) no-repeat right top;
background-size: contain;
text-align: center;
`;

const Legend = styled.p `
font-size: 20px;
color: black;
position: absolute;
bottom: 20%;
margin: 0 auto;
width: calc(100% - 30px); 	// por causa do padding do avô
`;

const SubLeg = Legend.extend `
font-size: 15px;
bottom: 10%;
`;

// aqui a gente coloca as imagens de cada produto
const imgSrcs =[
    producttest,
    producttest,
    producttest,
    producttest,
    producttest,
    producttest,
]; 

// aqui os textos da legenda
const legends = [
    "Iphone X 16GB",
    "Iphone X 32GB",
    "Iphone X 64GB",
    "Iphone X 128GB",
    "Iphone X 256GB",
    "Iphone X 2⁶⁶⁶GB",    
];

//aqui as sub legendas
const subLegends =[
    "8x de R$666,66",
    "13x de R$666,66",
    "21x de R$666,66",
    "34x de R$666,66",
    "55x de R$666,66",
    "89x de R$666,66",  
];

function retCols(){
    var ret = [];
    var number;
    if(imgSrcs.length == legends.length && legends.length === subLegends.length)
	number = subLegends.length;
    else
	number = 0;
    for(var i=0; i<number; i++)
	ret.push(
	    <Col xl="2" sm="4" xs="6">
	      <ProdImg src={imgSrcs[i]}>
		<Legend>{legends[i]}</Legend>
		<SubLeg>{subLegends[i]}</SubLeg>
	      </ProdImg>
	    </Col>
	);
    return ret;
}

const cols = retCols(6);


class Products extends Component {


    render() {
	return(
	    <MainDiv id="products">
	      <Container>
		<Row>
		  {cols}
		</Row>
	      </Container>
	    </MainDiv>
	);
    }
}

export default Products;
