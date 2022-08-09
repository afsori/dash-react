import API from '../../services/index'
import { actionTypes } from "../type/actionType";

export const login = (data) => (dispatch) => {
 
  const promise = new Promise((resolve, reject) =>{
      API.Login(data)
        .then(result =>{
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: result
          })
          resolve(result)
          console.log('result login', result)
        })
        .catch(err =>{
          console.log('error login', err.response.data.errors[0].message)
        })
  })

  return promise;
}