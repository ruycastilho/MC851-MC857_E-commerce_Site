import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import AlertMsg from './Alert';
import "../Signup.css";
import {connect} from 'react-redux';
import axios from 'axios';
import $ from 'jquery'
import CPF from 'gerador-validador-cpf';
import validator from 'validator';
import {url_backend } from './Link';

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

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            didSubmit : false,
            wasSuccess : false,
            errorMsg: ""
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
		event.preventDefault();
		// var signup = document.getElementById("signupForm");
		var name = $("#signupName").val();
        var pwd = $("#signupPwd").val();
        var email = $("#signupEmail").val();
        var address = $("#signupAddr").val();
        var cpf = $("#signupCpf").val();

        this.setState({didSubmit : true})

        if (name === "" || pwd === "" || email === "" || address === "" || cpf === "" ) {
            this.setState({wasSuccess: false});
            this.setState({errorMsg: "Não é permitido deixar campo vazio."});
            return;
        }

        if (!validator.isEmail(email)) {
            this.setState({wasSuccess: false});
            this.setState({errorMsg: "Email inválido."});
            return;
        }

        if (!CPF.validate(cpf)) {
            this.setState({wasSuccess: false});
            this.setState({errorMsg: "CPF inválido."});
            return;
        }


        cpf = CPF.format(cpf, 'digits');

        const body =
		{
			username: name,
            password: pwd,
            email: email,
            cpf: cpf,
            address: address
		}

        // alert(name + " " + pwd + " " + email + " " + cpf + " " + address);

		axios.post("http://127.0.0.1:8000" +'/website/createuser/',	JSON.stringify(body))
		.then(response => {
            // alert(response.data.status);
			if (response.data.status === 200) {
                this.setState({wasSuccess: true});

			}
			else {

                this.setState({wasSuccess: false});
                this.setState({errorMsg: "Falha no Cadastro. Informações inválidas ou já existe cadastro com esses dados."});

			}
		
		})
		.catch(function (error) {
			// alert(error);

		});	
    }

  render() {

    var feedback;
    if (this.state.didSubmit ) {
        feedback = this.state.wasSuccess ? (
            <AlertMsg msg="Cadastro realizado com sucesso!" type="success" />
        ) : (
            <AlertMsg msg={this.state.errorMsg} type="error" />
        )
    } else {
        feedback = null;

    }

    return (
        <div>
            <TopDiv>
                <TopLeftDiv>
                    <Title>Cadastro</Title>
                </TopLeftDiv>
            </TopDiv>

            <MiddleDiv >
                <Container>
                    <Form id="signupForm" className="form-group" onSubmit={(e) => {this.handleClick(e)} } >
                        <FormGroup>
                            <Label for="name">Nome</Label>
                            <Input id="signupName" type="name" name="name" placeholder="Digite seu nome aqui" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input id="signupPwd" type="password" name="password" placeholder="Digite sua senha aqui" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input id="signupEmail" type="email" name="email" placeholder="Digite seu email aqui" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="cpf">CPF</Label>
                            <Input id="signupCpf" type="cpf" name="cpf" placeholder="Digite seu CPF aqui" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Endereço</Label>
                            <Input id="signupAddr" type="address" name="address" placeholder="Digite seu endereço aqui" />
                        </FormGroup>
                        <Button type="submit" className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4" >Cadastrar</Button>
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
