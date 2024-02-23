import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import Rating from '../../Rating/Rating'
import { getProductById } from '../../../redux/apiCalss/productapiCalls';
import Spinner from '../../spinner/Spinner';
import { addToCart } from '../../../redux/apiCalss/cartApiCall';
const SingleProduct = () => {
  
const dispatch=useDispatch()
const {product,loading}=useSelector(state=>state.product)
  const { id } = useParams()
  useEffect(() => {
    dispatch(getProductById(id));
    window.scrollTo(0,0)
  },[id])
  const [qty,setQty]=useState(null)
  //Add To Cart Handler
  const addToCartHandler = () => {
    dispatch(addToCart({
      id: product?.id,
      quantity: qty,
      price: product?.price,
      title: product?.title,
      image:product?.image,

    }))
  }
  if(loading) return <Spinner/>
  return (
    <div className='single-product'>
      <div className='product-wrapper'>
        <div className='product-image-wrapper'>
          <img src={ product?.image} alt=''/>
        </div>
        <div className='product-info'>
          <h1 className='product-title'>{product?.title}</h1>
          <Rating rating={product?.rating} reviews={product?.reviews} />
          <div className='product-price'>{product?.price}Dt</div>
          <div className='product-add-to-cart'>
            <div>Quantité</div>
            <input value={qty} onChange={(e)=>setQty(e.target.value) }type="number" min="1" max="10"  />
            <button onClick={addToCartHandler} className='add-to-cart-btn'>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct