import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom'
import OptionsBar from './OptionsBar';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import OptionsNav from "./OptionsNav.jsx";
import Products from "./Products";
// import styled from 'styled-components';

class Home extends Component {

    constructor(props) {
	    super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn,
            username: props.username,
        };

    }

    componentWillReceiveProps(newProps) {
        this.state = {
            isLoggedIn: newProps.isLoggedIn,
            username: newProps.username,
        };
    }


    render() {
	return (
        <div>
            <OptionsNav status={this.state.isLoggedIn} username={this.state.username}/>
	        <Products status={this.state.isLoggedIn} username={this.state.username}/>
        </div>
	);
    }
}

export default Home;