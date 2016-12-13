import React,{Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl } from 'react-bootstrap'; 
import { signUpRequest } from '../UserActions';
import { ReactToastr, ToastContainer, ToastMessage} from 'react-toastr';
import { browserHistory } from 'react-router';

class Signup extends Component {
	constructor(props) {
		super(props);

		this.submitForm=this.submitForm.bind(this);
	}

  componentWillReceiveProps(nextProps) {
  	if(nextProps.message == 'Email Id already exists') {
  		this.refs.container.error(`${nextProps.message}`);
  	} else if(nextProps.message == 'User registered successfully'){
  		browserHistory.push('/Login')
  	}
  }
  
	submitForm(e) {
		e.preventDefault();
		let name = ReactDOM.findDOMNode(this.refs.name).value;
		let number = ReactDOM.findDOMNode(this.refs.number).value;
		let email = ReactDOM.findDOMNode(this.refs.email).value;
		let password = ReactDOM.findDOMNode(this.refs.password).value;	
		let city =	ReactDOM.findDOMNode(this.refs.city).value;	
		let locality = ReactDOM.findDOMNode(this.refs.locality).value;
		// console.log(name,number,email,password);
		if(name && number && email && password && city && locality){
			this.props.dispatch(signUpRequest({name, number, email, password, city, locality}))
		}
	}

	render() {
		return (
			<div>
				<h1>New to website? Signup Here!! </h1>
				<form>
					<FormGroup>
						<FormControl type="text" placeholder="Name" ref="name" />
					</FormGroup>
					<FormGroup>
						<FormControl type="text" placeholder="MobileNumber" ref="number" />
					</FormGroup>
					<FormGroup>
						<FormControl type="text" placeholder="Email" ref="email" />
					</FormGroup>
					<FormGroup>
						<FormControl type="password" placeholder="Password" ref="password" />
					</FormGroup>
					<FormGroup>
						<FormControl type="text" placeholder="city" ref="city" />
					</FormGroup>
					<FormGroup>
						<FormControl type="text" placeholder="locality" ref="locality" />
					</FormGroup>
					 <ToastContainer ref="container"
                        toastMessageClass={ToastMessage.jQuery}
                        className="toast-top-right" />
					<FormGroup>
						<FormControl type="submit" className="btn btn-primary" onClick={this.submitForm} value="Sign Up"/>
					</FormGroup>	
				</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		message: state.signup.data.message	
	}
}


export default connect(mapStateToProps)(Signup);