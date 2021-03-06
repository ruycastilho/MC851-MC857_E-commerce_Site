import React, { Component } from 'react';
import { Card, CardBody, Label,Col } from 'reactstrap';

import "../Orders.css";

class Item extends Component {

    render() {

				return (
						<Col className="col-12 col-lg-4">
								<Card>
										<CardBody>
											<Col className="col-12">
													<img alt="image" className="col-12 offset-md-0" src={this.props.src} />
											</Col>
											<Col className="col-12 text-center">
												<Col>
														<Label >{this.props.name} </Label>
													</Col>
													<Col>
														<Label >Quantidade: {this.props.amount} </Label>
													</Col>
													<Col>
														<Label >Preço Unitário: R$ {this.props.price} </Label>
													</Col>
											</Col>
									</CardBody>
								</Card>
						</Col>
				);
    }
}

export default Item;
