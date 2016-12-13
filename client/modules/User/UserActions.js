import callApi from '../../util/apiCaller';
import toastr from 'toastr';
import { browserHistory } from 'react-router';


// Export Constants
export const ADD_USER = 'ADD_USER '; 
export const SIGNIN_USER = 'SIGNIN_USER';

// Export Actions 
export function addUser(data) {
  return {
    type: ADD_USER,
    data,
  };
}

export function signInUser(data) {
  return {
    type: SIGNIN_USER,
    data
  }
}
   
export function signInRequest(data){
  return (dispatch) => {
    return callApi('userAuthentication','post',{
      data: {
        email: data.email,
        password: data.password
      },
    }).then(res => dispatch(signInUser(res.data)))
  };
}


export function signUpRequest(data) {
  return (dispatch) => {
    return callApi('userRegistration', 'post', {
      data: {
        name: data.name,
        number: data.number,
        email: data.email,
        password: data.password,
        city: data.city,
        locality: data.locality 
      },
    }).then(res => dispatch(addUser(res.data)));
  };
}