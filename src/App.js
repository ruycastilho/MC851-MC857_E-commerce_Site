import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import styled from 'styled-components';
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
            this.props.setStatus(true);
            this.props.setUser(user);
        
        }
        else {
            this.props.setStatus(false);
            this.props.setUser("");
        
        }
    }
    
    render() {

        return (
            <PageDiv className="App" >
                <Header />
                <Main />
                <Footer />
            </PageDiv>
        );
    }
}

// export default App;


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


export default withRouter(connect(null, mapDispatchToProps) (App));

// color:#9e1847;
