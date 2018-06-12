import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom'
import OptionsBar from './OptionsBar';
import SearchBar from './SearchBar';
import Products from "./Products";

class Home extends Component {

    render() {
	return (
        <Products />
	);
    }
}

export default Home;