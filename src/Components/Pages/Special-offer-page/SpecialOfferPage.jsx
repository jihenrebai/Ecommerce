import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {specialOffers} from '../../../Data/special-offers'
import Rating from '../../Rating/Rating'
import { useDispatch,useSelector } from 'react-redux';
import './Special-offer-page.css'
import { addToCart } from '../../../redux/apiCalss/cartApiCall';
const SpecialOfferPage = () => {
  const {id} = useParams()
  const product=specialOffers.find(p=>p.id===+id)  //+id===parseInt(id)
  const { images,title,rating,reviews,price,discount} = product
  const [imageIndex, setImageIndex] = useState(0)
  const calcultedDiscount = price - (price * discount) / 100
  const dispatch = useDispatch()
  const [qty, setQty] = useState(null)
  useEffect(() => {
    window.scrollTo(0,0)
  },[id])
   //Add To Cart Handler
   const addToCartHandler = () => {
    dispatch(addToCart({
      id: id,
      quantity: qty,
      price: price,
      title: title,
      image:images[0],

    }))
  }
  return (
    <>
    <div className="special-offers-page">
      <div className="special-offers-page-img-wrapper">
        <img
          src={images[imageIndex]}
          alt=""
          className="special-offers-page-img"
        />
        <div className="special-offers-page-select">
          {images.map((img, index) => (
            <img
              onClick={() => setImageIndex(index)}
              className="select-img"
              key={index}
              src={img}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="special-offers-page-info">
        <h3 className="special-offers-page-title">{title}</h3>
        <Rating rating={rating} reviews={reviews} />
        <div className="special-offers-price">
          <b className="special-offers-item">${price}</b>
          <b className="special-offers-final-price-item">
            ${calcultedDiscount}
          </b>
        </div>
        <div className="special-offers-add-to-cart">
            <div>الکمیه</div>
            <input value={qty} onChange={e =>setQty(e.target.value)}type="number" min="1" max="10" />
            <button onClick={addToCartHandler} className="add-to-cart-btn"> Ajouter au panier</button>
        </div>
      </div>
    </div>
      </>
  )
}

export default SpecialOfferPage