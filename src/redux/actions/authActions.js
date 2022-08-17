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
          dispatch({
            type: actionTypes.LOGIN_FAIL,
            payload: err
          })
          reject(err)
          console.log('error login', err.response.data.errors[0].message)
        })
  })

  return promise;
}

export const register = (data) => (dispatch) =>{
  const promise = new Promise((resolve, reject) => {
    API.Register(data)
      .then(result =>{
        dispatch({
          type: actionTypes.REGISTER_SUCCESS,
          payload: result
        })
        resolve(result)
      })
      .catch(error =>{
        dispatch({
          type: actionTypes.REGISTER_FAIL,
          payload: error
        })
        reject(error)
      })
  })

  return promise;
}