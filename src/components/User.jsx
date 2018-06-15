import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardBody, Row, Col, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux';
import { withRouter } from 'react-router'
import "../User.css";
import axios from 'axios';
import $ from 'jquery';
import AlertMsg from './Alert';
import Item from './OrdersItens';
import AccordionItem from "./Accordion";
import CPF from 'gerador-validador-cpf';
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


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_active: 0,
            didSubmit : false,
            wasSuccess : false,
            email: "",
            address: "",
            cpf: "",
            orders: [],
        };
    }

    componentDidMount() {
        var event = new Event('mount');

        this.handleInfo(event);
        
    }

    handleInfo(event) {
        event.preventDefault();

        axios.get( "http://127.0.0.1:8000" + '/website/get_info/')
        .then(response => {

            const content = response.data.content;
            const cpf = CPF.format(content.cpf);
            this.setState({
                email: content.email,
                address: content.address,
                cpf: cpf,
            });
        })
        .catch(function (error) {
            // alert(error);

        });	
    }

    navIsActive(x) {
    	return this.state.nav_active === x ? true : false;
    }

    navToggleActive(event, x) {
        event.preventDefault();
        this.setState({nav_active: x});
        
        if (x === 0) {

            this.handleInfo(event);

        
        }
        else {
    
            axios.get( "http://127.0.0.1:8000" + '/website/get_all_orders/')
            .then(response => {
                const orders = response.data.content;
                // alert(JSON.stringify(orders));

                const Test = orders.map(order => {
                    return  <AccordionItem
                                type="Order"
                                track_id={order.track_id}
                                slip_code={order.slip_id}
                                id={order.order_id}
                                type_payment={order.type_of_payment}
                                date_payment={order.date_of_payment}
                                date_deliver={order.date_of_delivery}
                                date_order={order.date_of_order}
                                order_status={order.order_status}
                                status_payment={order.payment_status}
                                status_deliver={order.delivery_status}
                                address={order.delivery_code}
                                price={order.price}
                                orders={order.products.map( (data) => {
                                        return <Item
                                                name={data.nome}
                                                src={data.url}
                                                price={data.price}
                                                amount={data.quantity}
                                                />
                                    })}
                            />
                });

                this.setState({orders: Test});


            })
            .catch(function (error) {
                // alert(error);

            });	

        }

    }

    orderToggleValue(x) {
    	this.setState({typeOfTicket: x});
    }

    handleEmail(event) {
        event.preventDefault();
        var email = $("#email").val();

        const body =
		{
            "email": email,
		}
        this.setState({didSubmit : true})

        axios.post( "http://127.0.0.1:8000" + '/website/change_email/', JSON.stringify(body))
        .then(response => {

            if (response.data.status === 200) {
                this.setState({wasSuccess: true});
                this.handleInfo(event);
                
            }
            else {
                this.setState({wasSuccess: false});

            }
        
        })
        .catch(function (error) {
            alert(error);
            this.setState({wasSuccess: false});

        });	


    }
    
    render() {
      
    var feedback;
    if ( this.state.nav_active === 0 && this.state.didSubmit ) {
        feedback = this.state.wasSuccess ? (
            <AlertMsg msg="Email alterado com sucesso!" type="success" />
        ) : (
            <AlertMsg msg="Falha na alteração do email" type="error" />
        )
    } else {
        feedback = null;

    }

	const body = this.state.nav_active === 0 ? (
        <div>
            <Container>
                <Card>
                    <CardBody>
                        <Col>
                        <Label >Nome: {this.props.username}</Label>

                        </Col>
                        <Col>
                        <Label >Email: {this.state.email} </Label>
                        
                        </Col>
                        <Col>
                        <Label >CPF: {this.state.cpf} </Label>
                        
                        </Col>
                        <Col>
                        <Label >Endereço: {this.state.address} </Label>
                        
                        </Col>
                    </CardBody>
                </Card>
                <Form onSubmit={(e)=> {this.handleEmail(e)}} className="form-group" >
                    <FormGroup className="text-center" >
                        <Label  or="email">Alterar e-mail</Label>
                        <Input className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4" type="email" name="email" id="email" placeholder="Digite o novo e-mail aqui" />
                    </FormGroup>
                    <Button className=" col-12 col-sm-12 col-md-6 col-lg-4 offset-lg-4" onClick={this.handleClick}>Alterar</Button>

                </Form>
                
            </Container>
        </div>        
	) : (
        <div>
            {this.state.orders}
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
                        <Button onClick={(e) => {this.navToggleActive(e, 0)}} active={this.navIsActive(0)} className="col-6"> Configurações </Button>
                        <Button onClick={(e) => {this.navToggleActive(e, 1)}} active={this.navIsActive(1)} className="col-6"> Meus Pedidos </Button>
                    </Row>
		        </Container>
		        {body}
            </MiddleDiv>
            {feedback}            
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
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUser: (username) => {
//             dispatch({
//                 type: "CHANGE_USER",
//                 payload: username
//             })
//         }    ,
//         setStatus: (status) => {
//             dispatch({
//                 type: "CHANGE_STATUS",
//                 payload: status
//             })
//         }    ,    }
// }


export default withRouter(connect(mapStateToProps, null) (User));

// color:#9e1847;
