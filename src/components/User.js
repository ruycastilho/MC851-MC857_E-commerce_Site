import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom'
import AccountOptionsBar from './AccountOptionsBar';
import styled from 'styled-components';

const TopDiv = styled.div`
    background-color: coral;
    border-bottom-style: inset;
    border-right-style: inset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    height: 100%;
    float:left;
    width:20%;
    margin-top: 100px;
    -webkit-border-radius: 0 50px 0 0;
    -moz-border-radius: 0 50px 0 0;
    border-radius: 0 50px 0 0;

`;

const Title = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.5em;
    text-align: center;
    padding:auto;
    color: whitesmoke;

`;

class User extends Component {
  render() {
    return (
        <div>
            <TopDiv>
                <Title>Conta</Title>
                <AccountOptionsBar />
            </TopDiv>
            {/* dsadasd */}
        </div>

    );
  }
}

export default User;
