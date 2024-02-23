import React from 'react'
import './Special-offers.css'
import {specialOffers} from '../../Data/special-offers'
import Offer from './Offer'
import './Special-offers.css'
import {useParams} from 'react-router-dom'
const SpecialOffers = () => {
  return (
      <div className='special-offers'>  
          <h1 className='special-offers-title'>
             Ventes Flash
              <span className='special-offers-icon-wrapper'>
                  <i className='bi bi-stopwatch'></i>
              </span>
          </h1>
          <div className='special-offers-wrapper'>
          {specialOffers.map(offer=><Offer key={offer.id} offer={offer} />)}
          </div>
       
      </div>
  )
}

export default SpecialOffers