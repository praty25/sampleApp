import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { signInRequest } from '../UserActions';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router';


class Login extends React.Component {
	constructor(props) {
		super(props)

		this.submitHandle = this.submitHandle.bind(this)
	}

	submitHandle(e){
		e.preventDefault();
		let email = ReactDOM.findDOMNode(this.refs.email).value;
		let password = ReactDOM.findDOMNode(this.refs.password).value;
		// console.log("coming inside this",email,password);
		if(email && password){
			this.props.dispatch(signInRequest({email,password}))
		}
	}	

	render() {
		return (
			<div>
				<Link to={'/SignUp'}>Signup</Link>	
				<form>
					<h1>Welcome Back! Please Login</h1>
					<FormGroup>
						<FormControl type="text"  ref="email" placeholder="email"/>
					</FormGroup>
					<FormGroup>
						<FormControl type="password" ref="password" placeholder="Password"/>
					</FormGroup>
					<FormGroup>
						<FormControl type="submit" className="btn btn-primary" onClick={this.submitHandle} value="Log In"/>
					</FormGroup>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		message : state.signup.data.message,
		token : state.signup.data.token,
	}
}

export default connect(mapStateToProps)(Login)
