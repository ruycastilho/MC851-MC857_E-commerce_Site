import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import styled from 'styled-components';

const PageDiv = styled.div`
    border:none;
    float:left;
    width:100%;
    margin:0;
    padding:0;
    min-height:100%;
`;


class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,

    };


  }
  render() {
    return (
      <PageDiv className="App" >
        <Header status={this.state.isLoggedIn}/>
        <Main />
        <Footer/>
      </PageDiv>
    );
  }
}

export default App;

// color:#9e1847;