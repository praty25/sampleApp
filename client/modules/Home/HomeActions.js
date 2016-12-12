import callApi from '../../util/apiCaller';

export const 	SEARCH_DATA = 'SEARCH_DATA';

//Action creator
export function searchedData(data) {
	return {
		type: SEARCH_DATA,
		data
	}
}

export function searchDataRequest(data) {
	return(dispatch) => {
		return callApi('searchData', 'post', {
			data: {
				city: data.city,
				locality: data.locality
			},
		}).then(res => dispatch(searchedData(res.data)))
	};
}

export default searchDataRequest