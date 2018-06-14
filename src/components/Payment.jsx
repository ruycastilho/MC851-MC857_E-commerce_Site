import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux';
import $ from 'jquery'
import CPF from 'gerador-validador-cpf';
import validator from 'validator';
import AlertMsg from './Alert';
import axios from 'axios';

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


class Payment extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSlip = this.handleSlip.bind(this);
        this.handleCard = this.handleCard.bind(this);

        this.state = {
            typeOfPayment: "creditCard",
            errorMsg: "",
            didSubmit : false,
            wasSuccess : false,
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleCard(event) {
		event.preventDefault();
		// var payment = document.getElementById("payForm");
		var name = $("#nome").val();
        var number = $("#number").val();
        var code = $("#cod").val();
        var cep = $("#cep").val();
        var cpf = $("#cpf").val();
        var mes = $("#mes").val();
        var ano = $("#ano").val();

        this.setState({didSubmit : true})

        if (name === "" || number === "" || code === "" || cep === "" || cpf === "" || mes === "" || ano === "" ) {
            this.setState({wasSuccess: false});
            this.setState({errorMsg: "Não é permitido deixar campo vazio."});
            return;
        }

        if (!CPF.validate(cpf)) {
            this.setState({wasSuccess: false});
            this.setState({errorMsg: "CPF inválido."});
            return;
        }

        if (!validator.isCreditCard(number)) {
            this.setState({wasSuccess: false});
            this.setState({errorMsg: "Número de Cartão inválido."});
            return;

        }

        CPF.format(cpf, 'digits');
        var formatted_cep = cep;
        formatted_cep.substring(1,5);
        formatted_cep.concat("-");
        formatted_cep.concat(cep.substring(6,8));
        
        
        const body =
		{
            clientCardName: name,
            cpf: cpf,            
            cardNumber: number,
            month: mes,
            year: ano,
            securityCode: code,
            CEP: formatted_cep,
            installments: 1,
            tipoEntrega: "PAC",
		}
            //  "clientCardName": "",
            //  "cpf": "18845601056",
            //  "cardNumber": "7410852096307410",
            //  "month":"02",
            //  "year": "2020",
            //  "securityCode":"190",
            //  "value": "1000.00",
            //  "instalments": "12",
            //  "CEP": "13083-852",
            //  "tipoEntrega": "PAC"

        // alert(name + " " + pwd + " " + email + " " + cpf + " " + address);

		axios.post('https://safe-beyond-19805.herokuapp.com/payment/pay_by_credit_card/',	JSON.stringify(body))
		.then(response => {
            // alert(response.data.status);
			if (response.data.status === 200) {
                this.setState({wasSuccess: true});

			}
			else {

                this.setState({wasSuccess: false});
                this.setState({errorMsg: "Falha no Pagamento."});

			}
		
		})
		.catch(function (error) {
			// alert(error);

		});	
    }


    handleSlip(event) {
		event.preventDefault();
		// var payment = document.getElementById("slipForm");
		var name = $("#nomeSlip").val();
        var addr = $("#addressSlip").val();
        var cep = $("#cepSlip").val();
        var cpf = $("#cpfSlip").val();

        this.setState({didSubmit : true})

        if (name === "" || addr === "" || cep === "" || cpf === "" ) {
            this.setState({wasSuccess: false});
            this.setState({errorMsg: "Não é permitido deixar campo vazio."});
            return;
        }

        if (!CPF.validate(cpf)) {
            this.setState({wasSuccess: false});
            this.setState({errorMsg: "CPF inválido."});
            return;
        }

        CPF.format(cpf, 'digits');
        var formatted_cep = cep;
        formatted_cep.substring(1,5);
        formatted_cep.concat("-");
        formatted_cep.concat(cep.substring(6,8));
        
        
        const body =
		{
            clientName: name,
            cpf: cpf,            
            address: addr,
            CEP: formatted_cep,
            tipoEntrega: "PAC",
		}
        //  "clientName":"FULANO B SILVA",
        //  "cpf":"18845601056",
        //  "address":"",
        //  "CEP":"13083852",
        //  "value":"120.00",
        //  "tipoEntrega" : "PAC"

        // alert(name + " " + pwd + " " + email + " " + cpf + " " + address);

		axios.post('https://safe-beyond-19805.herokuapp.com/payment/pay_by_credit_slip/',	JSON.stringify(body))
		.then(response => {
            // alert(response.data.status);
			if (response.data.status === 200) {
                this.setState({wasSuccess: true});

			}
			else {

                this.setState({wasSuccess: false});
                this.setState({errorMsg: "Falha no Pagamento."});

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
            <AlertMsg msg="Pagamento realizado com sucesso!" type="success" />
        ) : (
            <AlertMsg msg={this.state.errorMsg} type="error" />
        )
    } else {
        feedback = null;

    }

    const paymentMethod = this.state.typeOfPayment === "creditCard" ? (
        <Container>
            <Form id="payForm" onSubmit={(e) => {this.handleCard(e)} } className="form-group" >
                <FormGroup>
                    <Label for="name">Nome</Label>
                    <Input type="name" name="name" id="name" placeholder="Digite seu nome aqui" />
                </FormGroup>
                <FormGroup>
                    <Label for="number">Número do Cartão</Label>
                    <Input type="name" name="number" id="number" placeholder="Digite o número do cartão aqui" />
                </FormGroup>
                <FormGroup>
                    <Label for="cpf">CPF</Label>
                    <Input name="cpf" id="cpf" placeholder="Digite seu CPF aqui" />
                </FormGroup>
                <FormGroup>
                    <Label for="cod">Código de Segurança</Label>
                    <Input name="cod" id="cod" placeholder="Digite o código de segurança" />
                </FormGroup>
                <FormGroup>
                    <Label for="data">Mês de Validade</Label>
                    <Input name="data" id="mes" placeholder="Digite a mês de validade do cartão" />
                </FormGroup>
                <FormGroup>
                    <Label for="data">Ano de Validade</Label>
                    <Input name="data" id="ano" placeholder="Digite o ano de validade do cartão" />
                </FormGroup>
                <FormGroup>
                    <Label for="data">CEP</Label>
                    <Input name="data" id="cep" placeholder="Digite o CEP" />
                </FormGroup>
                <Button type="submit" className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4" >Finalizar</Button>
            </Form>

        </Container>
    ) : (

        <Container>
            <Form id="slipForm" onSubmit={(e) => {this.handleSlip(e)} } className="form-group" >
                <FormGroup>
                    <Label for="name">Nome</Label>
                    <Input type="name" name="name" id="nameSlip" placeholder="Digite seu nome aqui" />
                </FormGroup>
                <FormGroup>
                    <Label for="address">Endereço</Label>
                    <Input type="address" name="address" id="addressSlip" placeholder="Digite seu endereço aqui" />
                </FormGroup>
                <FormGroup>
                    <Label for="cep">CEP</Label>
                    <Input name="cep" id="cepSlip" placeholder="Digite seu CEP aqui" />
                </FormGroup>
                <FormGroup>
                    <Label for="cpf">CPF</Label>
                    <Input name="cpf" id="cpfSlip" placeholder="Digite seu CPF aqui" />
                </FormGroup>
                <Button type="submit" className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4" >Finalizar</Button>
            </Form>

        </Container>
        
    );

    return (
        <div>
            <TopDiv>
                <TopLeftDiv>
                    <Title>Pagamento</Title>
                </TopLeftDiv>
            </TopDiv>
            <MiddleDiv>
                <Col>
                    <FormGroup className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">
                        <Label for="exampleSelect">Opção de Pagamento</Label>
                        <Input onChange={this.handleChange} type="select" name="typeOfPayment" id="select">
                            <option value="creditCard">Cartão de Crédito</option>
                            <option value="bankSlip">Boleto Bancário</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col>
                    {paymentMethod}
                </Col>

            </MiddleDiv>
            {feedback}

        </div>

    );
  }
}

// export default Payment;

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


export default connect(mapStateToProps, mapDispatchToProps) (Payment);

// color:#9e1847;
