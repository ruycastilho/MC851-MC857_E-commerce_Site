import React from 'react';
import { Alert } from 'reactstrap';


class AlertMsg extends React.Component {
    constructor(props,msg) {
	super(props);

	this.state = {
	    visible: true
	};

	this.onDismiss = this.onDismiss.bind(this);

	this.message = this.setMessage(props.msg);

	this.color = this.setColor(props.type);

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
    setMessage(msg){
	return msg;
    }

    onDismiss() {
	this.setState({ visible: false });
    }

    render() {
	return(
	    <Alert color={this.color} isOpen={this.state.visible} toggle={this.onDismiss}>
	      {this.message}
	    </Alert>
	);

    }
}


export default AlertMsg;
