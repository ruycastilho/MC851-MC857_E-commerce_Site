import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AlertMsg from './Alert';
import "../Signup.css";
import {connect} from 'react-redux';

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

// const Form = styled.form`
//     font-family: 'Ubuntu', sans-serif;
//     padding: auto;
//     color: oldlace;
//     margin:0px
//     max-width:30%;
//     position:relative;
//     top:5%;
//     left:20%;
//     max-height: 100%;
//     display: flex;
//     flex-direction: column;
// `;

// const Input = styled.input`
//     padding: 0.5em;
//     margin: 0.5em;
//     color: coral;
//     background: white;
//     border: solid;
//     border-width: 2px;
//     max-height: 50px;
//     -webkit-border-radius: 50px;
//     -moz-border-radius: 50px;
//     border-radius: 50px;
// `;

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

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            didSubmit : false,
            wasSuccess : false,
            isLoggedIn: props.isLoggedIn,
            username: props.username
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // ... mandar pra api
        this.setState({didSubmit : true})
    }

    componentWillReceiveProps(newProps) {
        this.state = {
            isLoggedIn: newProps.isLoggedIn,
            username: newProps.username,
        };
    }


  render() {

    const feedback = (this.state.didSubmit )  ? (
        (this.state.wasSuccess) ? (
            <AlertMsg msg="Cadastro realizado com sucesso!" type="success" />
        ) : (
            <AlertMsg msg="Falha no cadastro!" type="error" />
        )
	) : (
        null
    );

    return (
        <div>
            <TopDiv>
                <TopLeftDiv>
                    <Title>Cadastro</Title>
                </TopLeftDiv>
            </TopDiv>

            <MiddleDiv >
                <Container>
                    <Form className="form-group" >
                        <FormGroup>
                            <Label for="name">Nome</Label>
                            <Input type="name" name="name" id="name" placeholder="Digite seu nome aqui" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Digite sua senha aqui" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Digite seu email aqui" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="cpf">CPF</Label>
                            <Input type="cpf" name="cpf" id="cpf" placeholder="Digite seu CPF aqui" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Endereço</Label>
                            <Input type="address" name="address" id="address" placeholder="Digite seu endereço aqui" />
                        </FormGroup>
                        <Button className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4" onClick={this.handleClick}>Cadastrar</Button>
                    </Form>

                </Container>

            </MiddleDiv>
            {feedback}

        </div>
    );
  }
}

// export default Signup;

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


export default connect(mapStateToProps, mapDispatchToProps) (Signup);

// color:#9e1847;
