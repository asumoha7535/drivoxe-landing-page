import React,{useState} from 'react'
import { email } from 'react-admin';
import { Link, useNavigate } from 'react-router-dom';
function SignUp() {
  const navigate = useNavigate();
const [formData, setFormData] = useState({
  name: '',
  username: '',
  email: '',
  address: '',
  password: '',
  role: 'user' 
});

  const handleSubmit = (e) => {
  e.preventDefault();

  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = existingUsers.some(u => u.username === formData.username);
  if (userExists) {
    alert("Username already exists!");
    return;
  }

  const userToSave = { ...formData, role: "user" }; 
  existingUsers.push(userToSave);
  localStorage.setItem("users", JSON.stringify(existingUsers));
  alert("Signup successful! Please login.");
  navigate('/')
};

  return (
    <> 
     <div className="w-[100vw] h-[100vh] flex items-center justify-center  rounded-xl shadow-lg p-6 relative">
                      <img src='https://th.bing.com/th/id/R.ba15b71c31610e0651fbe6f881302c25?rik=1bX2C2cZbQAneA&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fferrari-458-sports-racing-img.jpg&ehk=x5YCEvMizDA3VFnhcJlVm59QU8TYNEwzOKLmMOkt6ao%3d&risl=&pid=ImgRaw&r=0' className="w-full h-full z-0 brightness-50"/>
                       <form
                         onSubmit={handleSubmit}
                         className="flex flex-col gap-4 w-[50%] absolute bg-white p-[3rem]">
                         <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                           SignUp
                         </h1>
         
                         <div className="flex flex-col">
                           <label className="font-semibold text-gray-700 mb-1">Name</label>
                           <input
                             type="text"
                             placeholder="Enter your name"
                             value={formData.name}
                             onChange={(e)=>setFormData({...formData, name : e.target.value})}
                             className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                             required
                           />
                         </div>

                         <div className="flex flex-col">
                           <label className="font-semibold text-gray-700 mb-1">User Name</label>
                           <input
                             type="text"
                             placeholder='Username' 
                             value={formData.username}
                             onChange={(e)=>setFormData({...formData, username : e.target.value})}
                             className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                             required
                           />
                         </div>

                          <div className="flex flex-col">
                           <label className="font-semibold text-gray-700 mb-1">Email</label>
                           <input
                             type="text"
                             placeholder='email' 
                             value={formData.email}
                             onChange={(e)=>setFormData({...formData, email : e.target.value})}
                             className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                             required
                           />
                         </div>
         
         
         
                         <div className="flex flex-col">
                           <label className="font-semibold text-gray-700 mb-1">Address</label>
                           <input
                             type="text"
                             placeholder="Enter your address"
                             value={formData.address}
                             onChange={(e)=>setFormData({...formData, address :e.target.value})}
                             className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                             required
                           />
                         </div>
         
                         <div className="flex flex-col">
                           <label className="font-semibold text-gray-700 mb-1">Password</label>
                           <input
                             type="password"
                             placeholder="Enter your password"
                             value={formData.password}
                             onChange={(e)=>setFormData({...formData, password : e.target.value})}
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
                          <p className="text-center mt-3 text-sm md:text-base">
            I have an account <Link to="/" className="text-blue-600 font-semibold hover:text-blue-800">Log In</Link>
          </p>
                       </form>
                     </div>
    </>
  )
}

export default SignUp