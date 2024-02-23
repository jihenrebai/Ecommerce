import React, { useState } from 'react'
import './header.css'
import TopHeader from './TopHeader'
import MiddleHeader from './MiddleHeader'
import NavbarHeader from './NavbarHeader'
const Header = () => {
  const [toggle,setToggle]=useState(false)
  return (
      <header className='header'>
      <TopHeader setToggle={setToggle} />
      <MiddleHeader />
       <NavbarHeader setToggle={setToggle} toggle={toggle} />
      </header>
  )
}

export default Header