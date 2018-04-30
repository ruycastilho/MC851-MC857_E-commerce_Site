import React, { Component } from 'react';
import styled from 'styled-components';

const ProductListDiv = styled.div`
    background-color: whitesmoke;
    border-bottom-style: inset;
    border-left-style: outset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    // height: 100%;
    height: 400px;
    float:right;
    width:75%;
    margin-top: 50px;
    -webkit-border-radius: 50px 0 0 50px;
    -moz-border-radius: 50px 0 0 50px;
    border-radius: 50px 0 0 50px;
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
    return (
      <ProductListDiv className="Header">
        <header className="Header">

        <ProductTable
          products={this.props.products}
        />

        </header>
      </ProductListDiv>
    );
  }
}

export default ProductList;
