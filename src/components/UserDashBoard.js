import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { GiShoppingCart } from "react-icons/gi";

function UserDashBoard({wishlistVisible, setWishlistVisible,allWishListData, setAllWishListData,handleRemove}) {
  
  const [cuuUser, setCurrUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [pastOrder, setPastOrder] = useState(false);
  const [futureOrder, setFutureOrder] = useState(false);

  function handleVisible() {
    setWishlistVisible(true);
    setPastOrder(false);
    setFutureOrder(false);
  }

  const handlePastOrders = () => {
    setPastOrder(true);
    setWishlistVisible(false);
    setFutureOrder(false);
  };

  const handleFutureOrdres = () => {
    setFutureOrder(true);
    setWishlistVisible(false);
    setPastOrder(false);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setCurrUser(storedUser);

    const storedWishlist = JSON.parse(localStorage.getItem("WISHLIST")) || [];
    const userWishlist = storedWishlist.filter(
      (item) => item.username === storedUser?.username
    );
    setAllWishListData(userWishlist);

    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const userOrders = allOrders.filter(
      (o) => o.username === storedUser?.username
    );
    setOrders(userOrders);
  }, []);

 

  const handleOrder = (car) => {
    const existingOrder = orders.find((o) => o.carId === car.id);
    if (existingOrder) {
      alert("You already placed an order for this car.");
      return;
    }
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 1);

    const newOrder = {
      id: Date.now(),
      carId: car.id,
      heading: car.heading,
      username: cuuUser.username,
      status: "Pending",
      orderDate: today.toISOString(),
      deliveryDate: futureDate.toISOString(),
    };

    const updatedOrders = [...orders, newOrder];
    localStorage.setItem("orders",JSON.stringify([...(JSON.parse(localStorage.getItem("orders")) || []),
        newOrder,
      ])
    );
    setOrders(updatedOrders);
  };

  const getOrderStatus = (carId) => {
    const found = orders.find((o) => o.carId === carId);
    if (!found) return "Order";
    if (found.status === "Pending") return "Pending";
    if (found.status === "Confirmed") return "Confirmed";
    return "Order";
  };

  const pastOrders = orders.filter((order) =>new Date(order.deliveryDate) < new Date() && order.status === "Confirmed");

  const futureOrders = orders.filter((order) => order.status === "Pending");

  const orderedCarIds = orders.map((order) => order.carId);
  const wishlistNotOrdered = allWishListData.filter(
    (item) => !orderedCarIds.includes(item.id)
  );

  return (
    <>
      
      <Navbar handleVisible ={handleVisible} wishlistNotOrdered={wishlistNotOrdered} />
      <section className="w-full h-full">
        <div className="flex h-full justify-between">
          <div className="h-[90rem] w-[20%] p-4 flex justify-center bg-gray-50 rounded-lg shadow-md">
            <ul className="mt-[2rem] space-y-8 ml-[1rem]">
              <h1 className="font-extrabold text-[30px] mb-[2rem] text-red-500">
                User Dashboard
              </h1>
              <li
                className={`text-lg font-semibold flex items-center cursor-pointer hover:text-red-600`}
                onClick={handlePastOrders}>
                <GiShoppingCart className="h-6 w-6 mr-2" /> Past Orders
              </li>
              <li
                className={`text-lg font-semibold flex items-center cursor-pointer hover:text-red-600`}
                onClick={handleFutureOrdres}
              >
                <GiShoppingCart className="h-6 w-6 mr-2" /> Future Orders
              </li>
            </ul>
          </div>

          <div className="grid lg:grid-cols-3 h-full gap-10 lg:w-auto w-full mr-[2.5rem]">
            {wishlistVisible &&
              wishlistNotOrdered.map((item, index) => (
                <div
                  key={index}
                  className="lg:w-[350px] w-full shadow-lg h-[26rem] p-2 rounded-md bg-[#ede9ee] mt-4 px-3 py-3 hover:shadow-xl transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-[200px] object-cover rounded-md mb-3"
                  />
                  <h1 className="text-[22px] font-bold mb-4">{item.heading}</h1>
                  <p className="text-black mb-2 font-semibold">{item.para}</p>
                  <h2 className="font-bold text-[21px]">{item.price}</h2>

                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={() => handleRemove(index)}
                      className="bg-white text-red-500 border-2 border-red-500 px-5 py-2 rounded-full font-semibold hover:bg-red-500 hover:text-white transition"
                    >
                      Remove
                    </button>

                    <button
                      className="px-5 py-2 rounded-full font-semibold border-2 bg-white text-green-600 border-green-600 hover:bg-green-600 hover:text-white transition"
                      onClick={() => handleOrder(item)}>
                      Order
                    </button>
                  </div>
                </div>
              ))}

            {pastOrder &&
              pastOrders.map((order, index) => (
                <div
                  key={index}
                  className="w-full shadow-md h-[280px] p-4 rounded-md bg-white hover:shadow-xl transition-all"
                >
                  <h2 className="text-xl font-bold mb-1">{order.heading}</h2>
                  <p className="text-gray-600 mb-1">
                    Order Date: {new Date(order.orderDate).toLocaleString()}
                  </p>
                  <p className="text-gray-600 mb-1">
                    Delivered On:{" "}
                    {new Date(order.deliveryDate).toLocaleString()}
                  </p>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
                    Delivered
                  </span>
                </div>
              ))}

            {futureOrder &&
              futureOrders.map((order, index) => (
                <div
                  key={index}
                  className="w-full shadow-md h-[280px] p-4 rounded-md bg-white hover:shadow-xl transition-all mt-[3rem] mr-[2rem] hover:bg-red-50"
                >
                  <img src={order.image} />
                  <h2 className="text-xl font-bold mb-1 mt-[3rem]">{order.heading}</h2>
                  <p className="text-gray-600 mb-1 mt-[2rem]">
                    Order Date: {new Date(order.orderDate).toLocaleString()}
                  </p>
                  <p className="text-gray-600 mb-1">
                    Expected Delivery:{" "}
                    {new Date(order.deliveryDate).toLocaleString()}
                  </p>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-semibold mt-[3rem]">
                    Pending
                  </span>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default UserDashBoard;
