import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom'
import OptionsBar from './OptionsBar';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import OptionsNav from "./OptionsNav.jsx";
import Products from "./Products";
// import styled from 'styled-components';

class Home extends Component {
    render() {
	return (
        <div>
            <OptionsNav />
	        <Products/>
        </div>
	);
    }
}

export default Home;