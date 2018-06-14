import React, { Component } from 'react';
import styled from 'styled-components';
import { InputGroup, InputGroupAddon, Form, FormGroup, Input, Nav, Media, Collapse, Button, CardBody, Card, Container, Row, Col } from 'reactstrap';
import "../Products.css";
import OptionsNav from "./OptionsNav.jsx";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as FA from 'react-icons/lib/fa';
import $ from 'jquery';
import axios from 'axios';
import {url_backend} from "./Link";

const MainDiv = styled.div`
    width: 100%;
    margin: 2em auto;
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
        this.handleCart = this.handleCart.bind(this);
        this.state = {
            collapse: false,
            stock: 0,
        };
    }

    handleCart(event) {
        event.preventDefault();
        var number = $("#"+this.props.product_id).val();

        const body =
	      {
		  "product_id": this.props.product_id,
		  "product_quantity" : number,
	      };

        // alert(body);
        axios.post( 'https://safe-beyond-19805.herokuapp.com/cart/add_product/', JSON.stringify(body))
            .then(response => {

		const content = response.data;

		if (content.status === 200 ) {
                    // this.setState({wasSucces: content});
                    axios.get('https://safe-beyond-19805.herokuapp.com/products/get_stock_id/' + this.props.product_id)
			.then(response => {

			    const content = response.data.content;

			    this.setState({stock: content});

			})
			.catch(function (error) {
			    // alert(error);

			});	
		}

            })
            .catch(function (error) {
		// alert(error);

            });	
        
    }
    toggle(event) {
        event.preventDefault();
        axios.get( {url_backend} + '/products/get_stock_id/'+this.props.product_id)
            .then(response => {

		const content = response.data.content;

		this.setState({stock: content});
		this.setState({ collapse: !this.state.collapse });

            })
            .catch(function (error) {
		// alert(error);

            });	

    }

    render() {
        const cart = this.props.amount !== 0 ? (
            <Form className=" text-center" onSubmit={(e) => {this.handleCart(e)}}>
              <FormGroup >
                <div className="text-center">
                  <Input type="number" min="0" max={this.state.stock} name="number" id={this.props.product_id} placeholder="Quantidade" />
                </div>
              </FormGroup>
              <div className="button-cart text-center">
                <Button color="danger">Adicionar</Button>
              </div>
            </Form>
        ) : (
            <div className="text-center">
              <SubLeg>Produto Indisponível</SubLeg>
            </div>
        );

        return (
            <Col className="col-12 col-sm-4 col-lg-3">
              <img alt="image" className="col-6 offset-3 offset-md-0 col-md-12" src={this.props.src} />
              <Col className="col-12">
                <div className="text-center">
                  <Media body>
                    <Media heading>
                      <Legend>{this.props.legend}</Legend>
                    </Media>
                    <SubLeg>{this.state.sublegend}</SubLeg>
                  </Media>
                </div>
              </Col>
              <Col className="col-12">
                <div className="text-center">
                  <Button color="link" onClick={(e) => {this.toggle(e)}} style={{ marginBottom: '1rem' }}>Detalhes</Button>
                </div>
                <Collapse isOpen={this.state.collapse}>
                  <Card>
                    <CardBody >
                      <div className="text-center">
                        <Legend>Estoque:{this.state.stock} </Legend>
                      </div>
                      {cart}
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Col>

        );
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
	// var search = document.getElementById("searchForm");
	var string = $("#searchInput").val();
        
        // alert(string);
        var products_raw;

        if (string === "" && category === "") {
            axios.get('https://safe-beyond-19805.herokuapp.com/products/get_products/')
		.then(response => {
		    
                    products_raw = response.data.content;
                    // alert(JSON.stringify(products_raw[0]))
                    const Test = products_raw.map(product => {
			return <Product key={product.nome} product_id={product.idproduto} legend={product.nome} sublegend={"Preço: R$" + product.preco} src={product.imagem_url} />
                    });
                    this.setState({prod: Test});
		})
		.catch(function (error) {
                    // alert(error);
		    
		});	
            
        }
        else if (string === "" && category !== "") {
            // get by cat
            axios.get('https://safe-beyond-19805.herokuapp.com/products/get_products_by_category/'+category)
		.then(response => {
		    
                    products_raw = response.data.content;
                    // alert(JSON.stringify(products_raw))

                    const Test = products_raw.map(product => {
			return <Product key={product.nome} product_id={product.idproduto} legend={product.nome} sublegend={"Preço: R$" + product.preco} src={product.imagem_url} />
                    });
                    this.setState({prod: Test});
		})
		.catch(function (error) {
                    // alert(error);
		    
		});	
        }
        else if (string !== "" && category === "") {
            // get by name
            axios.get('https://safe-beyond-19805.herokuapp.com/products/get_products_by_name/' + string)
		.then(response => {
		    
                    products_raw = response.data.content;
		    
                    const Test = products_raw.map(product => {
			return <Product key={product.id} product_id={product.idproduto} legend={product.nome} sublegend={"Preço: R$" + product.preco} src={product.imagem_url} />
                    });
                    this.setState({prod: Test});
		})
		.catch(function (error) {
                    // alert(error);
		    
		});	

        }
        else {
            // get by name and cat using both
            axios.get('https://safe-beyond-19805.herokuapp.com/products/get_products_by_name_or_category/'+ category + "/" +string)
		.then(response => {
		    
                    products_raw = response.data.content;
		    
                    const Test = products_raw.map(product => {
			return <Product key={product.nome} product_id={product.idproduto} legend={product.nome} sublegend={"Preço: R$" + product.preco} src={product.imagem_url} />
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
	    <div >
	      <OptionsNav handleSearch={this.handleSearch} setActiveOption={this.setCategory} />
              <Nav className="search-nav mt-2" >
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
