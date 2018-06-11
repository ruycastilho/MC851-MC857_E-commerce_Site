import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import styled from 'styled-components';
import AlertMsg from './components/Alert';
import axios from 'axios';
import $ from 'jquery';
import stores from './stores';

import { Provider } from 'mobx-react';

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
    constructor(props) {
	    super();
        this.state = {
            isLoggedIn: false,
            username: "",
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

    }

    handleLogin() {
		var login = document.getElementById("loginForm");
		var id = $("#loginId").val();
		var pwd = $("#loginPwd").val();

        const body =
		{
			username: id,
			password: pwd
		}

		try {

			axios.post('http://127.0.0.1:8000/website/login/',	JSON.stringify(body))
			.then(function (response) {
			})
			.catch(function (error) {
				alert(error);
			  });		
		
			localStorage.setItem('user', id);

		  } catch (error) {
			alert('localStorage error: ' + error.message);
			
          }
        this.setState({isLoggedIn: true, username: id});
          
        alert("in");

    }

    handleLogout(event) {

		try {

			axios.get('http://127.0.0.1:8000/website/logout/')
			.then(function (response) {
			})
			.catch(function (error) {
				alert(error);
			  });		
		
			localStorage.removeItem('user');
			this.setState({isLoggedIn: false, username:""});
	
		} catch (error) {
			alert('localStorage error: ' + error.message);
			
		}
            alert("out");
    }

	componentDidMount() {
		var user = localStorage.getItem('user');

		if ( user != null ) {
			this.setState({ username: user , isLoggedIn: true })

		}
		else {
			this.setState({ isLoggedIn: false, username: "" })

		}
    }
    
    render() {
        const isLoggedIn = this.state.isLoggedIn;


        const finalize = isLoggedIn ? (
            <AlertMsg msg={this.state.isLoggedIn ? "true" : "false"} type="error" />
        ) : (
            <AlertMsg msg={this.state.isLoggedIn ? "true" : "false"} type="error" />
        );

        return (
            <PageDiv className="App" >
                < Provider users={stores.users}>
                    <Header isLoggedIn={this.state.isLoggedIn} username={this.state.username} handleLogin={this.handleLogin.bind(this)} handleLogout={this.handleLogout.bind(this)} isLoggedIn={this.state.isLoggedIn} username={this.state.username}/>
                    {finalize}
                    <Main isLoggedIn={this.state.isLoggedIn} username={this.state.username}/>
                    <Footer isLoggedIn={this.state.isLoggedIn} username={this.state.username}/>
                </Provider>
            </PageDiv>
        );
    }
}

export default App;

// color:#9e1847;
