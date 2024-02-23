import React from 'react'

const TopHeader = ({setToggle}) => {
 
  return (
    <>    <div className='top-header'>
    <div className='top-header-phone'>
      <i className='bi bi-telephone'></i>
      34 125 448 14
      
      </div>
      <div className='top-header-text'>Welcome</div>
          <div className='top-header-logo'>
          <i className='bi bi-basket2'></i>
          My Store
      </div>
          <div className='.top-header-menu ' onClick={()=>setToggle(true)}>
          <i className='bi bi-list'></i>
         </div>
  </div>
    </>
  )
}

export default TopHeader