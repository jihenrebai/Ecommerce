import React from 'react'
import ProductFilterBox from './ProductFilterBox'
import ProductSortBox from './ProductSortBox'

const ProductSideBar = ({filterItem,setFilterItem,sortItem,setSortItem}) => {
  return (
      <div className='product-sidebar'>
          <div className='sidebar-item'>
              <h4 className='product-sidebar-title'>
                  Filtrer par catégorie
              </h4>
              <ProductFilterBox filterItem={filterItem} setFilterItem={setFilterItem} />
          </div>
          <div className='sidebar-item'>
          <h4 className='product-sidebar-title'>
              Filtrer par prix
          </h4>
              <ProductSortBox sortItem={sortItem} setSortItem={setSortItem} />
          </div>
      </div>
  )
}

export default ProductSideBar