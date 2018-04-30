import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom'
import OptionsBar from './OptionsBar';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
// import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
        <div>
            <OptionsBar />
            <div >
                <SearchBar />
                <ProductList />
            </div>
        </div>
    );
  }
}

export default Home;
