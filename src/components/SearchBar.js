import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-family: 'Ubuntu', sans-serif;
    padding: 5px;
    margin: 10px;
    font-size: 1.5 em;
    text-align: center;
    color: coral;
    border-bottom: 1px solid;
`;

const LabelText = Text.extend`
    float:left;
    text-align:left;    
    border:none;

`;

const SearchDiv = styled.div`
    background-color: whitesmoke;
    border-bottom-style: inset;
    border-right-style: inset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    height: 100%;
    float:left;
    width:20%;
    margin-top: 180px;
    -webkit-border-radius: 0 50px 50px 0;
    -moz-border-radius: 0 50px 50px 0;
    border-radius: 0 50px 50px 0;
    `;



const Form = styled.form`
    font-family: 'Ubuntu', sans-serif;
    padding: auto;
    color: oldlace;
    margin:0px
    max-width:100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
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
    float:left;
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
`;

class SearchBar extends Component {

  render() {
    return (
      <SearchDiv className="Header">
          <Text>Busca por Produtos</Text>
          <Form>
            <LabelText>Nome</LabelText>
            <Input type="text" placeholder="Digite um nome" ></Input>
            <LabelText>Categoria</LabelText>
            <Input type="text" placeholder="Digite uma categoria" ></Input>
            <LabelText>Marca</LabelText>
            <Input type="text" placeholder="Digite uma marca" ></Input>
            <SubmitInput type="submit" value="Buscar"></SubmitInput> 
          </Form>
      </SearchDiv>
    );
  }
}

export default SearchBar;
