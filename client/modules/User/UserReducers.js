import { ADD_USER,  SIGNIN_USER } from './UserActions';

// Initial State
const initialState = { data: [] }; 

const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER :
      return {
        data: action.data,
      }; 
     
    case SIGNIN_USER :
    return {
      data : action.data
    };

    default:
     return state   
  }
}

//export reducers
export default SignupReducer
