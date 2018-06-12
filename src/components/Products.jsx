import React, { Component } from 'react';
import styled from 'styled-components';
import {     InputGroup, InputGroupAddon, Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Form, FormGroup, Input, Media, Collapse, Button, CardBody, Card, Container, Row, Col } from 'reactstrap';
import producttest from '../producttest.jpg';
import "../Products.css";
import OptionsNav from "./OptionsNav.jsx";
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import * as FA from 'react-icons/lib/fa';
import $ from 'jquery';
import axios from 'axios';
import AlertMsg from './Alert';

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

    constructor(props) {
        super(props);
        this.state = {
            prod: [],
        }
        this.handleSearch = this.handleSearch.bind(this);

    }

    componentDidMount() {

        var event = new Event('mount');
        this.handleSearch(event, this.props.category);

    }


    handleSearch(event, category) {
        event.preventDefault();
		var search = document.getElementById("searchForm");
		var string = $("#searchInput").val();
        // this.props.setSearch(string)
        
        // alert(string);
        var products_raw;

        if (string == "" && category == "") {
            axios.get('http://127.0.0.1:8000/products/get_products/')
            .then(response => {
    
                products_raw = response.data.content;
    
                const Test = products_raw.map(product => {
                    return <Product key={product.nome} legend={product.nome} sublegend={"Preço: R$" + product.preco} src={product.imagem_url} amount="10"/>
                });
                this.setState({prod: Test});
            })
            .catch(function (error) {
                // alert(error);
    
            });	
         
        }
        else if (string == "" && category != "") {
            // get by cat
            axios.get('http://127.0.0.1:8000/products/get_products_by_category/'+category)
            .then(response => {
    
                products_raw = response.data.content;
    
                const Test = products_raw.map(product => {
                    return <Product key={product.nome} legend={product.nome} sublegend={"Preço: R$" + product.preco} src={product.imagem_url} amount="10"/>
                });
                this.setState({prod: Test});
            })
            .catch(function (error) {
                // alert(error);
    
            });	
        }
        else if (string != "" && category == "") {
            // get by name
            axios.get('http://127.0.0.1:8000/products/get_products_by_name/' + string)
            .then(response => {
    
                products_raw = response.data.content;
    
                const Test = products_raw.map(product => {
                    return <Product key={product.nome} legend={product.nome} sublegend={"Preço: R$" + product.preco} src={product.imagem_url} amount="10"/>
                });
                this.setState({prod: Test});
            })
            .catch(function (error) {
                // alert(error);
    
            });	

        }
        else {
            // get by name and cat using both
            axios.get('http://127.0.0.1:8000/products/get_products_by_name_or_category/'+ category + "/" +string)
            .then(response => {
    
                products_raw = response.data.content;
    
                const Test = products_raw.map(product => {
                    return <Product key={product.nome} legend={product.nome} sublegend={"Preço: R$" + product.preco} src={product.imagem_url} amount="10"/>
                });
                this.setState({prod: Test});
            })
            .catch(function (error) {
                // alert(error);
    
            });	
        }
 
    }

    render() {
   
	return(
        <div>
            <Nav className="search-nav">
                <Form id="searchForm" onSubmit={(e) => {this.handleSearch(e, this.props.category) }}>		 
                    <InputGroup >
                        <Input id="searchInput" placeholder="O que você procura?"/>
                        <InputGroupAddon addonType="prepend" >
                        <Button color="coral" className="search-bar-button">
                        <FA.FaSearch color="white" style={{"font-size":"1.5em"}} />
                        </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Form>
			</Nav>
            <OptionsNav handleSearch={this.handleSearch} setActiveOption={this.setCategory}/>            
            <MainDiv id="products">
            <Container>
                    <Row>
                        {this.state.prod}
                    </Row>
            </Container>
            </MainDiv>
        </div>
        

	);
    }
}

// export default Products;


const mapStateToProps = (state) => {
    return {
        category: state.category,
        searchString: state.searchString,
        products: state.products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setProducts: (products) => {
            dispatch({
                type: "CHANGE_PRODUCTS",
                payload: products
            })
		}    ,
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Products));
