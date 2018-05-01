import React, { Component } from 'react';
import styled from 'styled-components';
// import { Switch, Route } from 'react-router-dom'

const MiddleDiv = styled.div`
    background-color: whitesmoke;
    border-bottom-style: inset;
    border-top-style: outset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    // height: 100%;
    height: 400px;
    width:100%;
    margin-top: 200px;

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

class Cart extends Component {
  render() {
    return (
        <div>
            <TopDiv>
                <TopLeftDiv>
                    <Title>Carrinho</Title>
                </TopLeftDiv>
            </TopDiv>
            <MiddleDiv>
            </MiddleDiv>
        </div>

    );
  }
}

export default Cart;
