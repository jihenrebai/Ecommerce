import React from 'react'

const ProductFilterBox = ({ filterItem, setFilterItem }) => {
    const onChangeHandler = (e) => {
        setFilterItem(e.target.id)
    }
  return (
    <div className="product-filter">
      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="all"
         onChange={onChangeHandler}
         value={filterItem}
        />
        <label htmlFor="all"> Tous les produits</label>
      </div>
      <div className="form-group">
        <input
         
          type="radio"
          name="filter"
          id="laptop"
          onChange={onChangeHandler}
          value={filterItem}       
        />
        <label htmlFor="laptop">Pc</label>
      </div>
      <div className="form-group">
        <input
          
          type="radio"
          name="filter"
         id="mobile"
         onChange={onChangeHandler}
         value={filterItem}         
        />
        <label htmlFor="mobile">Téléphone</label>
      </div>
    </div>
  )
}

export default ProductFilterBox