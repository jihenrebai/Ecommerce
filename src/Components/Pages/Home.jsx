import React, { useEffect, useState } from 'react'
import Category from '../Category/Category';
import Banner from '../Banner/Banner'
import Brands from '../Brands/Brands'
import HeadingTitle from '../Heading-title/HeadingTitle';
import Slider from '../Slider/Slider';
import SpecialOffers from '../Special-offers/SpecialOffers';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/apiCalss/productapiCalls';
const Home = () => {

  const dispatch = useDispatch()
  const {products}=useSelector(state=>state.product)
  useEffect(() => { dispatch(fetchProducts()) }, [])
  const laptops = products.filter((p) => p.isLaptop === true);
  const mobiles = products.filter((p) => p.isLaptop === false);
  return (
      <>
      <Banner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="Nouveau PC "/>
      <Slider data={laptops} />
      <HeadingTitle title="Nouveau Téléphones"/>
      <Slider data={mobiles} />
      <HeadingTitle title="Shopping par rapport la marque"/>
      <Brands />
   
          
      </>
  )
}

export default Home