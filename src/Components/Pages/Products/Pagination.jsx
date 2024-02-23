import React from 'react'
import './PaginationCss.css'
const Pagination = ({ pages ,currentPage,setCurrentPage}) => {
    const generatedPages = [];
    for (let i = 1; i <= pages; i++){
        generatedPages.push(i)
    }
  return (
      <div className='pagination'>     
          <button className='page next'
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={currentPage === pages}>
          <i className='bi bi-arrow-left'></i>
          Suivant
      </button>
      {generatedPages.map((page) => 
          <div className={currentPage === page ? "page active" : "page"} key={page} onClick={()=>setCurrentPage(page)}>
              {page}
          </div>
          )}
          <button disabled={currentPage === 1} className='page previous' onClick={()=>setCurrentPage(prev=>prev-1)}>
          <i className='bi bi-arrow-right'></i>
          Président
      </button>
      </div>
  )
}

export default Pagination