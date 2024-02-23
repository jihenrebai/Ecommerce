import React from 'react'
import { Link } from "react-router-dom"
import Rating from "../../Rating/Rating"
import './ProductCss.css'
const Productitem = ({ product }) => {
    const {id,image,title,reviews,rating,price}=product
  return (
    <Link to={`/products/${id}`}  className="product-item" >
    <img src={image} alt={product.title} className="product-item-image" />
    <h3 className="product-item-title">{title}</h3>
    <Rating rating={rating} reviews={reviews} />
    <div className="product-item-price">Dt{price}</div>
    </Link>
  )
}

export default Productitem