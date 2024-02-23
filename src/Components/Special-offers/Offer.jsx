import React, { useState } from 'react'
import './Special-offers.css'
import Rating from '../Rating/Rating';
import {Link} from 'react-router-dom'
const Offer = ({ offer }) => {
  const { firstImage, secondImage, title, price, discount,rating,reviews,id } = offer;
  
  const [imageSrc, setImageSrc] = useState(firstImage);
  const calcultedDiscount=price-(discount*price)/100
  return (
    <div className='offer'>
      <div className='offer-image-wrapper'>
        <img src={imageSrc} alt={title} className='offer-image'
          onMouseEnter={() => setImageSrc(secondImage)}
          onMouseLeave={()=>setImageSrc(firstImage)}
        />
      </div>
      <div className='offer-info'>
        <h5 className='offer-title'>{title}</h5>
        <Rating rating={rating}reviews={reviews} />
        <div className='offer-price'>
          <b className='offer-price-item'>{price}Dt</b>
          <b className='offer-final-item'>{calcultedDiscount}Dt</b>
        </div>
        <Link to={`/special-offer/${id}`} className='offer-see-more'>
          Voir plus...
        </Link>
        <div className='offer-discount'>-{discount}%</div>
      </div>
    </div>
  )
}

export default Offer