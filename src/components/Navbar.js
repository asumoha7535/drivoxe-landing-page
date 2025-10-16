import { useContext, useEffect, useState } from "react";
import { Login } from "react-admin";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../AdminPannel/SignUp";
import { CgProfile } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import { IoHeartCircle } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import CarContext from "../Context/CarContext";
import { IoSunnyOutline } from "react-icons/io5";

function Navbar({handleVisible, wishlistNotOrdered}) {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const [currentUserData, setCurrentUserData] = useState(null);
  const {theme, setTheme} = useContext(CarContext)

  const [user, setUser] = useState([]);
    useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  function handleMenu() { 
    setMenu(prev => !prev); 
  }

  const [profile , setProfile] = useState(false);

  useEffect(()=>{
const storedUser = localStorage.getItem("user");
  if(storedUser){
    setCurrentUserData(JSON.parse(storedUser));
  }
  },[])
  console.log(currentUserData);
  
  const handleDashBoard =()=>{
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userDashBoard = localStorage.getItem("loggedInUser");
    const role = users.find((u)=>u.role === 'user');
       if(userDashBoard && role){
             navigate('/userdashboard')

       }
  }

  const handleLogOut = () => {
    localStorage.removeItem("loggedInUser")
  navigate("/");
};
 
let currentUser = localStorage.getItem("loggedInUser");
  
  return (
    <>
      <div className="flex justify-center items-center absolute z-50 ml-[570px] mt-[150px] ">
       
      </div>

      <nav className="w-full py-4 px-4 md:px-10 flex items-center justify-between bg-[#fff] sticky top-0 z-40">
        <Link to="/home">
          <div className="font-black text-2xl tracking-wide">
            DRIVOXE<span className="text-black">.</span>
          </div>
        </Link>

        <ul className="gap-12 text-gray-800 font-medium lg:inline-flex hidden translate-x-[11rem]">
          <Link to="/services">
            <li className="hover:text-red-500 cursor-pointer">Service</li>
          </Link>
          <Link to="/cars">
            <li className="hover:text-red-500 cursor-pointer">Cars</li>
          </Link>
          <Link to="/pricing">
            <li className="hover:text-red-500 cursor-pointer">Pricing</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-red-500 cursor-pointer">About</li>
          </Link>

        </ul>

         {user.username === 'admin' || !currentUser ? (<p></p>) : <button className="hover:text-red-500 cursor-pointer translate-x-[9rem] mb-[1.5rem]"> <div
                      className="text-[20px] font-bold flex cursor-pointer right-0 fixed "
                      onClick={handleVisible}
                    >
                      <div className="flex flex-col relative">
                        <IoHeartCircle className="h-[30px] w-[30px] text-red-600 z-0 " />
                      </div>
                      {/* <p>{wishlistNotOrdered.length}</p> */}
                    </div></button>}

        <div className="items-center gap-4 lg:inline-flex hidden">

         <button className="h-7 w-6 transition-transform" onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <IoMoonSharp className="h-7 w-6" /> : <IoSunnyOutline className="h-7 w-6" />}</button>

          <span className="text-red-500 font-medium cursor-pointer"><CgProfile className="h-[30px] w-[30px]" onClick={()=>setProfile(true)}/>
</span>

 {profile && (
  <div className="absolute top-[60px] right-0 mt-2 w-[260px] bg-white rounded-xl shadow-xl z-50 p-5 animate-dropdown transition-all duration-300">
        <div className="flex justify-between items-center mb-4">
      <div>
        <h2 className="text-gray-600 text-sm font-semibold">Username:</h2>
        <p className="text-lg font-bold text-gray-800">
          {currentUser ? user.username : 'Guist'}
          </p>
      </div>
      <button
        onClick={() => setProfile(false)}
        className="text-gray-500 hover:text-red-500 transition">
        <ImCross size={18} />
      </button>
    </div>

    {user.username === "admin" || !currentUser ? (
     <p></p>
    ): <button
        className="w-full flex items-center justify-center gap-2 bg-blue-100 text-blue-700 border border-blue-300 px-4 py-2 rounded-full font-semibold hover:bg-blue-200 hover:scale-105 transition mb-3"
        onClick={handleDashBoard}>
        <RxDashboard size={18} /> Dashboard
      </button>}

    <button
      onClick={handleLogOut}
      className="w-full bg-red-100 text-red-600 border border-red-300 px-4 py-2 rounded-full font-semibold hover:bg-red-200 hover:scale-105 transition">
      Log Out
    </button>
  </div>
)}


          <span className="h-6 w-px bg-gray-300"></span>
 {currentUser ? (<button
            className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition"
             onClick={handleLogOut}>
            Log Out
          </button>): (<button
            className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition"
             onClick={()=>navigate('/signup')}>
            signup
          </button>)}
 
        
        </div>
           
           
        

        <div className="items-center gap-4 inline-flex lg:hidden relative">
          <button className="px-6 py-2 font-bold transition" onClick={handleMenu}>
            {menu ? (
              <RxCross2 className="h-[20px] w-[30px]" />
            ) : (
              <AiOutlineMenu className="h-[20px] w-[30px]" />
            )}
          </button>

          {menu && (
            <div className="absolute top-14 right-0 w-[250px] bg-white shadow-lg rounded-lg p-6 z-50">
              <ul className="text-gray-800 font-medium flex flex-col gap-4 text-center">
                <Link to="/services">
                  <li className="hover:text-red-500 transition cursor-pointer">Service</li>
                </Link>
                <Link to="/cars">
                  <li className="hover:text-red-500 transition cursor-pointer">Cars</li>
                </Link>
                <Link to="/pricing">
                  <li className="hover:text-red-500 transition cursor-pointer">Pricing</li>
                </Link>
                <Link to="/about">
                  <li className="hover:text-red-500 transition cursor-pointer">About</li>
                </Link>
                <span className="text-red-500 font-medium cursor-pointer hover:underline"><CgProfile /></span>
                <span className="text-red-500 font-medium cursor-pointer hover:underline">Contact</span>
                                  
                                  <Link to='/signup'><li className="hover:text-red-500 transition cursor-pointer"> <button
            className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition"
            >
            <CgProfile />

          </button></li>
          </Link>

              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
