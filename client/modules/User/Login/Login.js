import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { signInRequest } from '../UserActions';


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
				<form>
					<input type="text" placeholder="Enter email" ref="email"/>
					<input type="password" placeholder="Enter password" ref="password"/>
					<input type="submit" onClick= {this.submitHandle}/>
				</form>
				{this.props.message}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		message : state.signup.data.message
	}
}

export default connect(mapStateToProps)(Login)
