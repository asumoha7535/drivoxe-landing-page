import React, { useEffect, useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaCarRear } from "react-icons/fa6";
import { SiGoogleearthengine } from "react-icons/si";
import { IoIosSpeedometer } from "react-icons/io";
import { PiSteeringWheelBold } from "react-icons/pi";
import { MdEventSeat } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import carData from "../CarData.json"
import { RxCross2 } from "react-icons/rx";
import { FaCartArrowDown } from "react-icons/fa";
import Navbar from './Navbar';
import Footer from './Footer';

function Pricing() {
  const[count,setCount] = useState(1);
  const [color,setColor] = useState('red');
  let [price, setPrice] = useState(59);
    const [currentPage, setCurrentPage] = useState(1);
const [selectCar, setSelectCar] = useState(null);
const [on, setOn] = useState(false);
const [zoom, setZoom] = useState(false);
const [zoomCar, setZoomCar] = useState('');
const handleZoomCars = (item)=>{
setZoom(on);
setZoomCar(item);
}
  function increment (){
    setCount(count+1);
    setPrice(price += 59);
  }
  function decrement (){
    setCount(count-1);
    setPrice(price -= 59);
  }

  const [openModal, setOpenModal] = useState(false);
  
    let pageData=5;
    let totalPages = Math.ceil(carData.length / pageData);
    const startIndex = (currentPage - 1) * pageData;
  const currentItems = carData.slice(startIndex, startIndex + pageData);
   
  const handleCarClick =(item)=>{
      setSelectCar(item);
  }

  return (
    <>
    <Navbar />
<div className="flex justify-center items-center  z-50 ml-[570px] mt-[45px]  relative">
        {openModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 bg-gradient-to-r from-red-500 from-10% via-orange-500 via-30% to-red-500 to-90% w-full">
            <div className="w-full max-w-md  relative ">
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-600">
                <RxCross2 className="h-[25px] w-[25px] ml-[10rem]" />
              </button>
              <div className='absoulute h-[30px] w-[30px]'>
                <FaCartArrowDown className='w-full h-full text-red-700'/>
                <p className='absolute top-0 ml-[0.8rem] mt-[0.2rem] text-[25px] font-bold'>{count}</p>
              </div>
                <h1 className="text-[3rem] font-bold text-center text-black mb-[3rem] w-full tracking-wide bookcar ">
                  YOUR BOOKING IS CONFIRMED
                </h1>
                
                <div className='flex justify-center items-center '>

                   <div className='flex lg:flex-col lg:w-[50%] flex-row w-full mr-[20rem]'>
          {color === 'red' ? (<div>
           <div className=' h-[25rem] w-[40rem] '><img src='https://www.pngmart.com/files/23/Red-Car-Transparent-PNG.png'/></div>

          
           </div>) : color === 'black' ? (<div>
           <div className=' h-[25rem] w-[40rem] '><img src='https://xcarrental.com/wp-content/uploads/2019/09/BMW-4-Series-Convertible-Car-Rental-Dubai.png'/></div>

           
           </div>) : color === 'white' ? (<div>
           <div className=' h-[25rem] w-[25rem]  '><img src='https://tse3.mm.bing.net/th/id/OIP.xZo0kHn4WraZUjnVsWzacAHaF7?r=0&w=1225&h=980&rs=1&pid=ImgDetMain&o=7&rm=3'/></div>
           </div>) :
           handleCarClick && (<div>
           <div className='bg-[#ede9ee] h-[10rem] w-[10rem] '><img src={selectCar.image}/></div>
           </div>)
           
           (<div>
           <div className='bg-[#ede9ee] h-[10rem] w-[10rem]'><img src='https://tse1.mm.bing.net/th/id/OIP.-RcoH52rD2Mp2GLHniPyPAHaFV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'/></div>
           </div>)}

                    </div>
                     <div className='flex flex-col w-[50%] gap-2 ml-[5rem]'> 
                         <h1 className="text-[30px]  tracking-wide font-bold text-white">
      Vanguard CX2 <br /> Convertible
    </h1>
                          <h3 className='text-[20px]  tracking-wide font-bold text-white'>Quantity : {count}</h3>
                           <h3 className='text-[20px]  tracking-wide font-bold text-white'>Total Price: ${price}Per/day</h3>
                     </div>
                   </div>
            </div>
          </div>
        )}
      </div>



    <section className='w-full'>

        <section className="relative w-full">
  <div className="w-full h-[350px] relative">
    <img
      src="https://wallpapercave.com/wp/wp9294670.jpg"
      alt="person"
      className="w-full h-full object-cover brightness-50 absolute inset-0"
    />
    <div
      className="
        absolute flex flex-col justify-center 
        items-start ml-[2rem] mt-[8rem] 
        sm:ml-[1rem] sm:mt-[6rem] sm:items-center sm:text-center
      "
    >
      <h3
        className="font-semibold text-[18px] tracking-wide text-gray-300 
        sm:text-[14px]"
      >
        HOME / CARS / CARS DETAIL
      </h3>
      <h1
        className="text-[50px] font-bold tracking-wide text-white 
        sm:text-[32px]"
      >
        Car Details
      </h1>
    </div>
  </div>
</section>


       <section className='flex lg:flex-row px-6 p-4 w-full flex-col'>
        {zoom && (<div className='h-[200px] w-[200px] z-20'>
          <img src={zoomCar} className='h-[100px]'/>
        </div>)}
        <div className='flex lg:flex-col lg:w-[50%] flex-row w-full'>
          {color === 'red' ? (<div>
           <div className='bg-[#ede9ee] lg:h-[28rem] lg:w-[45rem] md:h-[28rem] md:w-[45rem] sm:h-[20px]  '><img src={zoomCar || 'https://www.pngmart.com/files/23/Red-Car-Transparent-PNG.png'} /></div>

           <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 mt-[1rem] sm:hidden'>
                         <div className='bg-[#ede9ee] lg:h-[10rem] lg:w-[14rem] md:[10rem] md:[14rem]' onClick={()=>handleZoomCars('https://www.pngmart.com/files/23/Red-Car-Transparent-PNG.png')}><img src='https://www.pngmart.com/files/23/Red-Car-Transparent-PNG.png'/></div>
           <div className='bg-[#ede9ee] h-[10rem] w-[14rem] 'onClick={()=>handleZoomCars('https://th.bing.com/th/id/R.847c84de439b13b218a782f633e31db8?rik=EOydaXxW6I99Sg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2%2fConvertible-Car-Transparent.png&ehk=gFXCiPqMrPuHpAjaW4FxftPxlJ5S3RPTqkzGQspjpmc%3d&risl=&pid=ImgRaw&r=0')}>
            <img src='https://th.bing.com/th/id/R.847c84de439b13b218a782f633e31db8?rik=EOydaXxW6I99Sg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2%2fConvertible-Car-Transparent.png&ehk=gFXCiPqMrPuHpAjaW4FxftPxlJ5S3RPTqkzGQspjpmc%3d&risl=&pid=ImgRaw&r=0'/></div>
                       <div className='bg-[#ede9ee] h-[10rem] w-[14rem]' onClick={()=>handleZoomCars('https://www.pngmart.com/files/23/Red-Car-Transparent-PNG.png')}><img src='https://www.pngmart.com/files/23/Red-Car-Transparent-PNG.png'/></div>

           </div>
           </div>) : color === 'black' ? (<div>
           <div className='bg-[#ede9ee] lg:h-[28rem] lg:w-[45rem] md:h-[28rem] md:w-[45rem] sm:h-[20px] '><img src={zoomCar || 'https://xcarrental.com/wp-content/uploads/2019/09/BMW-4-Series-Convertible-Car-Rental-Dubai.png'} /></div>

           <div className='grid grid-cols-3 mt-[1rem] '>
                         <div className='bg-[#ede9ee] h-[10rem] w-[14rem]' onClick={()=>handleZoomCars('https://xcarrental.com/wp-content/uploads/2019/09/BMW-4-Series-Convertible-Car-Rental-Dubai.png')}><img src='https://xcarrental.com/wp-content/uploads/2019/09/BMW-4-Series-Convertible-Car-Rental-Dubai.png'/></div>
           <div className='bg-[#ede9ee] h-[10rem] w-[14rem] 'onClick={()=>handleZoomCars('https://www.pngplay.com/wp-content/uploads/6/Black-Convertible-Car-PNG-HD-Quality.png')}><img src='https://www.pngplay.com/wp-content/uploads/6/Black-Convertible-Car-PNG-HD-Quality.png'/></div>
                       <div className='bg-[#ede9ee] h-[10rem] w-[14rem]'onClick={()=>handleZoomCars('https://img.freepik.com/free-psd/black-isolated-car_23-2151852904.jpg?semt=ais_hybrid&w=740')}><img src='https://img.freepik.com/free-psd/black-isolated-car_23-2151852904.jpg?semt=ais_hybrid&w=740'/></div>

           </div>
           </div>) : color === 'white' ? (<div>
           <div className='bg-[#ede9ee] lg:h-[28rem] lg:w-[45rem] md:h-[28rem] md:w-[45rem] sm:h-[20px]'><img src={zoomCar || 'https://tse3.mm.bing.net/th/id/OIP.xZo0kHn4WraZUjnVsWzacAHaF7?r=0&w=1225&h=980&rs=1&pid=ImgDetMain&o=7&rm=3'} className='object-cover' /></div>

           <div className='grid grid-cols-3 mt-[1rem]' >
                         <div className='bg-[#ede9ee] h-[10rem] w-[14rem]' onClick={()=>handleZoomCars('https://tse3.mm.bing.net/th/id/OIP.xZo0kHn4WraZUjnVsWzacAHaF7?r=0&w=1225&h=980&rs=1&pid=ImgDetMain&o=7&rm=3')}><img src='https://tse3.mm.bing.net/th/id/OIP.xZo0kHn4WraZUjnVsWzacAHaF7?r=0&w=1225&h=980&rs=1&pid=ImgDetMain&o=7&rm=3'/></div>
           <div className='bg-[#ede9ee] h-[10rem] w-[14rem] 'onClick={()=>handleZoomCars('https://static.vecteezy.com/system/resources/previews/029/914/591/original/white-modern-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png')}><img src='https://static.vecteezy.com/system/resources/previews/029/914/591/original/white-modern-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png'/></div>
                       <div className='bg-[#ede9ee] h-[10rem] w-[14rem]' onClick={()=>handleZoomCars('https://tse3.mm.bing.net/th/id/OIP.cs7SILAth2WmsRmEoJ5rtwHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')}><img src='https://tse3.mm.bing.net/th/id/OIP.cs7SILAth2WmsRmEoJ5rtwHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'/></div>

           </div>
           </div>) :
           handleCarClick && (<div>
           <div className='bg-[#ede9ee] h-[28rem] w-[45rem]'><img src={selectCar.image}/></div>

           <div className='grid grid-cols-3 mt-[1rem]'>
                         <div className='bg-[#ede9ee] h-[10rem] w-[14rem]'><img src='https://tse1.mm.bing.net/th/id/OIP.-RcoH52rD2Mp2GLHniPyPAHaFV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'/></div>
           <div className='bg-[#ede9ee] h-[10rem] w-[14rem] '><img src='https://www.pngplay.com/wp-content/uploads/6/Black-Convertible-Car-PNG-HD-Quality.png'/></div>
                       <div className='bg-[#ede9ee] h-[10rem] w-[14rem]'><img src='https://img.freepik.com/free-psd/black-isolated-car_23-2151852904.jpg?semt=ais_hybrid&w=740'/></div>

           </div>
           </div>)
           
           (<div>
           <div className='bg-[#ede9ee] h-[28rem] w-[45rem]'><img src='https://tse1.mm.bing.net/th/id/OIP.-RcoH52rD2Mp2GLHniPyPAHaFV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'/></div>

           <div className='grid grid-cols-3 mt-[1rem]'>
                         <div className='bg-[#ede9ee] h-[10rem] w-[14rem]'><img src='https://tse1.mm.bing.net/th/id/OIP.-RcoH52rD2Mp2GLHniPyPAHaFV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'/></div>
           <div className='bg-[#ede9ee] h-[10rem] w-[14rem] '><img src='https://www.pngplay.com/wp-content/uploads/6/Black-Convertible-Car-PNG-HD-Quality.png'/></div>
                       <div className='bg-[#ede9ee] h-[10rem] w-[14rem]'><img src='https://img.freepik.com/free-psd/black-isolated-car_23-2151852904.jpg?semt=ais_hybrid&w=740'/></div>

           </div>
           </div>)}

        </div>


       <div className="w-full md:w-[80%] lg:w-[50%] ml-4 md:ml-8 lg:ml-[1rem]">
  <div className="flex flex-col gap-2">
    <h1 className="text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] tracking-wide font-bold">
      Vanguard CX2 <br /> Convertible
    </h1>
    <h3 className="text-gray-500 font-bold tracking-wide">STARTING AT</h3>
    <h2 className="text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] font-bold">
      ${price}/day
    </h2>
    <p className="text-gray-500 font-bold text-sm md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
    </p>

    <div className="flex flex-wrap items-center h-auto gap-4 mt-6">
      <div className="flex items-center">
        <CiCircleMinus
          className="h-[30px] w-[30px] cursor-pointer"
          onClick={decrement}
        />
        <p className="text-[30px] px-6 font-bold">{count}</p>
        <CiCirclePlus
          className="h-[30px] w-[30px] cursor-pointer"
          onClick={increment}
        />
      </div>
      <button className="w-[150px] h-[40px] bg-[#ff0000] text-white py-2 rounded-full tracking-wider font-semibold text-lg shadow hover:bg-red-600" onClick={()=>setOpenModal(true)}>
        Book Now
      </button>
    </div>

    <h5 className="mt-6 font-bold text-[15px] mb-2">SPECIFICATIONS</h5>
    <div className="flex flex-wrap gap-x-12 gap-y-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <FaCarRear className="text-[14px] text-[#ff0000]" />
          <h5 className="text-[14px] ml-2 font-bold">Convertible</h5>
        </div>
        <div className="flex items-center">
          <SiGoogleearthengine className="text-[14px] text-[#ff0000]" />
          <h5 className="text-[14px] ml-2 font-bold">5.0-liter V8</h5>
        </div>
        <div className="flex items-center">
          <IoIosSpeedometer className="text-[14px] text-[#ff0000]" />
          <h5 className="text-[14px] ml-2 font-bold">450 HP</h5>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <PiSteeringWheelBold className="text-[14px] text-[#ff0000]" />
          <h5 className="text-[14px] ml-2 font-bold">Automatic</h5>
        </div>
        <div className="flex items-center">
          <MdEventSeat className="text-[14px] text-[#ff0000]" />
          <h5 className="text-[14px] ml-2 font-bold">4 passengers</h5>
        </div>
      </div>
    </div>

    <h5 className="mt-6 font-bold text-[15px] tracking-wide">IN COLOR</h5>
    <div className="flex gap-3">
      <button
        className="cursor-pointer bg-red-600 h-6 w-6 rounded-xl"
        onClick={() => setColor("red")}
      ></button>
      <button
        className="bg-black cursor-pointer h-6 w-6 rounded-xl"
        onClick={() => setColor("black")}
      ></button>
      <button
        className="bg-gray-400 cursor-pointer h-6 w-6 rounded-xl border border-gray-700"
        onClick={() => setColor("white")}
      ></button>
    </div>
  </div>
</div>


       </section>


      <section className="mt-[3rem]">
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 px-5 gap-6">
    
    <h1 className="text-[1.8rem] font-bold tracking-wide">
      Car Features
    </h1>

    <div className="flex flex-col gap-5 lg:mr-[3rem]">
      <div className="flex flex-col bg-[#ede9ee] p-3 rounded-md hover:bg-white hover:border-red-600 cursor-pointer hover:scale-105 transition-transform duration-300">
        <h2 className="font-bold tracking-wide text-[1rem] mb-2">
          CONVERTABLE TOP
        </h2>
        <h3 className="text-gray-700 font-semibold">
          Enjoy the open-air experince with an easy power-<br />operated convertible top.
        </h3>
      </div>

      <div className="flex flex-col bg-[#ede9ee] p-3 rounded-md hover:bg-white hover:border-red-600 cursor-pointer hover:scale-105 transition-transform duration-300">
        <h2 className="font-bold tracking-wide text-[1rem] mb-2">
          CONVERTABLE TOP
        </h2>
        <h3 className="text-gray-700 font-semibold">
          Enjoy the open-air experince with an easy power-<br />operated convertible top.
        </h3>
      </div>

      <div className="flex flex-col bg-[#ede9ee] p-3 rounded-md hover:bg-white hover:border-red-600 cursor-pointer hover:scale-105 transition-transform duration-300">
        <h2 className="font-bold tracking-wide text-[1rem] mb-2">
          CONVERTABLE TOP
        </h2>
        <h3 className="text-gray-700 font-semibold">
          Enjoy the open-air experince with an easy power-<br />operated convertible top.
        </h3>
      </div>
    </div>

    <div className="flex flex-col gap-5 lg:mr-[3rem]">
      <div className="flex flex-col bg-[#ede9ee] p-3 rounded-md hover:bg-white hover:border-red-600 cursor-pointer hover:scale-105 transition-transform duration-300">
        <h2 className="font-bold tracking-wide text-[1rem] mb-2">
          CONVERTABLE TOP
        </h2>
        <h3 className="text-gray-700 font-semibold">
          Enjoy the open-air experince with an easy power-<br />operated convertible top.
        </h3>
      </div>

      <div className="flex flex-col bg-[#ede9ee] p-3 rounded-md hover:bg-white hover:border-red-600 cursor-pointer hover:scale-105 transition-transform duration-300">
        <h2 className="font-bold tracking-wide text-[1rem] mb-2">
          CONVERTABLE TOP
        </h2>
        <h3 className="text-gray-700 font-semibold">
          Enjoy the open-air experince with an easy power-<br />operated convertible top.
        </h3>
      </div>

      <div className="flex flex-col bg-[#ede9ee] p-3 rounded-md hover:bg-white hover:border-red-600 cursor-pointer hover:scale-105 transition-transform duration-300">
        <h2 className="font-bold tracking-wide text-[1rem] mb-2">
          CONVERTABLE TOP
        </h2>
        <h3 className="text-gray-700 font-semibold">
          Enjoy the open-air experince with an easy power-<br />operated convertible top.
        </h3>
      </div>
    </div>
    
  </div>
</section>


        <section className='flex flex-col p-5 mt-[3rem]'>
  <div className='flex flex-col md:flex-row md:justify-between'>
    <h1 className='text-[1.8rem] font-bold tracking-wide mb-4 md:mb-0'>You may also like</h1>
    <div className='flex md:mt-[3.2rem] md:mr-[3.7rem]'>
      <button
        className="transform -translate-y-1/2 text-2xl rounded-full bg-gray-300 p-2 hover:bg-[#ff0000] mr-[1.5rem]"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}>
        <FaArrowLeftLong className="text-white hover:scale-105 transition-transform duration-300 cursor-pointer" size={30} />
      </button>
      <button
        className="transform -translate-y-1/2 text-2xl rounded-full bg-gray-300 p-2 hover:bg-[#ff0000]"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}>
        <FaArrowRightLong className="text-white hover:scale-105 transition-transform duration-300 cursor-pointer" size={30} />
      </button>
    </div>
  </div>

  <div
    className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5'
    onClick={() => setOn(true)}>
    {currentItems.map((item, index) => (
      <div
        className='flex flex-col p-3 bg-[#ede9ee] items-center justify-center hover:shadow-xl hover:transition-all hover:bg-[#ff0000] hover:text-white hover:scale-105 transition-transform duration-300'
        key={item.id}
        onClick={() => setSelectCar(index)}>
        <img src={item.image} className="w-full h-[200px] object-cover rounded-md mb-3" />
        <h3 className='font-bold text-[18px] cursor-pointer hover:text-white'>{item.heading}</h3>
        <h4 className='font-bold'>{item.price}</h4>
      </div>
    ))}
  </div>
</section>



      <section className="w-full relative z-0">
  <div className="mt-11 flex justify-center items-center flex-col 
                  lg:w-[1420px] md:w-[95%] w-[90%] mx-auto relative">
    
    <img
      src="https://c.wallhere.com/photos/ee/c9/black_cars_BMW_car_vehicle-1746841.jpg!d"
      alt="car"
      className="w-full h-[390px] object-fill rounded-xl cursor-pointer brightness-50"
    />

    <div className="absolute z-10 
                    top-[20%] left-1/2 transform -translate-x-1/2 text-center 
                    md:left-[5%] md:top-[25%] md:transform-none md:text-left">

      <h1 className="text-[24px] md:text-[36px] lg:text-[45px] text-white font-bold leading-tight mb-1">
        Book Your Adventure
      </h1>
      <h1 className="text-[24px] md:text-[36px] lg:text-[45px] text-white font-bold leading-tight mb-1">
        Today and Feel the Power
      </h1>
      <h1 className="text-[24px] md:text-[36px] lg:text-[45px] text-white font-bold leading-tight">
        of the Open Road.
      </h1>

      <button className="mt-6 lg:w-[90%] md:w-[300px] h-[50px] bg-[#ff0000] text-white px-7 py-3 
                         rounded-full tracking-wider font-semibold text-lg shadow 
                         hover:bg-red-600 mx-auto md:mx-0">
        Let's Drive With Us
      </button>
    </div>
  </div>
</section>


      
    </section>
    <Footer />
    </>
  )
}

export default Pricing