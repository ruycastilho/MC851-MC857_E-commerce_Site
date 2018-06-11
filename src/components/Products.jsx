import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Input, Media, Collapse, Button, CardBody, Card, Container, Row, Col } from 'reactstrap';
import producttest from '../producttest.jpg';
import "../Products.css";


const MainDiv = styled.div`
    width: 100%;
    margin: 2em auto;
`;


const ProdImgDiv = styled.div`
    max-height: 100px;
    padding: 10px;
    width: auto;
    padding-top: 133%;
    background: white url(${props => props.src}) no-repeat top;
    background-size: contain;
`;

const Legend = styled.p `
    font-size: 20px;
    color: black;
    margin: 0 auto;
    width: calc(100% - 30px); 	// por causa do padding do avô
    margin-top: 15px;
    
`;

const SubLeg = Legend.extend `
    font-size: 15px;
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



class Product extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        const cart = this.props.amount != 0 ? (
            <Form class=" text-center">
                <FormGroup >
                    <div class="text-center">
                        <Input type="number" name="number" id="exampleNumber" placeholder="Quantidade" />
                    </div>
                </FormGroup>
                    <div class="button-cart text-center">
                        <Button color="danger">Adicionar</Button>
                    </div>
            </Form>
        ) : (
            <div class="text-center">
                <SubLeg>Produto Indisponível</SubLeg>
            </div>
        );

        return (
            <Col className="col-12 col-sm-4 col-lg-3">
                <img className="col-6 offset-3 offset-md-0 col-md-12" src={this.props.src} />
                <Col className="col-12">
                    <div class="text-center">
                        <Media body>
                            <Media heading>
                                <Legend>{this.props.legend}</Legend>
                            </Media>
                            <SubLeg>{this.props.sublegend}</SubLeg>
                        </Media>
                    </div>
                </Col>
                <Col className="col-12">
                    <div class="text-center">
                        <Button color="link" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Detalhes</Button>
                    </div>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody >
                                <div class="text-center">
                                    <Legend>Estoque:{this.props.amount} </Legend>
                                </div>
                                {cart}
                            </CardBody>
                        </Card>
                    </Collapse>
                </Col>
            </Col>

        )
    }
}
  

class Products extends Component {
    render() {
    const products = [
        {legend: "Iphone X 16GB", sublegend:"8x de R$666,66", src:producttest, amount: 10},
        {legend: "Iphone X 16GB", sublegend:"8x de R$666,66", src:producttest, amount: 0},
        {legend: "Iphone X 16GB", sublegend:"8x de R$666,66", src:producttest, amount: 0},
        {legend: "Iphone X 16GB", sublegend:"8x de R$666,66", src:producttest, amount: 10},
        {legend: "Iphone X 16GB", sublegend:"8x de R$666,66", src:producttest, amount: 0},
        {legend: "Iphone X 16GB", sublegend:"8x de R$666,66", src:producttest, amount: 10}
    ];
        
    const Test = products.map(product => (
        <Product key={product.legend} legend={product.legend} sublegend={product.sublegend} src={product.src} amount={product.amount}/>
    ));

        
	return(
	    <MainDiv id="products">
	      <Container>
                <Row>
                    {Test}
                    {/* {cols} */}
                </Row>
	      </Container>
	    </MainDiv>
	);
    }
}

export default Products;






// function retCols(){
//     var ret = [];
//     var number;
//     if(imgSrcs.length == legends.length && legends.length === subLegends.length)
// 	number = subLegends.length;
//     else
// 	number = 0;
//     for(var i=0; i<number; i++)
// 	ret.push(
// 	    <Col xl="2" sm="4" xs="6">
// 	      <ProdImg src={imgSrcs[i]}>
//                 <Legend>{legends[i]}</Legend>
//                 <SubLeg>{subLegends[i]}</SubLeg>
// 	      </ProdImg>
// 	    </Col>
// 	);
//     return ret;
// }

// const cols = retCols(6);


// function createProducts(){
//     var ret = [];
//     for(var i=0; i<products.length; i++)
// 	ret.push(
// 	    <Product legend={products.legend} sublegend={products.sublegend} src={products.src}/>
// 	);
//     return ret;
// }

// const prod_col = createProducts();