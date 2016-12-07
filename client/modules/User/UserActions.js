import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_USER = 'ADD_USER ';
export const SIGNIN_USER = 'SIGNIN_USER';

// Export Actions
export function addUser(userData) {
  return {
    type: ADD_USER,
    userData,
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


export function signUpRequest(userData) {
  return (dispatch) => {
    return callApi('userRegistration', 'post', {
      userData: {
        name: userData.name,
        number: userData.number,
        email: userData.email,
        password:userData.password
      },
    }).then(res => dispatch(addUser(res.userData)));
  };
}