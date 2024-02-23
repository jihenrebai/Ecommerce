import React from 'react'
import './BrandsCss.css'
import { brands } from '../../Data/brands'
const Brands = () => {
  return (
      <div className='brands-wrapper'>
          {brands.map((brand) => <div className='brand' key={brand.id}>
              <img src={brand.image} alt={brand.title} className='brand-image'/>
          </div>)}
      </div>
  )
}

export default Brands