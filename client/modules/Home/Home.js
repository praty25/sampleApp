import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { searchDataRequest } from './HomeActions.js';
import { isUserLoggedIn } from '../TokenValidation/TokenValidationActions';
import { connect } from 'react-redux';
import Searchlist from './Searchlist';
import { Link } from 'react-router';
import Token from '../Tokens';

class Home extends React.Component {
	

	// componentWillMount(){
	// 	if(Token.getToken) {
	// 		console.log("coming")
	// 	} else {
	// 		console.log("you dont have permission")
	// 	}
	// }

	constructor(props) {
		super(props)

		this.submitHandle = this.submitHandle.bind(this);
		this.removeToken = this.removeToken.bind(this)
	}

	submitHandle(e) {
		e.preventDefault();
		let city = ReactDOM.findDOMNode(this.refs.city).value;
		let locality = ReactDOM.findDOMNode(this.refs.locality).value;
		console.log("city,locality:", city, locality);
		this.props.dispatch(searchDataRequest({city, locality}))
	}

	removeToken(e) {
		Token.removeToken()
	}

	render() {
		if(Token.getToken() != null) {
			return (
				<div>
					<Link to={'/Login'} onClick={this.removeToken}>Logout</Link>
						<form>
							<input type= "text" placeholder= "city" ref= "city" />
							<input type= "text" placeholder= "locality" ref= "locality" />
							<input type= "submit" value= "Search" onClick= {this.submitHandle} />  
						</form>
					{this.props.searchedData.map(searchedData => (<Searchlist searchedData= {searchedData} />))}	
				</div>
			)
		} else {
			return (
				<div>
					<h1>401:Unauthorized Access!!</h1>
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
	searchedData: state.search.data
	}
} 

export default connect(mapStateToProps)(Home)