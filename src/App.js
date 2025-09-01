import './App.css';
import Navbar from './components/Navbar'
import HeroSec1 from './components/HeroSec1'
import Searvice from './Pages/Searvice';
import Footer from './components/Footer';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Cars from './components/Cars';
import Pricing from './components/Pricing';
import About from './components/About';
import SignUp from './AdminPannel/SignUp';
import Login from './AdminPannel/Login';
import AdminDashBoard from './AdminPannel/AdminDashBoard';
import UserDashBoard from './components/UserDashBoard';
import { useState } from 'react';

function App() {

   const [wishlistVisible, setWishlistVisible] = useState(false);
    const [allWishListData, setAllWishListData] = useState([]);
    const [cuuUser, setCurrUser] = useState(null);
  

    const handleRemove = (indexToRemove) => {
    const updatedWishlist = allWishListData.filter(
      (_, index) => index !== indexToRemove
    );
    const allWishlists = JSON.parse(localStorage.getItem("WISHLIST")) || [];
    const filtered = allWishlists.filter(
      (item, i) => !(item.username === cuuUser.username && i === indexToRemove)
    );
    localStorage.setItem("WISHLIST", JSON.stringify(filtered));
    setAllWishListData(updatedWishlist);
  };


  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/admin' element ={
        <Login /> ? 
        <AdminDashBoard /> :
        alert('You are not valid admin')
         } />
         
         <Route path='/userdashboard' element={<UserDashBoard setWishlistVisible={setWishlistVisible} wishlistVisible={wishlistVisible}  allWishListData={allWishListData} setAllWishListData ={setAllWishListData} handleRemove={handleRemove}/>}/>
    </Routes>
              
  
   <Routes>
          <Route path='/home' element ={<HeroSec1 />} />
          <Route path='/services' element ={<Searvice />}/>
          <Route path='/cars' element ={<Cars />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
    </Routes>
               </BrowserRouter>
    </div>
  );
}

export default App;
