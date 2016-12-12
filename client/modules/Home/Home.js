import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { searchDataRequest } from './HomeActions.js';
import { connect } from 'react-redux';
import Searchlist from './Searchlist';
import { Link } from 'react-router';


class Home extends React.Component {
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
		localStorage.removeItem("token")
	}

	render() {
		return (
			<div>
			<Link to={'/Login'} onClick={this.removeToken}>Logout</Link>
				<form>
					<input type= "text" placeholder= "city" ref= "city" />
					<input type= "text" placeholder= "locality" ref= "locality" />
					<input type= "submit" value= "Search" onClick= {this.submitHandle} />  
				</form>
			{this.props.searchedData.map(searchedData => (<Searchlist searchedData= {searchedData}/>))}		
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	searchedData: state.search.data
	}
} 

export default connect(mapStateToProps)(Home)