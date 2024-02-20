
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import LoginSingup from './pages/LoginSignup'
import CartItem from './pages/CartItem';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import Product from './pages/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid'/>}/>
       <Route path='/login' element={<LoginSingup/>}/>
        <Route path='/cart' element={<CartItem/>}/>
        <Route path="/product/:productId" element={<Product />}/>
        <Route path='/:productId' element={<Product/>}></Route>
</Routes >
<Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
