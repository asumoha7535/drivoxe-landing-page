import car from "../assets/car3.png";
import data from "../data.json";


import { useState, useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiProducthunt } from "react-icons/si";
import { AiFillProduct } from "react-icons/ai";
import { TbBrandProducthunt } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SiVorondesign } from "react-icons/si";
import { SiCssdesignawards } from "react-icons/si";
import selectIcon from "../assets/selecticon.png";
import bookIcon from "../assets/bookicon.png";
import driveIcon from "../assets/driveicon.png";
import returnIcon from "../assets/returnicon.png";
import car4 from "../assets/car4.png"
import carData from "../CarData.json"
import Navbar from "./Navbar";
import Footer from "./Footer";
import herocar from '../assets/herocar1.png'
import CarContext from "../Context/CarContext";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";

function HeroSec1() {


const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;
const startIndex = (currentPage - 1) * itemsPerPage;
const currentCars = carData.slice(startIndex, startIndex + itemsPerPage);
const totalPages = Math.ceil(carData.length / itemsPerPage);
const { parseCarDatas, setParseCarData } = useContext(CarContext);
  const [currentIndex, setCurrentIndex] = useState(0);
const navigate = useNavigate();
  const slides = [
    {
      bg: 'https://tse1.mm.bing.net/th/id/OIP.khB7mYDhxl-GBTasq8jdgQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      head1: "asutosh",
      profile: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
    },
    {
      bg: 'https://tse2.mm.bing.net/th/id/OIP.6Pzz6O1a8SMCJZHeymfKUAHaFj?r=0&w=1024&h=768&rs=1&pid=ImgDetMain&o=7&rm=3',
      head1: 'asutosh',
      profile: "https://tse1.mm.bing.net/th/id/OIP.UEZVcosjdJgmAVp_gIKruQHaKf?r=0&w=2400&h=3400&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      bg: 'https://purepng.com/public/uploads/large/purepng.com-yellow-audi-caraudicars-961524670899johme.png',
      head1: 'sima',
      profile: "https://tse1.mm.bing.net/th/id/OIP.kfM6gE5n_IxPxrdgZg7SigHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      bg: 'https://i.etsystatic.com/41340875/r/il/67b5eb/4715093007/il_1080xN.4715093007_e4o3.jpg',
      head1: 'rudransh',
      profile: "https://tse4.mm.bing.net/th/id/OIP.B-0iXCoWFPKMNYQsw7McRgHaHa?r=0&w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
  ];

  const prevSlide = () => {
    const FirstSlide = currentIndex === 0;
    const newIndex = FirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const Lastslide = currentIndex === slides.length - 1;
    const newIndex = Lastslide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

    const handleRent = (car) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 
    if (!loggedInUser) {
      alert("Please login first");
      navigate('/signup');
      return;
    }

    const existingWishlist = JSON.parse(localStorage.getItem("WISHLIST")) || [];
    const updatedWishlist = [...existingWishlist, { ...car, username: loggedInUser.username }];

    localStorage.setItem("WISHLIST", JSON.stringify(updatedWishlist));

    alert("Car added to your wishlist!");
  };
const [singleCar, setSingleCar] = useState('multi');
const [carDetals, setCarDetails] = useState([]);

 const handleSingleCar =(item)=>{
       setSingleCar('single');
       setCarDetails([item]);
  }

  const handlePaginationButton =(page)=>{
    setCurrentPage(page);
    setSingleCar('multi')
  }

  return (
    <>
    <Navbar />
      <div className="w-full px-2 md:px-8 lg:px-16l">
        <div className="relative w-full min-h-[600px] bg-white flex  lg:flex-row flex-col lg:items-center lg:justify-center items-start px-2 md:px-8 lg:px-16 py-6 md:py-10 overflow-hidden ">
          <div className='absolute w-[43rem] h-[300px] rounded-full bg-red-400 opacity-40 blur-[120px] z-0'></div>

          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[220px] font-black text-white/50 select-none pointer-events-none z-0 ">
            DRIVOXE
          </span>

          <div className="flex-1 z-10 flex flex-col justify-center gap-6 max-w-full md:max-w-[400px] w-full md:w-auto mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-black ">
              Your Journey,
              <br />
              Your Car,
              <br />
              Your Way
            </h1>
            <p className="text-gray-500 text-base md:text-lg">
              Experience the ultimate freedom of choice with GoCar - tailor your
              adventure by choosing from our premium fleet of vehicles.
            </p>
            <button className="w-full md:w-[200px] h-[50px] bg-[#ff0000] text-white px-7 py-3 rounded-[50px] tracking-wider font-semibold text-lg shadow hover:bg-red-600 ">
              Get Started
            </button>
            <div className="flex gap-3 mt-2 text-xl text-gray-400"></div>
          </div>

          <div className="flex-1 flex justify-center items-center relative z-10 hover:scale-105 transition-transform duration-300 max-w-full md:max-w-none mb-8 md:mb-0 mr-[1.6rem]">
            <img
              src={herocar}
              alt="Car"
                    className="w-full max-w-[270px] md:max-w-xs lg:max-w-md h-auto object-contain z-10" />
          </div>

          <div className="flex-1 flex flex-col items-end justify-center z-10 max-w-full md:max-w-[320px] w-full md:w-auto">
            <div className="bg-white/80 rounded-2xl shadow-lg p-6 mb-8 w-full flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <div className="flex -space-x-4 mb-2">
                <img
                  src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <img
                  src='https://tse4.mm.bing.net/th/id/OIP.g-PN9xj6-9os_CMlY4vu2AHaHa?r=0&w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3'
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <img
                  src='https://tse2.mm.bing.net/th/id/OIP.BqSu9IKpBLWHmpF2kmM6EAHaLG?r=0&w=801&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3'
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="text-xl font-black text-black">12.5K+ PEOPLE</div>
              <div className="text-gray-500 text-center text-sm mt-1">
                has used our services such as renting, buying, or even selling
                their car.
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 w-full grid-cols-4">
              <button className="bg-white text-red-500 border-2 border-red-500 lg:px-8 lg:py-2 px-2 py-2 rounded-full font-semibold hover:bg-red-50  hover:scale-105 transition-transform duration-300">
                Rent
              </button>
              <button className="bg-white text-red-500 border-2 border-red-500 lg:px-8 lg:py-2 px:2 py-2 rounded-full font-semibold hover:bg-red-50  hover:scale-105 transition-transform duration-300">
                Buy
              </button>
              <button className="bg-white text-red-500 border-2 border-red-500 lg:px-8 lg:py-2 px:2 py-2 rounded-full font-semibold hover:bg-red-50  hover:scale-105 transition-transform duration-300">
                Sell
              </button>
              <button className="bg-white text-red-500 border-2 border-red-500 lg:px-8 lg:py-2 px:2 py-2 rounded-full font-semibold hover:bg-red-50  hover:scale-105 transition-transform duration-300">
                Consul
              </button>
            </div>
            <div className="flex items-center gap-2 mt-8 text-gray-700 font-medium cursor-pointer hover:underline">
              Learn more <span className="text-xl">&#8594;</span>
            </div>
          </div>
        </div>

        <div className="w-full bg-white shadow-lg rounded-xl p-4 flex lg:flex-wrap overflow-hidden justify-center gap-6 md:gap-12 items-center cursor-pointer " >
        
          <div className="flex items-center gap-2 marquee">
            <span className="font-bold text-black"><SiProducthunt className="inline mr-2" />
              Logoipsum</span>
          </div>
          <div className="flex items-center gap-2 marquee">
            <span className="font-semibold text-black lowercase"><AiFillProduct className="inline mr-2" />
              logoipsum</span>
          </div>
          <div className="flex items-center gap-2 marquee">
            <span className="font-bold text-black"><TbBrandProducthunt className="inline mr-2" />
              logoipsum</span>
          </div>
          <div className="flex items-center gap-2 marquee">
            <span className="font-bold text-black"><MdProductionQuantityLimits className="inline mr-2" />
              logoipsum</span>
          </div>
          <div className="flex items-center gap-2 marquee">
            <span className="font-bold text-black"><SiVorondesign className="inline mr-2" />
              Logoipsum</span>
          </div>
          <div className="flex items-center gap-2 marquee">
            <span className="font-bold text-black"><SiCssdesignawards className="inline mr-2" />
              Logoipsum</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 leading-1 hover:origin-top-left cursor-pointer">
          <p className="text-[21px] font-semibold text-gray-700">THE CARS</p>
          <h1 className="text-[43px] text-gray-900 font-bold hmm tracking-wider">Our Impressive Fleet</h1>
        </div>

        <section className=" flex justify-center items-center mt-5">
          <div  className="grid lg:grid-cols-3 h-full gap-10 lg:w-auto w-full" onClick={()=>setSingleCar('single')}>
          
            {singleCar === 'multi' && currentCars.map((item, index) => (
  <div
    className=" lg:w-[350px] w-full  shadow-lg rounded-md bg-[#efeeef]  mt-4 px-3 py-3 hover:shadow-xl  hover:bg-red-50  hover:scale-105 transition-transform duration-300"
    key={index} onClick={()=>handleSingleCar(item)}>
    <img
      src={item.image}
      alt="Car"
      className="w-full h-[200px] object-cover rounded-md mb-3" />
    <h1 className="text-[22px] font-bold mb-4">{item.heading}</h1>
    <p className="text-black opacity-4 mb-2 font-semibold">{item.para}</p>
    <div className="flex justify-between">
      <h2 className="font-bold text-[21px]">{item.price}</h2>
      <button className="bg-[#ff0000] text-white border-2 border-red-500 px-8 py-2 rounded-full font-semibold hover:bg-red-100 hover:text-[#ff0000] transition mx-10 " onClick={() => handleRent(item)}
>
        Rent
      </button>
    </div>
  </div>
))}

{
 singleCar === 'single' && carDetals.map((item, index)=>(
    <div className='flex  h -[100vh] w-[100vw] mt-[3rem] ml-[5rem]'>
    <div className='rounded-md shadow-md w-[50%]'>
      <img src={item.image} />
      </div>

      <div className='flex flex-col  p-5 w-[50%]'>
        <div className="flex">
          <h1 className='text-[60px] font-bold'>{item.heading}</h1>      
          <h4 className="h-[15px] w-[15px] mb-[8rem] cursor-pointer hover:text-red-600" onClick={()=>setSingleCar('multi')}><ImCross className="h-[15px] w-[15px]" onClick={()=>setSingleCar('multi')}/></h4>
</div>
                    <p className='text-[30px] font-bold m-2'>${item.price}</p>




                    
                    <p className='text-[18px] text-gray-500 font-bold m-2 text-wrap pr-[16rem]'>Automobiles are the preferred mode of transportation because they allow us to cover greater distances more quickly than walking. The first automobile was created in 1769 by Nicolas Joseph Cugnot in France, although it had only three wheels, was rather heavy, moved very slowly, and relied solely on steam.</p>
               <div className="flex justify-between items-center gap-3 pl-6 mt-[5rem]">
            <button className="bg-yellow-500 text-white px-8 py-2 rounded-full font-semibold hover:bg-red-100 hover:text-[#ff0000]" onClick={() => handleRent(item)}>
              Rent
            </button>
           
          </div>
      </div>
</div>
        

  ))
}

          </div>
        </section>

       <section className="flex justify-center mt-10 gap-4">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className='h-[30px] w-[30px] rounded-full font-bold bg-white hover:bg-red-700 border-2 border-red-600 text-black hover:text-white '
            onClick={() => handlePaginationButton(page)}
          >
            {page}
          </button>
        ))}
      </section>


        <section className="lg:flex   w-full mt-8 ">

         <div className="flex flex-col gap-4 w-full md:w-[60%] lg:w-[40%] md:ml-[50px] lg:ml-[100px] px-4 md:px-0">
  <h1 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold leading-snug font-serif tracking-wide">
    Why Choose <br /> Drivoxe?
  </h1>
  <p className="text-gray-500 font-bold mt-6 md:mt-8 lg:mt-10">
    Join our satisfied customer <br />
    who trust us for their journeys. <br />
    We serve with a lot of value <br />
    that you can feel directly.
  </p>
</div>


          <div className="relative w-full px-4 lg:w-[60%] mx-auto p-6 z-0">
  <img
    src="https://www.freeiconspng.com/uploads/red-sports-car-png-1.png"
    alt="New Car"
    className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-md shadow-lg cursor-pointer mb-6 z-0"
  />
</div>

          <div className="absolute bg-red-600 blur-2xl h-[30px] w-[50%] mt-4 right-0 z-10 mr-8"></div>

          <div className=" bg-[#f1ecf3] lg:flex  flex-col h-[100px] w-[200px] absolute right-1 mr-[40rem] mt-[5rem] translate-x-2  shadow-2xl  rounded-xl z-[200px] p-2 items-center backdrop-opacity-10 hidden">
            <h1 className="font-bold text-[25px]">Easy Booking</h1>
            <p className="text-gray-600">Reverse Your car in <br /> just a few clicks.</p>
          </div>

          <div className=" bg-[#f1ecf3] lg:flex hidden  flex-col h-[100px] w-[250px] absolute right-1 mr-[15rem] translate-x-2  shadow-2xl  rounded-xl z-[200px] p-2 items-center backdrop-opacity-10">
            <h1 className="font-bold text-[25px]">Quality & Variety</h1>
            <p className="text-gray-600">Reverse Your car in <br /> just a few clicks.</p>
          </div>

          <div className=" bg-[#f1ecf3] lg:flex hidden  flex-col h-[100px] w-[250px] absolute right-1 mt-[18rem] translate-x-2  shadow-2xl  rounded-xl z-[200px] p-2 items-center backdrop-opacity-10">
            <h1 className="font-bold text-[25px]">Afordable Rates</h1>
            <p className="text-gray-600">Reverse Your car in <br /> just a few clicks.</p>
          </div>
        </section>

        <section className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
          <div
            className="w-full h-full rounded-2xl bg-center bg-cover relative overflow-hidden hover:scale-100 transition-transform duration-300 hover:shadow-lg"
            style={{
              backgroundImage: `url(${slides[currentIndex].bg})`,
            }}>
            <div className="absolute inset-0 bg-white/80 backdrop-blur-md z-0 rounded-2xl"></div>

            <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
              <h3 className="font-bold text-[#ff0000] text-[14px] tracking-wider mb-4">
                WHAT OUR CUSTOMERS SAY
              </h3>

              <h1 className="text-[22px] md:text-[26px] font-medium leading-relaxed text-gray-800 max-w-3xl">
                "My Drivoxe experince was nothing short<br /> of incredible, The pristine car and <br /> impeccable service made my trip <br /> unforgettable, I'll be back for more."
              </h1>

              <img
                src={slides[currentIndex].profile}
                alt=""
                className="w-12 h-12 rounded-full border-2 border-white object-cover mt-6"/>
              <p className="text-sm text-gray-600 font-semibold mt-1">
                {slides[currentIndex].head1}
              </p>
            </div>
          </div>

          <div
            className="absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-red-500 z-10"
            onClick={prevSlide}>
            <FaArrowLeftLong className="text-white hover:scale-105 transition-transform duration-300 cursor-pointer" size={30} />
          </div>

          <button
            className="absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-red-500 z-10"
            onClick={nextSlide}  >
            <FaArrowRightLong className="text-white hover:scale-105 transition-transform duration-300 cursor-pointer" size={30} />
          </button>
        </section>

        <div className="flex flex-col items-center justify-center mt-8 leading-1 mb-4">
          <p className="text-[21px] font-semibold">THE CARS</p>
          <h1 className="text-[43px] font-bold">Our Impressive Fleet</h1>
        </div>

       <div className="w-full flex justify-center items-center my-20">
  <div className="relative w-full max-w-5xl px-4">
    <div className="absolute w-full h-[300px] rounded-full bg-red-400 opacity-40 blur-[120px] z-0"></div>

    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] sm:text-[150px] md:text-[180px] lg:text-[220px] font-black text-white/25 select-none pointer-events-none z-20 mb-[10rem]">
      DRIVOXE
    </span>

    <div className="z-10 flex flex-col relative justify-center items-center lg:-translate-x-[10rem] gap-20 md:gap-28 lg:gap-32 lg:mr-[5rem] md:flex-row lg:flex-col">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col p-2 md:items-end md:text-right">
          <h3 className="text-lg font-semibold">Select</h3>
          <p className="text-sm text-gray-500 mt-1">
            Choose your desired <br /> car from our fleet.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl w-20 h-20 flex items-center justify-center border-2 border-gray-300 hover:bg-red-600 hover:scale-105 transition-transform duration-300 md:ml-4 lg:pl-[0.5rem] mt-4 md:mt-0">
          <img src={selectIcon} alt="Select" className="w-[3rem] h-[3rem]" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col p-2 md:items-end md:text-right">
          <h3 className="text-lg font-semibold">Drive</h3>
          <p className="text-sm text-gray-500 mt-1">
            Pick up your car <br /> and hit the road.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl w-20 h-20 flex items-center justify-center border-2 border-gray-300 hover:bg-red-600 hover:scale-105 transition-transform duration-300 md:ml-4 lg:pl-[0.6rem] mt-4 md:mt-0">
          <img src={driveIcon} alt="Drive" className="w-[3rem] h-[3rem]" />
        </div>
      </div>
    </div>

    <div className="hidden md:block h-[390px] border-l border-dashed bg-gray-600 absolute left-1/2 z-20 mb-[300px] -translate-y-56"></div>

    <div className="z-10 flex flex-col relative justify-center items-center md:flex-row lg:flex-col md:gap-28 lg:gap-32 lg:-translate-y-[14rem] md:mt-16 lg:ml-[22rem]">
      <div className="flex flex-col md:flex-row items-center">
        <div className="bg-white shadow-lg rounded-xl w-20 h-20 flex items-center justify-center border-2 border-gray-300 hover:bg-red-600 hover:scale-105 transition-transform duration-300 md:mr-4 lg:pl-[0.5rem]">
          <img src={bookIcon} alt="Book" className="w-[3rem] h-[3rem]" />
        </div>
        <div className="flex flex-col p-2 text-center md:text-left">
          <h3 className="text-xl font-semibold">Book</h3>
          <p className="text-sm text-gray-600">
            Reserve your car <br /> online or through our <br /> app.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-8 md:mt-0">
        <div className="bg-white shadow-lg rounded-xl w-20 h-20 flex items-center justify-center border-2 border-gray-300 hover:bg-red-600 hover:scale-105 transition-transform duration-300 md:mr-4 lg:pl-[0.5rem]">
          <img src={returnIcon} alt="Return" className="w-[3rem] h-[3rem]" />
        </div>
        <div className="flex flex-col p-2 text-center md:text-left">
          <h3 className="text-xl font-semibold">Return</h3>
          <p className="text-sm text-gray-500">
            Bring the car back at <br /> the end of your rental <br /> period.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


      </div>

       <section className="flex justify-center items-center flex-col w-full lg:w-[1400px] mx-auto px-4">
  <div className="flex justify-center items-center flex-col w-full lg:w-[1400px]">
    <img
      src={car4}
      alt="car"
      className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-fill rounded-lg cursor-pointer"
    />
  </div>
</section>
<Footer />
    </>
  );
}

export default HeroSec1