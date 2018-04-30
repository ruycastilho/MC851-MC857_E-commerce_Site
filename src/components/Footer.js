import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-family: 'Ubuntu', sans-serif;
    padding: 20px;
    font-size: 1.0  em;
    text-align: center;
    color: coral;
    max-height: 50px;
    margin:auto;
    position:absolute;
    left:43%;
    `;

const FooterDiv = styled.div`
    background-color: whitesmoke;
    border:none;
    position:absolute;
    bottom:0;
    width:100%;
    height:60px;
    overflow:hidden;
    float:left;
    border-top-style: outset;
    border-width: 2px;
    border-color: coral;
    
`;

const ContactButton = styled.a`
  font-family: 'Ubuntu', sans-serif;
  padding: 5px;
  margin: 20px;
  font-size: 1.0  em;
  text-align: left;
  color: coral;
  max-height: 50px;
  float:left;

`;

class Footer extends Component {

  render() {
    return (
      <FooterDiv className="Footer">
        <header className="Header">
          <ContactButton href="/SAC/" class="button">Fale Conosco!</ContactButton>
          <Text>&copy; 2018 - Grupo SAC - MC851/MC857 </Text>
        </header>
      </FooterDiv>
    );
  }
}

export default Footer;
