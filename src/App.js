
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Home from './Components/Pages/Home';
import Cart from './Components/Pages/Cart/Cart';
import Product from './Components/Pages/Products/Product';
import SingleProduct from './Components/Pages/SingleProduct/SingleProduct';
import SpecialOfferPage from './Components/Pages/Special-offer-page/SpecialOfferPage';
function App() {

  return (
   
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} /> 
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/special-offer/:id' element={<SpecialOfferPage />} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
