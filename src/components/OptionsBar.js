import React, { Component } from 'react';
import styled from 'styled-components';

const OptionsDiv = styled.div`
    background-color: coral;
    overflow:hidden;
    margin-top: 80px;
    height: 50px;
    float:right;
    width:75%;
    -webkit-border-radius: 50px 0 0 50px;
    -moz-border-radius: 50px 0 0 50px;
    border-radius: 50px 0 0 50px;

    border-bottom-style: inset;
    border-left-style: outset;
    border-width: 3px;
    border-color: silver;
`;

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width:100%;
    overflow: hidden;
    background-color: coral;
    text-align:center;
    display: flex;
    justify-content: space-around;
  
`;

const Il = styled.li`
    float: left;
    border-right: 2px dotted oldlace;
    display:inline-block;
    width:33%;
    margin:0;
    padding:0;
    &:(last-child) {
        border-right: none;
    }

    
`;

const Link = styled.a`
    font-family: 'Ubuntu', sans-serif;
    display: block;
    color: oldlace;
    text-align:center;
    margin:0;
    padding: 14px 16px;
    text-decoration: none;

    ${props => props.active && 'background-color: tomato;'}
    
    &:(hover):not(:active) {
        background-color: lightsalmon;
    }
`;

class OptionsBar extends Component {

  render() {
    return (
      <OptionsDiv className="Header">
        <header className="Header">
           <Ul>
            <Il><Link href="#Eletrodomesticos">Eletrodomésticos</Link></Il>
            <Il><Link href="#Eletronics" active>Eletrônicos</Link></Il>
            <Il><Link href="#Informatica">Informática</Link></Il>
            <Il><Link href="#Livros">Livros</Link></Il>
           </Ul>
        </header>
      </OptionsDiv>
    );
  }
}

export default OptionsBar;
