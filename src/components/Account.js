import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import OptionsBar from './AccountOptionsBar';
import styled from 'styled-components';

const PageDiv = styled.div`
    border:none;
    float:left;
    width:100%;

`;

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

const TopDivLeft = styled.div`
    background-color: coral;
    border-bottom-style: inset;
    border-right-style: inset;
    border-width: 3px;
    border-color: silver;
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
    font-size: 1.1em;
    text-align: center;
    padding:auto;
    color: whitesmoke;

`;
const Text = styled.p`
    font-family: 'Ubuntu', sans-serif;
    padding: 5px;
    margin: 10px;
    font-size: 1.5  em;
    color: coral;
    border-bottom: 1px solid;
`;
const LabelText = Text.extend`
    text-align:left;    
    border:none;

`;

const Form = styled.form`
    font-family: 'Ubuntu', sans-serif;
    padding: auto;
    color: oldlace;
    margin:0px
    max-width:40%;
    position:relative;
    top:5%;
    left:20%;
    max-height: 100%;

`;

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: coral;
    background: white;
    border: solid;
    border-width: 2px;
    max-height: 50px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
`;

const SubmitInput = styled.input`
    padding: 1.0em;
    margin: auto;
    color: oldlace;
    background: coral;
    border: solid;
    border-width: 2px;
    max-height: 50px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    font-size: 1.5 em;
    float:right;
`;

const CriticalInput = SubmitInput.extend`
    background: red;
    border: none;

`;

class Account extends Component {
  render() {
    return (
      <PageDiv className="Account" >
        <Header/>
        <TopDivLeft>
            <Title>Conta</Title>
        </TopDivLeft>
        <OptionsBar/>
        <MiddleDiv >
            <Form>
                <LabelText>Nome</LabelText>
                <Input type="text" placeholder="seunome" ></Input>
                <CriticalInput type="submit" value="Remover Conta"></CriticalInput>      
                <LabelText>Senha</LabelText>
                <Input type="password" placeholder="****" ></Input>
                <LabelText>E-mail</LabelText>
                <Input type="text" placeholder="seuemail@mail.com" ></Input>
                <SubmitInput type="submit" value="Salvar Alterações"></SubmitInput>      
                <SubmitInput type="submit" value="Cancelar"></SubmitInput>             </Form>
        </MiddleDiv>
        <Footer/>
      </PageDiv>
    );
  }
}

export default Account;

// color:#9e1847;