import React, { Component,PropTypes } from 'react';

function Searchlist(props) {
	return (
		<div>
			<li>{props.searchedData.name}</li>
		</div>
	)
}

export default Searchlist
