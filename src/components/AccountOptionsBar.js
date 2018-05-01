import React, { Component } from 'react';
import styled from 'styled-components';
// import { BrowserRouter, Switch, Route } from 'react-router-dom'


const OptionsDiv = styled.div`
    background-color: coral;
    border-right-style: inset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    height: 100%;
    float:right;
    width:50%;    
    -webkit-border-radius: 50px 0 0 0;
    -moz-border-radius: 50px 0 0 0;
    border-radius: 50px 0 0 0;
`;

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width:100%;
    height:100%;
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
    height:100%;
    width:33%;
    margin:0;
    padding:0;
    &:(last-child) {
        border-right: none;
    }

    
`;

const Link = styled.a`
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.1em;
    display: block;
    color: oldlace;
    text-align:center;
    height:100%;
    margin:0;
    padding: 14px 16px;
    text-decoration: none;

    ${props => props.active && 'background-color: tomato;'}
    
    &:(hover):not(:active) {
        background-color: lightsalmon;
    }
`;

class AccountOptionsBar extends Component {

  render() {
    return (
      <OptionsDiv className="Header">
           <Ul>
                <Il><Link href="#Configuracoes" active>Configurações</Link></Il>
                <Il><Link href="#Pedidos">Pedidos</Link></Il>
                <Il><Link href="#Tickets">Tickets</Link></Il>
           </Ul>
      </OptionsDiv>
    );
  }
}

export default AccountOptionsBar;
