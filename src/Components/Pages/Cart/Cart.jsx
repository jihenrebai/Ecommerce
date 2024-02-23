import React from 'react'
import './CartCss.css'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart } from '../../../redux/apiCalss/cartApiCall'
import { Link } from 'react-router-dom'
const Cart = () => {
  const { cartItems } =useSelector(state=>state.cart)
   const dispatch=useDispatch()
  
  return (
    cartItems.length < 1 ? <div className='empty-cart'>
      <h1>Votre panier est vide </h1>
      <p>Remplir votre panier à partir de page produits</p>
      <Link className='empty-cart-link' to="products"> Consulter page produit</Link>
   </div>
      :
    <div className='cart'>
      <h1 className='cart-title'>Panier de shopping</h1>
      <div className='cart-wrapper'>
        <div className='cart-items'>
        {cartItems.map((item => <div className='cart-item'key={item.id}>
        <div className='cart-item-img-wrapper'>
          <img src={item.image} alt={item.title} className='cart-item-img'/>
        </div>
        <div className='cart-item-info'>
          <div className='cart-item-title'>{item.title}</div>
          <div className='cart-item-quantity'>
            Quantité:
            <span>{item.quantity}</span>
          </div>
          <div className='cart-item-price'>
            Price:
            <span>{item.price*item.quantity}</span>
          </div>
            <i onClick={()=>dispatch(removeFromCart(item.id)) } className="bi bi-trash fill cart-item-delete-icon"></i>
        </div>
      </div>))}
        </div>
        <div className='cart-summary'>
        <div className="cart-summary-text">
        <i className="bi bi-check-circle-fill"></i>
        Une partie de votre commande est éligible à la livraison gratuite. Sélectionnez cette option lors du paiement Détails
      </div>
      <div className="cart-summary-total">
       Quantité:
        <span>
          {cartItems
            .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
            .toFixed(2)}
          Dt
        </span>
      </div>
      <button className="cart-summary-btn">  Suivez vos achats</button>
        </div>
      </div>
    </div>
  )
}

export default Cart