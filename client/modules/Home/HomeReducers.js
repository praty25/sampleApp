import { SEARCH_DATA } from './HomeActions';

//Initial State 
const initialState = { data: [] };

const SearchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_DATA : 
			return {
				data : action.data
			};

		default: 
			return state
	}
}

//export reducers
export default SearchReducer
