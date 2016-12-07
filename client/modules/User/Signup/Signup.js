import React,{Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, Button, Col } from 'react-bootstrap';
import { signUpRequest } from '../UserActions';
import { Link } from 'react-router';

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
				<h1>New to website? Signup Here!! </h1>
				<form>
					<FormGroup>
						<FormControl type="text" placeholder="Name" ref="name"/>
					</FormGroup>
					<FormGroup>
						<FormControl type="text" placeholder="MobileNumber" ref="number"/>
					</FormGroup>
					<FormGroup>
						<FormControl type="text" placeholder="Email" ref="email"/>
					</FormGroup>
					<FormGroup>
						<FormControl type="password" placeholder="Password" ref="password"/>
					</FormGroup>
					<FormGroup>
						<FormControl type="submit" className="btn btn-primary" onClick={this.submitForm} value="Sign Up"/>
					</FormGroup>	
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