import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

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
    padding:0;
    height:60px;
    overflow:hidden;
    float:left;
    border-top-style: outset;
    border-width: 2px;
    border-color: coral;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    
`;

const ContactButton = styled(Link)`
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
          <ContactButton to='/User/Tickets/'>Fale Conosco!</ContactButton>
          <Text>&copy; 2018 - Grupo SAC - MC851/MC857 </Text>
        </header>
      </FooterDiv>
    );
  }
}

export default Footer;
