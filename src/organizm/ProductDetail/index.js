import React, {useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import {selectedProducts} from '../../redux/actions/productActions'

function ProductDetail() {
  const {id} = useParams();
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)
  const {title, image, description, price, category, rating} = product;

  const fetchProductDetail = async() =>{
    await axios.get(`https`)
    // await axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res =>{
        dispatch(selectedProducts(res.data));
        console.log('ress',res)
      })
      .catch(err => console.log(err))
    
  }
  console.log('product',product)

  useEffect(()=>{
    if(id){
      fetchProductDetail();
    }
  },[id])


  return (
    <div className="my-4">
      {Object.keys(product).length === 0 ? 
      (
        <div>Loading....</div>
      ): 
      (
      <div className="card text-start" key={id}>
        <img src={image} className="card-img-top w-50 mx-auto" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{category}</li>
          <li className="list-group-item">Rp {price}</li>
          <li className="list-group-item">{rating.rate}</li>
        </ul>
        <div class="card-body">
          <Link to={`/`} className='btn btn-primary'>Back</Link>
      </div>
      </div>
      )

    }
    </div>
  )
}

export default ProductDetail