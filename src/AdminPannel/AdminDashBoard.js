import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import Navbar from "../components/Navbar";
import { FaCar } from "react-icons/fa";
import CarContext from "../Context/CarContext";
import { IoMdAdd } from "react-icons/io";

function AdminDashboard() {
  const navigate = useNavigate();

  const [allProducts, setAllProducts] = useState(false);
  const [user, setUser] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [profile, setProfile] = useState(false);
  const [allOrders, setAllOrders] = useState(false);
  const [orders, setOrders] = useState([]);
  const { parseCarDatas, setParseCarData } = useContext(CarContext);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCar, setNewCar] = useState({
    image: "",
    heading: "",
    price: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCars = parseCarDatas.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(parseCarDatas.length / itemsPerPage);

  const [singleCar, setSingleCar] = useState(false);
  const [carDetals, setCarDetails] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setAllUsers(storedUsers);

    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("itemLogIn");
    localStorage.removeItem("role");
    navigate("/");
  };

  const handleProducts = () => {
    setAllProducts(true);
    setUser(false);
    setAllOrders(false);
    setSingleCar(false);
  };

  const handleUsers = () => {
    setUser(true);
    setAllProducts(false);
    setAllOrders(false);
    setSingleCar(false);
  };

  const handleOrders = () => {
    setAllOrders(true);
    setUser(false);
    setAllProducts(false);
    setSingleCar(false);
  };

  const handleSingleCar = (item) => {
    setSingleCar(true);
    setUser(false);
    setAllProducts(false);
    setCarDetails([item]);
  };

  const handleRemoveCar = (index) => {
    const updatedCars = [...parseCarDatas];
    updatedCars.splice(index, 1);
    setParseCarData(updatedCars);
    localStorage.setItem("carData", JSON.stringify(updatedCars));
  };

  const handleConfirm = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: "Confirmed" } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const handleAddCar = () => {
    if (!newCar.image || !newCar.heading || !newCar.price) {
      alert("Please fill all fields.");
      return;
    }

    const updatedCars = [...parseCarDatas, newCar];
    setParseCarData(updatedCars);
    localStorage.setItem("carData", JSON.stringify(updatedCars));
    setNewCar({ image: "", heading: "", price: "" });
    setShowAddModal(false);
  };

  return (
    <>
      <Navbar />
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Car</h2>
              <button onClick={() => setShowAddModal(false)}>
                <ImCross />
              </button>
            </div>

            <input
              type="text"
              placeholder="Image URL"
              className="w-full border p-2 rounded mb-3"
              value={newCar.image}
              onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
            />
            <input
              type="text"
              placeholder="Car Heading"
              className="w-full border p-2 rounded mb-3"
              value={newCar.heading}
              onChange={(e) =>
                setNewCar({ ...newCar, heading: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Price"
              className="w-full border p-2 rounded mb-3"
              value={newCar.price}
              onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
            />
            <button
              onClick={handleAddCar}
              className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-300 shadow-lg"
            >
              Add Car
            </button>
          </div>
        </div>
      )}

      <section className="w-full h-full">
        {profile && (
          <div className="absolute bg-gray-100 h-[200px] w-[200px] right-[5rem] top-[8rem] flex flex-col justify-center items-center shadow-xl z-40">
            <div className="flex justify-between w-full px-4">
              <h2 className="text-[20px] font-bold">Admin</h2>
              <button className="mr-[10rem]" onClick={() => setProfile(false)}>
                <ImCross />
              </button>
            </div>
            <button
              className="bg-white text-red-500 border-2 border-red-500 px-4 py-2 rounded-full font-semibold hover:bg-red-50 hover:scale-105 transition-transform duration-300 mt-[1.2rem]"
              onClick={handleLogOut}
            >
              LogOut
            </button>
          </div>
        )}
        <div className="flex h-auto w-auto">
          <aside className="h-[68rem] w-[20%] p-4  flex justify-center bg-gray-50 rounded-lg shadow-lg">
            <ul className="mt-[2rem] space-y-8 ml-[2rem]">
              <h1 className="font-extrabold text-[30px] mb-[2rem] text-red-500">
                Admin Dashboard
              </h1>
              <li
                className="flex items-center cursor-pointer gap-2 hover:text-red-500"
                onClick={handleProducts}
              >
                <MdProductionQuantityLimits className="h-[30px] w-[30px]" />
                <span className="font-bold">All Products</span>
              </li>
              <li
                className="flex items-center cursor-pointer gap-2 hover:text-red-500"
                onClick={handleUsers}
              >
                <FiUsers className="h-[30px] w-[30px]" />
                <span className="font-bold">All Users</span>
              </li>
              <li
                className="flex items-center cursor-pointer gap-2 hover:text-red-500"
                onClick={handleOrders}
              >
                <FaCar className="h-[30px] w-[30px]" />
                <span className="font-bold">All Orders</span>
              </li>
            </ul>
          </aside>

          <main className="ml-[3rem] w-full p-6  shadow-md">
            <div className="mr-[7rem] cursor-pointer bg-gray-50 w-[150px] h-[60px] flex items-center justify-center p-2 hover:bg-red-50 rounded-md">
              <h1 className="text-[20px] font-bold flex">
                <p
                  className="text-[20px] font-bold flex"
                  onClick={() => setShowAddModal(true)} >
                  Add Cars
                </p>
                <IoMdAdd className="h-[2rem] w-[2rem] " />
              </h1>
            </div>
            <div className="grid lg:grid-cols-3  gap-10 lg:w-auto w-full">
              {allProducts && (
                <div className="w-[70vw]">
                  <div className="grid lg:grid-cols-3 h-full gap-10 lg:w-auto w-full ">
                    {currentCars.map((item, index) => (
                      <div
                        key={item.id || index}
                        className=" lg:w-[350px] w-full  shadow-lg rounded-md bg-[#ede9ee]  mt-4 px-3 py-3 hover:shadow-xl  hover:bg-red-50 hover:scale-105 transition-transform duration-300"
                        onClick={() => handleSingleCar(item)}
                      >
                        <img
                          src={item.image}
                          alt="Car"
                          className="w-full h-[200px] object-cover rounded-md mb-3"
                        />
                        <h1 className="text-[22px] font-bold mb-4">
                          {item.heading}
                        </h1>
                        <p className="text-[18px] font-bold m-2">
                          ${item.price}
                        </p>
                        <div className="flex justify-between items-center gap-3 pl-6">
                          <button className="bg-white text-yellow-600 px-8 py-2 rounded-full font-semibold hover:bg-yellow-600 hover:text-white border-2 border-yellow-600">
                            Rent
                          </button>
                          <button
                            className="bg-white text-text-[#ff0000] border-2 border-red-500 px-8 py-2 rounded-full font-semibold hover:bg-[#ff0000] hover:text-white transition mx-10"
                            onClick={() => handleRemoveCar(index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <section className="flex justify-center mt-10 gap-4">
                    {[1, 2, 3, 4, 5].map((but) => (
                      <button
                        key={but}
                        className="h-[30px] w-[30px] rounded-full bg-white text-black hover:bg-red-700 hover:text-black font-bold border-red-600 border-2"
                        onClick={() => setCurrentPage(but)}
                      >
                        {but}
                      </button>
                    ))}
                  </section>
                </div>
              )}

              {user && (
                <div className="w-[100vw] mt-10 ">
                  <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    All Users
                  </h1>

                  {allUsers.length === 0 ? (
                    <p className="text-base text-gray-600">
                      No Users Available
                    </p>
                  ) : (
                    <table className="w-[80%] border border-gray-300 text-sm text-left text-gray-700">
                      <thead className="bg-red-200">
                        <tr>
                          <th className="px-4 py-2 border">NO.</th>
                          <th className="px-4 py-2 border">Name</th>
                          <th className="px-4 py-2 border">Username</th>
                          <th className="px-4 py-2 border">Email</th>
                          <th className="px-4 py-2 border">Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allUsers.map((user, index) => (
                          <tr key={index} className="bg-white">
                            <td className="px-4 py-2 border">{index + 1}</td>
                            <td className="px-4 py-2 border">{user.name}</td>
                            <td className="px-4 py-2 border">
                              {user.username}
                            </td>
                            <td className="px-4 py-2 border">{user.email}</td>
                            <td className="px-4 py-2 border">{user.address}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              {allOrders && (
                <div className="mt-8 col-span-3">
                  <h2 className="font-bold text-2xl mb-6 text-gray-800">
                    All Orders
                  </h2>

                  {orders.length === 0 ? (
                    <p className="text-gray-500 italic">No orders yet.</p>
                  ) : (
                    <div className="overflow-x-auto shadow rounded-lg">
                      <table className="min-w-full text-sm text-left text-gray-700">
                        <thead className="text-xs uppercase bg-red-100 text-gray-700">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              NO.
                            </th>
                            <th scope="col" className="px-6 py-3">
                              User
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Car
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((o, i) => (
                            <tr
                              key={o.id || i}
                              className="border-b hover:bg-gray-50 transition"
                            >
                              <td className="px-6 py-4 font-medium text-gray-900">
                                {i + 1}
                              </td>
                              <td className="px-6 py-4">{o.username}</td>
                              <td className="px-6 py-4">{o.heading}</td>
                              <td className="px-6 py-4">
                                {o.status === "Pending" ? (
                                  <span className="text-yellow-600 font-medium">
                                    Pending
                                  </span>
                                ) : (
                                  <span className="text-green-600 font-semibold">
                                    Confirmed
                                  </span>
                                )}
                              </td>
                              <td className="px-6 py-4">
                                {o.status === "Pending" ? (
                                  <button
                                    onClick={() => handleConfirm(o.id)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
                                  >
                                    Confirm
                                  </button>
                                ) : (
                                  <span className="text-green-500 font-bold">
                                    ✅
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {singleCar &&
                carDetals.map((item, index) => (
                  <div className="flex  h -[100vh] w-[100vw] mt-[3rem]">
                    <div className="rounded-md shadow-md w-[50%]">
                      <img src={item.image} />
                    </div>

                    <div className="flex flex-col p-5">
                      <h1 className="text-[60px] font-bold">{item.heading}</h1>
                      <p className="text-[30px] font-bold m-2">${item.price}</p>
                      <div className="flex justify-between items-center gap-3 pl-6 mt-[5rem]">
                        <button className="bg-yellow-500 text-white px-8 py-2 rounded-full font-semibold hover:bg-red-100 hover:text-[#ff0000]">
                          Rent
                        </button>
                        <button
                          className="bg-[#ff0000] text-white border-2 border-red-500 px-8 py-2 rounded-full font-semibold hover:bg-red-100 hover:text-[#ff0000] transition mx-10"
                          onClick={() => handleRemoveCar(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default AdminDashboard;
