import React, { Component } from 'react';
import styled from 'styled-components';
import producttest from '../producttest.jpg';


const ProductListDiv = styled.div`
    background-color: transparent;
    // border-bottom-style: inset;
    // border-left-style: outset;
    // border-width: 3px;
    // border-color: gray;
    overflow:hidden;
    height: 100%;
    // height: 400px;
    float:right;
    width:75%;
    margin-top: 50px;
    // -webkit-border-radius: 20px 0 0 20px;
    // -moz-border-radius: 20px 0 0 20px;
    // border-radius: 20px 0 0 20px;
    display: flex;
    flex-flow: row nowrap;
    `;


const ProductDiv = styled.div`
  background-color: transparent;
  overflow:hidden;
  height: 20%;
  max-width:20%;
  margin: 0 auto;
  float:left;
  border: solid;
  border-width: 1px;
  border-color: silver;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;

`;

const ProductImg = styled.img`
    width: 100%;
    padding: 0.25em 1em;
    border: none;
    max-width:100%;
    max-height:100%;
    margin: 0 auto;

`;

const ProductName = styled.p`
    font-family: 'Ubuntu', sans-serif;
    padding: 5px;
    margin: 10px;
    font-size: 1.5 em;
    text-align: center;
    color: grey;
    border:none;
    width: 30%;
    margin: 0 auto;

`;

const ProductDetails = styled.p`
    font-family: 'Ubuntu', sans-serif;
    padding: 5px;
    margin: 10px;
    font-size: 0.5 em;
    text-align: center;
    color: silver;
    border:none;
    width: 30%;
    margin: 0 auto;

`;

// const TR = styled.tr`
//     margin:0px
//     max-width:100%;
//     max-height: 100%;
//     text-align:center;
//     font-family: 'Ubuntu', sans-serif;
//     display:flex;
//     flex-wrap:wrap;
// `;

// const TBody = styled.tbody`
//     display: block;

// `;

class ProductTable extends React.Component {
    render() {
    //   const rows = [];
  
      return (
        <ul>
          {/* <thead>
            <TR>
              <th>Nome</th>
              <th>Preço</th>
            </TR>
          </thead>
          <TBody>{rows}</TBody> */}
        </ul>
      );
    }
  }

  
class ProductList extends Component {

  render() {
    const product = (
      <ProductDiv>
          <ProductImg type="image" src={producttest} ></ProductImg>
          <ProductName>Iphone X</ProductName>
          <ProductDetails>16GB de Memória</ProductDetails> 
      </ProductDiv>
    );


    return (
      <ProductListDiv>

        {/* <ProductTable
          products={this.props.products}
        /> */}

        {/* criar row */}
        {product}
        {product}
        {product}
        {product}
        {product}


      </ProductListDiv>
    );
  }
}

export default ProductList;
