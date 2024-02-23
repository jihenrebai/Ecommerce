import React from "react"
import Productitem from "./Productitem"


const ProductList = ({ products }) => {
 
  return (
      <div className="product-list">
          {products.map((product) =>
              <Productitem product={product} key={product.id}/>
          )}
          
      </div>
  )
}

export default ProductList