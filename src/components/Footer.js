import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavItem, NavLink, ButtonGroup ,Button, Row, Col, Container } from 'reactstrap';
import "../Footer.css";

const Text = styled.p`
    font-family: 'Ubuntu', sans-serif;
    padding: 10px;
    font-size: 1.0  em;
    text-align: center;
    color: coral;
    max-height: 50px;
    margin:auto;
    position:absolute;
    height:100%;
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
    width: 100%;
    flex-shrink: 0;

    
`;


class Footer extends Component {

  render() {
    return (
      <FooterDiv className="Footer">
        <Row className="Row">
          <Col>
          <Button className="col-12 col-sm-12 col-md-3 col-lg-3 offset-lg-2 col-xl-4 offset-xl-2" color="link"><Link className="link" to='/Contato'>Fale Conosco!</Link></Button>
          </Col>
          <Col>
            <Text className="col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">&copy; Grupo SAC - MC851/MC857</Text>
          </Col>
        </Row>
      </FooterDiv>
    );
  }
}

export default Footer;
//  <Button className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4" onClick={this.handleClick}>Cadastrar</Button>
