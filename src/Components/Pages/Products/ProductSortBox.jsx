import React from 'react'

const ProductSortBox = ({ sortItem, setSortItem }) => {
    const onChangeHandler = (e) => {
        setSortItem(e.target.id)
    }
  return (
    <div className="product-sort-box">
      <div className="form-group">
        <input
          type="radio"
          name="sort"
                  id="nosort"
                  onChange={onChangeHandler}
         value={sortItem}
        />
        <label htmlFor="nosort"> Trier par prix</label>
      </div>
      <div className="form-group">
        <input
         
          type="radio"
          name="sort"
          id="low"
          onChange={onChangeHandler}
          value={sortItem}
        />
        <label htmlFor="low">Min-Max</label>
      </div>
      <div className="form-group">
        <input
          
          type="radio"
          name="sort"
          id="high"
          onChange={onChangeHandler}
          value={sortItem}
        />
        <label htmlFor="high">Max-Min</label>
      </div>
    </div>
  )
}

export default ProductSortBox