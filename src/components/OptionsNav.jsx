import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavLink, ButtonGroup ,Button, Row, Col, Container } from 'reactstrap';
import "../OptionsNav.css";
import { withRouter } from 'react-router'
import { connect } from 'react-redux';


class OptionsNav extends Component {

    isActive(x) {
    	return this.props.category == x ? true : false;
    }

    toggleActive(event, x) {
		this.props.setCategory(x);
		this.props.handleSearch(event, x);
    }

    
    render() {
		return (
			<Container className="btn-group2">

			<Row className="btn-group2 ">
				<Button onClick={(e) => {this.toggleActive(e, "")}} active={this.isActive("")} className="col-6 col-sm-6 col-md-3 col-xl-auto"> Todos </Button>
				<Button onClick={(e) => {this.toggleActive(e, "Eletrônicos")}} active={this.isActive("Eletrônicos")} className="col-6 col-sm-4 col-md-3 col-xl-auto"> Eletrônicos </Button>
				<Button onClick={(e) => {this.toggleActive(e, "Refrigeradores")}} active={this.isActive("Refrigeradores")} className="col-6 col-sm-4 col-md-3 col-xl-auto"> Refrigeradores </Button>
				<Button onClick={(e) => {this.toggleActive(e, "Lavadora")}} active={this.isActive("Lavadora")} className="col-6 col-sm-4 col-md-3 col-xl-auto"> Lavadoras </Button>
				<Button onClick={(e) => {this.toggleActive(e, "Moveis")}} active={this.isActive("Moveis")} className="col-6 col-sm-4 col-md-3 col-xl-auto"> Móveis </Button>
				<Button onClick={(e) => {this.toggleActive(e, "Livro")}} active={this.isActive("Livro")} className="col-6 col-sm-4 col-md-3 col-xl-auto"> Livros </Button>
				<Button onClick={(e) => {this.toggleActive(e, "Notebook")}} active={this.isActive("Notebook")} className="col-6 col-sm-4 col-md-3 col-xl-auto"> Notebook </Button>
				<Button onClick={(e) => {this.toggleActive(e, "Smartphone")}} active={this.isActive("Smartphone")} className="col-6 col-sm-6 col-md-3 col-xl-auto"> Smartphones </Button>

			</Row >

			</Container>
		);
    }
}

{/* export default OptionsNav; */}



const mapStateToProps = (state) => {
    return {
        category: state.category,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
		setCategory: (category) => {
            dispatch({
                type: "CHANGE_CATEGORY",
                payload: category
            })
        }    ,
	
	}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps) (OptionsNav));


