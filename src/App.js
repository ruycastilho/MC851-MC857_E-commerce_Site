import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import OptionsBar from './components/OptionsBar';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import styled from 'styled-components';
// import './App.css';

const PageDiv = styled.div`
    border:none;
    float:left;
    width:100%;

`;


class App extends Component {
  render() {
    return (
      <PageDiv className="App" >
        <Header/>
        <OptionsBar />
        <div >
          <SearchBar />
          <ProductList />
        </div>
        <Footer/>
      </PageDiv>
    );
  }
}

export default App;

// color:#9e1847;