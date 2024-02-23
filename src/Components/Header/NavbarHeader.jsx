import React from 'react'
import {Link} from 'react-router-dom'
const NavbarHeader = ({setToggle,toggle}) => {
  return (
      <>
      <nav className='navbar' style={{ right: toggle && "0" }}>
      <div className='navbar-close-icon' >
      <i className="bi bi-x" onClick={()=>setToggle(false)}></i>
      </div>
      <ul className='navbar-links'>
        <Link to='/' className='navbar-link' onClick={()=>setToggle(false)}>Accueil</Link>
        <Link to='/products' className='navbar-link'onClick={()=>setToggle(false)}>Informatique et eléctronique</Link>
        <Link className='navbar-link'onClick={()=>setToggle(false)}>Electroménager</Link>
        <Link className='navbar-link'onClick={()=>setToggle(false)}>Homme</Link>
        <Link className='navbar-link'onClick={()=>setToggle(false)}>Femme</Link>
      </ul>
      
    </nav>
      </>
  )
}

export default NavbarHeader