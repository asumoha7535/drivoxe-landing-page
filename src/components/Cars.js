import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import car1 from "../car1.json";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import data from "../data.json";
import data1 from "../data1.json";
import data2 from "../data2.json"; 
import data3 from "../data3.json"; 
import carData from "../CarData.json"
import Navbar from "./Navbar";
import Footer from "./Footer";


function Cars() {
  const [isVisible , SetVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [on, setOn] = useState(false);
  const [selectedData, setSelectedData] = useState("data");
const [catagory, setCatagory] = useState('car1');
const [count, setCount] = useState(car1.length);
const [tag , setTag] = useState(false);

   let carsData;
  if (selectedData === "data") {
    carsData = data;
  } else if (selectedData === "data1") {
    carsData = data1;
  } else if (selectedData === "data2") {
    carsData = data2;
  }else if(selectedData === 'data3'){
    carsData = data3
  }else if(selectedData === "car1"){
    carsData = car1;
  }

let catagoryData = carData.filter((curr)=>curr.catagory.includes(catagory));

    const searchData= carData.filter((curr)=>curr.heading.includes(search));

    const catagorySearch = catagoryData.filter((curr)=>curr.heading.includes(search));

let affordableCars = carData.filter(curr => Number(curr.price.split('/')[0]) <= 49);

useEffect(() => {
  if (on){
    setCount(catagoryData.length);
  } else if(search && search.length > 0) {
    setCount(searchData.length);
  }else if(catagorySearch && catagorySearch.length > 0) {
     setCount(catagorySearch.length)
  } else if(tag) {
    setCount(affordableCars.length);
  } else{
    setCount(carsData.length);
  }
},[on,catagory,search,tag,carsData]);



  return (
    <div >
    <Navbar />
      <div className="flex flex-col items-center justify-center mt-8 leading-1 cursor-pointer group-hover:origin-top-left mb-[20px]">
        <p className="text-[21px] font-semibold group">HOME/ABOUT US</p>
        <h1 className="text-[43px] font-bold">Our Impressive Fleet</h1>
      </div>

      <div className="w-full min-w-full lg :w-full md:w-full h-[350px] object-cover">
        <img
          src="https://img.freepik.com/premium-photo/red-black-background-with-red-lamborghini-huracan-front_796580-3439.jpg"
          alt="persion"
          className="w-full min-w-full lg :w-full md:w-full h-[390px] object-cover "
        />
      </div>

      <section className=" w-full flex justify-between mt-[90px] ">
        <div className="mx-12">
          <p className="font-semibold text-gray-500 leading-3">
            Showing {count} of {carData.length} results
          </p>
        </div>

        
            <div
              onClick={() => SetVisible((isVisible) => !isVisible)}
              className=" h-[40px] w-[100px] p-4  bg-gray-200 text-gray-900 rounded-sm relative text-[10px] translate-x-[23rem] inline"
            >
              {isVisible ? true : false} Default Sorting <FaAngleDown className="inline" />
            </div>
            {isVisible && ( 
              <div className="z-10">
                <div className="   ">
                  <ul className=" items-center font-medium gap-20  place-content-evenly z-10 absolute">
                    <li className="cursor-pointer hover:bg-slate-400 transition duration-150 ease-in-out">car1</li>
                    <li className="cursor-pointer hover:bg-slate-400 transition duration-150 ease-in-out">car2</li>
                    <li className="cursor-pointer hover:bg-slate-400 transition duration-150 ease-in-out">ecar3</li>
                    <li className="cursor-pointer hover:bg-slate-400 transition duration-150 ease-in-out">car4</li>
                    
                  </ul>
                </div>
              </div>
            )}


       <div className="flex items-center bg-gray-100 px-3 py-1 rounded-sm  w-full sm:w-auto mr-10">
           <input
  type="text"
  value={search || ""}
  onChange={(e)=>setSearch(e.target.value)}
  placeholder="Search Your Pick Car..."
  className="bg-gray-100 outline-none text-sm  w-[14rem]"/>

            <button className="ml-2">
              <SlMagnifier />
            </button>
          </div>
      </section>

      
      <section className="flex lg:flex-row flex-col gap-3 w-full h-full">
        <div className="w-[80%] mx-12 flex justify-center items-center mt-5">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:w-auto w-full sm:mr-[3rem]">
           
           {on ? (
              catagoryData.map((item, index) => (
                <div
                  className=" lg:w-[350px] w-full  shdow-lg rounded-md bg-[#ede9ee]  mt-4 px-3 py-3 hover:shadow-xl  hover:transition-all hover:bg-red-500 hover :text-white hover:scale-105 transition-transform duration-300"
                  key={index.id}>
                  <img
                    src={item.image}
                    alt="Black Car"
                    className="w-full h-[200px] object-cover rounded-md mb-3"/>
                  <h1 className="text-[22px] font-bold mb-4 hover:text-white">{item.heading}</h1>
                  <p className="text-black  opacity-4 mb-2  font-semibold">
                    {item.para}
                  </p>
                  <div className="flex justify-between">
                    <h2 className="font-bold text-[21px]">{item.price}</h2>
                    <button className="bg-[#ff0000] text-white text-ehite border-2 border-red-500 px-8 py-2 rounded-full font-semibold hover:bg-red-100 hover:text-[#ff0000] transition mx-10 ">
                      Rent
                    </button>
                  </div>
                </div>
              ))
            ) : (search && search.length > 0) ? (
              searchData.map((item, index) => (
                <div
                  className=" lg:w-[350px] w-full  shdow-lg rounded-md bg-[#ede9ee]  mt-4 px-3 py-3 hover:shadow-xl  hover:transition-all hover:bg-red-500 hover :text-white hover:scale-105 transition-transform duration-300"
                  key={index.id}>
                  <img
                    src={item.image}
                    alt="Black Car"
                    className="w-full h-[200px] object-cover rounded-md mb-3"/>
                  <h1 className="text-[22px] font-bold mb-4 hover:text-white">{item.heading}</h1>
                  <p className="text-black  opacity-4 mb-2  font-semibold">
                    {item.para}
                  </p>
                  <div className="flex justify-between">
                    <h2 className="font-bold text-[21px]">{item.price}</h2>
                    <button className="bg-[#ff0000] text-white text-ehite border-2 border-red-500 px-8 py-2 rounded-full font-semibold hover:bg-red-100 hover:text-[#ff0000] transition mx-10 ">
                      Rent
                    </button>
                  </div>
                </div>
              ))
            ):(catagorySearch && catagorySearch.length > 0) ? (
              catagorySearch.map((item, index) => (
                <div
                  className=" lg:w-[350px] w-full  shdow-lg rounded-md bg-[#ede9ee]  mt-4 px-3 py-3 hover:shadow-xl  hover:transition-all hover:bg-red-500 hover :text-white hover:scale-105 transition-transform duration-300"
                  key={index.id}>
                  <img
                    src={item.image}
                    alt="Black Car"
                    className="w-full h-[200px] object-cover rounded-md mb-3"/>
                  <h1 className="text-[22px] font-bold mb-4 hover:text-white">{item.heading}</h1>
                  <p className="text-black  opacity-4 mb-2  font-semibold">
                    {item.para}
                  </p>
                  <div className="flex justify-between">
                    <h2 className="font-bold text-[21px]">{item.price}</h2>
                    <button className="bg-[#ff0000] text-white text-ehite border-2 border-red-500 px-8 py-2 rounded-full font-semibold hover:bg-red-100 hover:text-[#ff0000] transition mx-10 ">
                      Rent
                    </button>
                  </div>
                </div>
              ))
            )  : tag ? (affordableCars.map((item, index) => (
                <div
                  className=" lg:w-[350px] w-full  shdow-lg rounded-md bg-[#ede9ee]  mt-4 px-3 py-3 hover:shadow-xl  hover:transition-all hover:bg-red-500 hover :text-white hover:scale-105 transition-transform duration-300"
                  key={index}>
                  <img
                    src={item.image}
                    alt="Black Car"
                    className="w-full h-[200px] object-cover rounded-md mb-3"/>
                  <h1 className="text-[22px] font-bold mb-4 hover:text-white">{item.heading}</h1>
                  <p className="text-black  opacity-4 mb-2  font-semibold">
                    {item.para}
                  </p>
                  <div className="flex justify-between">
                    <h2 className="font-bold text-[21px]">{item.price}</h2>
                    <button className="bg-[#ff0000] text-white text-ehite border-2 border-red-500 px-8 py-2 rounded-full font-semibold hover:bg-red-100 hover:text-[#ff0000] transition mx-10 ">
                      Rent
                    </button>
                  </div>
                </div>
              ))
            ) : (carsData.map((item, index) => (
                <div
                  className=" lg:w-[350px] w-full  shdow-lg rounded-md bg-[#ede9ee]  mt-4 px-3 py-3 hover:shadow-xl  hover:transition-all hover:bg-red-500 hover :text-white hover:scale-105 transition-transform duration-300"
                  key={index}>
                  <img
                    src={item.image}
                    alt="Black Car"
                    className="w-full h-[200px] object-cover rounded-md mb-3"/>
                  <h1 className="text-[22px] font-bold mb-4 hover:text-white">{item.heading}</h1>
                  <p className="text-black  opacity-4 mb-2  font-semibold">
                    {item.para}
                  </p>
                  <div className="flex justify-between">
                    <h2 className="font-bold text-[21px]">{item.price}</h2>
                    <button className="bg-[#ff0000] text-white text-ehite border-2 border-red-500 px-8 py-2 rounded-full font-semibold hover:bg-red-100 hover:text-[#ff0000] transition mx-10 ">
                      Rent
                    </button>
                  </div>
                </div>
              ))
            )}

            
          </div>
        </div>

        <div className="flex flex-col my-9 w-full md:w-[40%] lg:w-[20%] max-w-sm p-3">
  <h1 className="text-gray-700 leading-5 text-[16px] font-semibold mb-3">POPULAR CARS</h1>

  <div className="flex p-2 gap-4 cursor-pointer">
    <img src="https://cdni.autocarindia.com/ExtraImages/20220827021740__DSC7289.jpg" className="h-14 w-18 shadow-lg rounded-sm"/>
    <div className="flex flex-col text-[13px] leading-5 font-bold text-gray-800 hover:text-red-600">
      <p>Steller Orions Hybrid</p>
      <p>$39/day</p>
    </div>
  </div>

  <div className="flex p-2 gap-4">
    <img src="https://tse4.mm.bing.net/th/id/OIP.KD3DodFTNaDXZ4DpZUPNkAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" className="h-14 w-18 shadow-lg rounded-sm"/>
    <div className="flex flex-col text-[13px] leading-5 font-bold text-gray-800 hover:text-red-600">
      <p>Zenith Tempest</p>
      <p>$39/day</p>
    </div>
  </div>

  <div className="flex p-2 gap-4">
    <img src="https://tse3.mm.bing.net/th/id/OIP.vx8ZDAK_E-v-FBOiepQxEgAAAA?r=0&w=474&h=266&rs=1&pid=ImgDetMain&o=7&rm=3" className="h-14 w-18 shadow-lg rounded-sm"/>
    <div className="flex flex-col text-[13px] leading-5 font-bold text-gray-800 hover:text-red-600">
      <p>Zyper A4 Strates</p>
      <p>$79/day</p>
    </div>
  </div>

  <div className="flex p-2 gap-4 mb-5">
    <img src="https://tse3.mm.bing.net/th/id/OIP.0O1eO50cNkKBs97DuUktTQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" className="h-14 w-18 shadow-lg rounded-sm"/>
    <div className="flex flex-col text-[13px] leading-5 font-bold text-gray-800 hover:text-red-600">
      <p>Equinox F-Eclipse</p>
      <p>$39/day</p>
    </div>
  </div>

  <div className="" onClick={() => setOn(true)}>
    <h1 className="text-gray-700 leading-5 text-[16px] font-semibold mt-5 mb-3">CATEGORIES</h1>

    <div className="flex p-2 gap-[70px] hover:text-red-600 cursor-pointer" onClick={() => setCatagory('HatchBack')}>
      <p className="text-[13px] font-bold text-gray-800 hover:text-red-600">HatchBack</p>
      <div className="text-[13px] font-bold text-gray-800">
        <p>City Car</p>
      </div>
    </div>

    <div className="flex p-2 gap-[70px] cursor-pointer" onClick={() => setCatagory('coupe')}>
      <p className="text-[13px] font-bold text-gray-800 hover:text-red-600">Coupe</p>
      <div className="text-[13px] font-bold text-gray-800 ml-[30px]">
        <p>Vintage</p>
      </div>
    </div>

    <div className="flex p-2 gap-[50px] cursor-pointer" onClick={() => setCatagory('Station Wagon')}>
      <p className="text-[13px] font-bold text-gray-800 hover:text-red-600">Station Wagon</p>
      <div className="text-[13px] font-bold text-gray-800 mr-[30px]">
        <p>Sports</p>
      </div>
    </div>

    <div className="flex p-2 gap-[80px] cursor-pointer" onClick={() => setCatagory('Micro Car')}>
      <p className="text-[13px] font-bold text-gray-800 hover:text-red-600">Micro Car</p>
      <div className="text-[13px] font-bold text-gray-800">
        <p>Mini Van</p>
      </div>
    </div>

    <div className="flex p-2 gap-[100px] cursor-pointer" onClick={() => setCatagory('PickUp')}>
      <p className="text-[13px] font-bold text-gray-800 hover:text-red-600">PickUp</p>
      <div className="text-[13px] font-bold text-gray-800">
        <p>Sedan</p>
      </div>
    </div>

    <div className="flex p-2 gap-[120px] cursor-pointer" onClick={() => setCatagory('SUV')}>
      <p className="text-[13px] font-bold text-gray-800 hover:text-red-600">SUV</p>
      <div className="text-[13px] font-bold text-gray-800">
        <p>MVP</p>
      </div>
    </div>

    <div className="flex p-2 gap-[70px] cursor-pointer" onClick={() => setCatagory('Convertible')}>
      <p className="text-[13px] font-bold text-gray-800 hover:text-red-600">Convertible</p>
      <div className="text-[13px] font-bold text-gray-800 mb-5">
        <p>Grand Tourer</p>
      </div>
    </div>
  </div>

  <h1 className="text-gray-700 leading-5 text-[16px] font-semibold mt-5 mb-4">TAGS</h1>
  <p className="text-[13px] font-bold text-gray-800 mb-2 cursor-pointer hover:text-red-600" onClick={() => setTag(true)}>
    Affordable / Popular Cars / Van
  </p>
  <p className="text-[13px] font-bold text-gray-800">
    Sedon / Family Car / Vintage
  </p>
</div>


      </section>

      <section className="flex justify-center mt-10 mx-3 my-3 cursor-pointer gap-5 
  mr-0 sm:mr-0 md:mr-10 lg:mr-[310px] flex-wrap sm:flex-nowrap">
  
  <button className="h-[30px] w-[30px] hover:text-red-600 text-gray-700" onClick={() => setSelectedData("car1")}>
    <FaAngleLeft />
  </button>
  <button className="h-[30px] w-[30px] hover:text-red-600 text-gray-700" onClick={() => setSelectedData("data")}>
    1
  </button>
  <button className="h-[30px] w-[30px] hover:text-red-600 text-gray-700" onClick={() => setSelectedData("data1")}>
    2
  </button>
  <button className="h-[30px] w-[30px] hover:text-red-600 text-gray-700" onClick={() => setSelectedData("data2")}>
    3
  </button>
  <button className="h-[30px] w-[30px] hover:text-red-600 text-gray-700" onClick={() => setSelectedData("data3")}>
    <FaAngleRight />
  </button>
</section>



      <section className="w-full relative z-0">
  <div className="mt-11 flex justify-center items-center flex-col w-full lg:w-[1420px] mx-auto px-4 sm:px-6">
    <img
      src="https://thumbs.dreamstime.com/b/hands-car-driver-steering-wheel-road-trip-driving-highway-254886916.jpg"
      alt="car"
      className="w-full h-[390px] object-fill rounded-xl cursor-pointer brightness-50"
    />
    
    <div className="absolute z-10 top-0 w-full h-full flex items-center justify-center">
      <div className="text-center px-4 sm:px-10">
        <p className="text-[18px] sm:text-[22px] md:text-[25px] text-white font-semibold mb-4">
          FIND YOUR PERFECT RIDE
        </p>
        
        <h1 className="text-white text-[24px] sm:text-[32px] md:text-[45px] font-bold tracking-wide leading-snug">
          Explore Our Fleet and Book
        </h1>
        <h1 className="text-white text-[24px] sm:text-[32px] md:text-[45px] font-bold tracking-wide leading-snug">
          Your Dream Car Today!
        </h1>

        <button className="mt-6 bg-[#ff0000] hover:bg-red-600 text-white px-7 py-3 text-sm sm:text-base rounded-full shadow-md font-semibold w-full sm:w-auto">
          Let's Drive With Us
        </button>
      </div>
    </div>
  </div>
</section>
<Footer />
    </div>
  );
}

export default Cars;
