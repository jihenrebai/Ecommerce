import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const MiddleHeader = () => {
  const { cartItems } =useSelector(state=>state.cart)
  return (
      
      <div className='middle-header'>
      <div className='middle-header-search-box'>
        <input type='text' placeholder='Ecrivez ici...' />
        <button className='search-box-btn'>Rechercher</button>
      </div>
      <Link to="/cart" className='middle-header-shopping-cart'>
       
        <i className='bi bi-cart3'></i>
        {cartItems.length>0 &&( <span className='cart-notification'>{cartItems.length}</span>)}
      </Link>
    </div>
     
  )
}

export default MiddleHeader