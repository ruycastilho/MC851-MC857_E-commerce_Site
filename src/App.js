import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import styled from 'styled-components';
import AlertMsg from './components/Alert';
import axios from 'axios';
import $ from 'jquery';
import {connect} from 'react-redux';
import { withRouter } from 'react-router'

const PageDiv = styled.div`
    border:none;
    float:left;
    width:100%;
    margin:0;
    padding:0;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;


class App extends Component {

    componentDidMount() {
        var user = localStorage.getItem('user');

        if (user != null) {
            this.props.setUser(user);
        
        }
        else {
            this.props.setStatus(false);
            this.props.setUser("");
        
        }
    }
    
    render() {
        const isLoggedIn = this.props.isLoggedIn;


        const finalize = isLoggedIn ? (
            <AlertMsg msg={this.props.isLoggedIn ? "true" : "false"} type="error" />
        ) : (
            <AlertMsg msg={this.props.isLoggedIn ? "true" : "false"} type="error" />
        )
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App));

// color:#9e1847;
