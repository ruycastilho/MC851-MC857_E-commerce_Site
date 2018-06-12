import React from 'react';
import { Alert } from 'reactstrap';


class AlertMsg extends React.Component {
    constructor(props) {
	super(props);

	this.state = {
	    visible: true
	};

		this.onDismiss = this.onDismiss.bind(this);

    }

    setColor(type){
	if(type === "error")
	    return "danger";
	else if (type === "warning")
		return "warning";
	else if (type === "success")
		return "success";
	return type;
    }

    onDismiss() {
		this.setState({ visible: false });
    }

    render() {
	return(
	    <Alert color={this.setColor(this.props.type)} isOpen={this.state.visible} toggle={this.onDismiss}>
	      {this.props.msg}
	    </Alert>
	);

    }
}


export default AlertMsg;
