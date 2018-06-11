import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux';

import Order from "./Orders";
import "../User.css";

const MiddleDiv = styled.div`
    background-color: whitesmoke;
    border-bottom-style: inset;
    border-top-style: outset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    height: 100%;
    width:100%;
`;

const TopDiv = styled.div`
    background-color: transparent;
    overflow:hidden;
    height: 10%;
    width:100%;
    height:10%;
    display: flex;
    justify-content: center;  
    
`;

const TopLeftDiv = styled.div`
    background-color: coral;
    border-right-style: inset;
    border-width: 3px;
    border-color: gray;
    overflow:hidden;
    height:100%;
    width:100%; 


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



class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_active: 1,
        };
    }


    navIsActive(x) {
    	return this.state.nav_active == x ? true : false;
    }

    navToggleActive(x) {
    	this.setState({nav_active: x});
    }

    orderToggleValue(x) {
    	this.setState({typeOfTicket: x});
    }

    render() {
  	
	const body = this.state.nav_active == 0 ? (
            <Container>
              <Form className="form-group" >
                <FormGroup className="text-center" >
                  <Label  or="email">Alterar e-mail</Label>
                  <Input className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4" type="email" name="email" id="email" placeholder="Digite o novo e-mail aqui" />
                </FormGroup>
                <Button className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4" onClick={this.handleClick}>Alterar</Button>

              </Form>
            </Container>
	) : (
	    <div>
	      <Order
		data={"06/06/2006"}
		id_order={2489294}
		id_prods={[3435203423,2403549]}
		name={["The Name of the Wind - Patrick Rothfuss","Gotham"]}
		src={["https://images-na.ssl-images-amazon.com/images/I/514LJcIGpfL._SX300_BO1,204,203,200_.jpg","https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9417533&qld=90&l=430&a=-1"]}
		valor={["R$66,60","R$49,99"]}
		qtdade={[8,4]}
		adress={"Rua dos bobos, número zero"}
		status_pag={"Aceito"}
		status_ent={"Entregue"}
		total={"R$732,76"}
		/>
	      <Order
		data={"08/06/2018"}
		id_order={4738392749}
		id_prods={[3435203423,2403549,374902]}
		name={["The Name of the Wind - Patrick Rothfuss","Gotham","A Revolução das Mulheres"]}
		src={["https://images-na.ssl-images-amazon.com/images/I/514LJcIGpfL._SX300_BO1,204,203,200_.jpg","https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9417533&qld=90&l=430&a=-1","https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9426525&qld=90&l=430&a=-1"]}
		valor={["R$66,60","R$49,99","R$60,00"]}
		qtdade={[8,4,1]}
		adress={"Rua dos bobos, número zero"}
		status_pag={"Processando"}
		status_ent={"Ainda em estoque"}
		total={"R$792,76"}
		/>
	    </div>
	);

	return (
            <div>
              <TopDiv>
                <TopLeftDiv>
                  <Title>Conta</Title>
                </TopLeftDiv>
              </TopDiv>
              <MiddleDiv>
		<Container className="btn-group2">
                  <Row className="btn-group2 ">
                    <Button onClick={() => this.navToggleActive(0)} active={this.navIsActive(0)} className="col-6"> Configurações </Button>
                    <Button onClick={() => this.navToggleActive(1)} active={this.navIsActive(1)} className="col-6"> Meus Pedidos </Button>
                  </Row>
		</Container>
		{body}

              </MiddleDiv>
            </div>

	);
    }
}

// export default User;

const mapStateToProps = (state) => {
    return {
        username: state.username,
        isLoggedIn: state.isLoggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (username) => {
            dispatch({
                type: "CHANGE_USER",
                payload: username
            })
        }    ,
        setStatus: (status) => {
            dispatch({
                type: "CHANGE_STATUS",
                payload: status
            })
        }    ,    }
}


export default connect(mapStateToProps, mapDispatchToProps) (User);

// color:#9e1847;
