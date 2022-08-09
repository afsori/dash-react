import axios from 'axios';

const baseUrl = ''

// configuration Services
const GetAll = (path) =>{
  const promise = new Promise((resolve, reject) =>{
    axios.get(`${baseUrl}/${path}`)
    .then(result=>{
      resolve(result)
    })
    .catch(err =>{
      reject(err)
    })
  })

  return promise;
}

const GetId = (path, id) =>{
  const promise = new Promise((resolve, reject) =>{
    axios.get(`${baseUrl}/${path}/${id}`)
    .then(result=>{
      resolve(result)
    })
    .catch(err =>{
      reject(err)
    })
  })

  return promise;
}

const Post = (path, data) =>{
  console.log('data', data, path)
  const promise = new Promise((resolve, reject) =>{
    axios.post(`${baseUrl}/${path}`, data)
      .then(result =>{
        resolve(result)
      })
      .catch(err =>{
        reject(err)
      })
  })

  return promise;
}

const Update = (path, data, id) =>{
  const promise = new Promise((resolve, reject) =>{
      axios.put(`${baseUrl}/${path}/${id}`, data)
        .then(result =>{
          resolve(result)
        })
        .catch(err =>{
          reject(err)
        })
  })

  return promise;
}

const GetAllData = () => GetAll('data_all');
const GetByID = (id) => GetByID('by_id', id)
const PostData = (data) => Post('post_data', data)
const UpdateData = (data, id) => Update('updat_data', data, id);
const Login = (data) => Post('agents/login', data);

const API = {
  GetAllData,
  GetByID,
  PostData, 
  UpdateData,
  Login
}

export default API;