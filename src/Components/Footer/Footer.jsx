import React from 'react'
import './FooterCss.css'
const Footer = () => {
  return (
      <div className='footer'>
          <div className='footer-top'>
              <h3 className='footer-top-title'> Nous somme ici pour vous aidez </h3>
              <div className='footer-top-email'>
                  <span className='footer-top-text'>Vous pouvez nous contacter </span>
                  <span className='footer-top-address'>
                      <i className='bi bi-envelope'></i>
                      store@shopping.com
                  </span>
              </div>
          </div>
          <div className="footer-items-wrapper">
          <div className="footer-item">
             <h4 className="footer-item-title">Electroménager</h4>
             <ul className="footer-item-links">
                 <li className="footer-item-link">Accessoires et Périphériques</li>
                 <li className="footer-item-link">Cuisine & Électroménager </li>
                 <li className="footer-item-link">Téléphone</li>
                 <li className="footer-item-link">Casque & Écouteurs </li>
                 <li className="footer-item-link">Tv</li>
                 <li className="footer-item-link"> Tablette</li>
             </ul>
          </div>
          <div className="footer-item">
             <h4 className="footer-item-title">Mode</h4>
             <ul className="footer-item-links">
                 <li className="footer-item-link">Mode Homme </li>
                 <li className="footer-item-link"> Mode Femme</li>
                 <li className="footer-item-link">Mode Enfant </li>
                 <li className="footer-item-link"> Meubles</li>
                 <li className="footer-item-link">Cuisine</li>
                 <li className="footer-item-link">Maison et jardin</li>
             </ul>
          </div>
          <div className="footer-item">
             <h4 className="footer-item-title"> Beauté</h4>
             <ul className="footer-item-links">
                 <li className="footer-item-link"> Maquillage</li>
                 <li className="footer-item-link">Soin des cheveux</li>
                 <li className="footer-item-link"> Parfums Femme </li>
                 <li className="footer-item-link">Parfums Homme </li>
                 <li className="footer-item-link"> Bébé </li>
                 <li className="footer-item-link"> Hygiène & Soins</li>
             </ul>
          </div>
         
       </div>
       <div className="footer-bottom">
       <i className="bi bi-c-circle"></i> 2022
        2024
       </div>
      </div>
  )
}

export default Footer