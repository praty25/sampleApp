import React,{Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, Button, Col } from 'react-bootstrap';
import { signUpRequest } from '../UserActions';

class Signup extends React.Component {
	constructor(props) {
		super(props);

		this.submitForm=this.submitForm.bind(this);
	}

	submitForm(e) {
		e.preventDefault();
		let name = ReactDOM.findDOMNode(this.refs.name).value;
		let number = ReactDOM.findDOMNode(this.refs.number).value;
		let email = ReactDOM.findDOMNode(this.refs.email).value;
		let password = ReactDOM.findDOMNode(this.refs.password).value;
		console.log(name,number,email,password);
		if(name && number && email && password){
			this.props.dispatch(signUpRequest({name,number,email,password}));
		}

	}

	render() {
		return (
			<div>
				<form>
					<FormGroup>
						<Col sm={10}>
							<FormControl type="text" placeholder="Name" ref="name"/>
						</Col>
					</FormGroup>
					<FormGroup>
						<Col sm={10}>
							<FormControl type="text" placeholder="MobileNumber" ref="number"/>
						</Col>
					</FormGroup>
					<FormGroup>
						<Col sm={10}>
							<FormControl type="text" placeholder="Email" ref="email"/>
						</Col>
					</FormGroup>
					<FormGroup>
						<Col sm={10}>
							<FormControl type="password" placeholder="Password" ref="password"/>
						</Col>
					</FormGroup>
						<Col sm={10}>
							<Button bsStyle="primary"  onClick={this.submitForm}>Submit</Button>
						</Col>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state.signup);
	return {
		isRegistering : state.signup.isRegistering,
		isRegistered : state.signup.isRegistered,
		isRegisteredFailed : state.signup.isRegisteredFailed,
	}
}

export default connect(mapStateToProps)(Signup);