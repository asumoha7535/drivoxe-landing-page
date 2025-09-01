import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    
    const [data, setData] = useState({username : '', password : '', role : 'user'})
    const [guistData, setGuistData] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(e) {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (data.username === "admin" && data.password === "admin123" && data.role === "admin") {
    localStorage.setItem("loggedInUser", JSON.stringify({ username: "admin", role: "admin" }));
    alert("Admin Login Successful");
    navigate("/admin");
    return;
  }

  const user = users.find(
    (u) =>
      u.username === data.username &&
      u.password === data.password &&
      u.role === data.role
  );

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Login Successful");
    navigate("/home");
  } else {
    alert("Invalid credentials or role mismatch");
  }
}

function guistLogin(){
    const user = JSON.parse(localStorage.getItem("users")) || [];
if(!user){
const newGuist = localStorage.setItem("guistUser", JSON.stringify(new Date()))
setGuistData(newGuist);
console.log((newGuist));

}
if(guistData){
  navigate('/home');
}
}

  return (
    <>
                     <div className="w-[100vw] h-[100vh] flex items-center justify-center  rounded-xl shadow-lg p-6 relative">
                      <img src="https://images.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg?cs=srgb&dl=road-blue-car-50704.jpg&fm=jpg" className="w-full h-full z-0 brightness-50" />
                      
                       <form
                         onSubmit={handleSubmit}
                         className="flex flex-col gap-4 w-[50%] absolute z-20 bg-white rounded-lg p-[3rem]">
                         <h1 className="text-[3rem] font-bold text-center text-gray-800 mb-2">
                           Log In
                         </h1>

                           <div className="flex flex-col">
  <label className="font-semibold text-gray-700 mb-1">Select Role</label>
  <select
    value={data.role}
    onChange={(e) => setData({ ...data, role: e.target.value })}
    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  >
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
</div>
      
                         <div className="flex flex-col">
                           <label className="font-semibold text-gray-700 mb-1">User Name</label>
                           <input
                             type="text"
                             placeholder="Enter your name"
                             value={data.username}
                             onChange={(e)=>setData({...data, username : e.target.value})}
                             className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                             required
                           />
                         </div>
         
                         <div className="flex flex-col">
                           <label className="font-semibold text-gray-700 mb-1">Password</label>
                           <input
                             type="password"
                             placeholder="Enter your password"
                             value={data.password}
                             onChange={(e)=>setData({...data, password : e.target.value})}
                             className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                             required
                           />
                         </div>
         
                         <button
                           type="submit"
                           className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
                         >
                           Submit
                         </button>
                         <button
                           type="submit"
                           className="bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-100"
                           onClick={(e)=>guistLogin(setGuistData(e))}>
                           Login As a Guist
                         </button>
                         <p className="text-center mt-3 text-sm md:text-base">
            Don't have an account? <Link to="/signup" className="text-blue-600 font-semibold hover:text-blue-800">Sign Up</Link>
          </p>
                       </form>
                     </div>
                   

    </>
  )
}

export default Login