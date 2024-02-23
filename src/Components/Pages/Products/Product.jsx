import React, { useEffect, useState } from 'react'
import ProductSideBar from './ProductSideBar'
import ProductList from './ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../redux/apiCalss/productapiCalls'
import './ProductCss.css'
import Pagination from './Pagination'
const Product = () => {
  const dispatch = useDispatch()
  const [filterItem, setFilterItem] = useState("all")
  const [sortItem, setSortItem] = useState("select")
  const [currentPage,setCurrentPage]=useState(1)
  const { products } = useSelector(state => state.product)
  useEffect(() => {
      dispatch(fetchProducts())
  }, [])

  //Filter Product par categorie
  const filterProduct = products.filter((product) =>
    filterItem === "laptop"
      ? product.isLaptop === true
      : filterItem === "mobile"
        ? product.isLaptop === false
        : product
  )
  // filter par prix
  const sortedProductList =
       sortItem === "low"
      ? filterProduct.sort((a, b) => a.price - b.price)
      :sortItem === "hight"
      ? filterProduct.sort((a, b) => b.price - a.price)
        : filterProduct.sort((a, b) => (a.title > b.title ? 1 : -1))  
  
  // Pagination
  const PRODUCT_PER_PAGE = 3
  const pages = Math.ceil(sortedProductList.length / PRODUCT_PER_PAGE); // 25/3=8.1 return 8
  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const finishIndex = currentPage * PRODUCT_PER_PAGE
    ;
  const orderedProducts = sortedProductList.slice(startIndex, finishIndex)
  
  return (
    <>
    <div className='products'>
      <ProductSideBar filterItem={filterItem} setFilterItem={setFilterItem}
        sortItem={sortItem} setSortItem={setSortItem} />
      <ProductList products={orderedProducts} />
    </div>
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </>
  )
}

export default Product