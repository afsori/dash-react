import { actionTypes } from "../type/actionType";
const initialState = {
  userLogin: false,
  userData: null
}


const authReducer = (state = initialState, action) =>{
const {type, payload} = action;
console.log('payload', payload)

switch(type) {
    case actionTypes.LOGIN_SUCCESS :
    return {
      ...state,
      userLogin:true,
      userData: payload.data
    }

    default:
      return state;
  }
}

export default authReducer;