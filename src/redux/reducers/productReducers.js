import { actionTypes } from "../type/actionType";

const initialState = {
  products: []
}
export const productReducers = (state = initialState, action) =>{
  const {type, payload} = action;

  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products:payload
      }
  
    default:
      return state
  }

}
export const selectedProductReducers = (state = {}, action) =>{
  const {type, payload} = action;

  switch (type) {
    case actionTypes.SELECTED_PRODUCTS:
      return {
        ...state,
       ...payload
      }
  
    default:
      return state;
  }

}