import persion from "../assets/persion1.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineThumbUpAlt } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";
import { SiEasyeda } from "react-icons/si";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

import { GiChampions } from "react-icons/gi";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuMilestone } from "react-icons/lu";
import { MdLeaderboard } from "react-icons/md";
import car2 from "../assets/car2.png";
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
import { IoArchive } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Searvice() {
  const cardData =[
            {
              title: "Quality & Varity",
              icon: <MdOutlineThumbUpAlt />,
            },
            {
              title: "Affordable Rates",
              icon: <FaHandshake />,
            },
            {
              title: "Easy Booking",
              icon: <SiEasyeda />,
            },
            {
              title: "Customer Satisfaction",
              icon: <MdSentimentVerySatisfied />,
            },
              ]
  return (
    <>
    <Navbar />
      <section className="z-0">
        <div className="flex flex-col items-center justify-center mt-8 leading-1 cursor-pointer group-hover:origin-top-left">
          <p className="text-[21px] font-semibold group">HOME/ABOUT US</p>
          <h1 className="text-[43px] font-bold">Who We Are</h1>
        </div>

       <div className="w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
  <img
    src={persion}
    alt="person"
    className="w-full h-full object-cover"
  />
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

        <div className="m-4">
          <span className="font-bold">
            <button className="rounded-2xl mt-[5rem] bg-red-600 h-[30px] w-[30px] p-2 mx-3">
              <FaLongArrowAltRight className="text-white animate-bounce" />
            </button>
            PICK THE CAR!
          </span>

     <div className="w-full flex flex-col lg:flex-row mb-[5rem] relative">
  <div className="w-full lg:w-[70%] bg-[#ede9ee] flex justify-center items-center relative lg:absolute lg:translate-y-[15rem] z-0">
    <img
      src="https://purepng.com/public/uploads/large/red-car-ezq.png"
      alt="car"
      className="object-contain h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-auto"
    />
  </div>

  <div className="z-10 shadow-lg shadow-red-500/50 bg-white   p-4 sm:p-6 md:p-8   w-full lg:w-[30%]   h-auto lg:h-[500px]  font-bold flex flex-col justify-center items-center  text-center text-[20px] sm:text-[22px] md:text-[25px] lg:text-[30px] text-gray-800  mt-[2rem] sm:mt-[12rem] md:mt-[5rem] lg:mt-0 lg:ml-auto lg:mr-[4rem]">
    <div className="flex flex-col items-start w-full max-w-[300px]">
      <p className="text-[10px] text-gray-500">OUR JOURNEY</p>
      <h2>Pioneering</h2>
      <h2>Premium</h2>
      <h2>Car Rentals</h2>
    </div>

    <p className="mt-3 text-[12px] sm:text-[13px] text-gray-700 leading-6 opacity-60">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</div>
        </div>

      <div className="flex justify-center items-center flex-col mt-[15rem] text-[50px] text-gray-900 tracking-wide ">
  <h1 className="font-bold text-gray-900 z-30 tracking-wide">
    Why choose Drivoxe?
  </h1>

  <div className="mb-10 w-full px-2">
    <section className="text-gray-600 body-font">
      <div className="container px-2 sm:px-4 py-12 mx-auto">
        <div className="flex flex-wrap -m-2">
          {cardData.map((item, index) => (
            <div key={index} className="xl:w-1/2 md:w-1/2 w-full p-4">
              <div className="h-auto min-h-[280px] max-h-[380px] border bg-[#f1ecf3] p-6 rounded-lg hover:bg-white hover:border-red-600 cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden">
                <div className="flex items-center mb-[1rem]">
                  {item.icon}
                  <h2 className="text-[25px] text-gray-900 font-bold title-font mb-2 px-5">
                    {item.title}
                  </h2>
                </div>
                <p className="leading-relaxed text-base text-wrap break-words">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
</div>


        <div className="flex justify-center items-center flex-col ">
          <p className="text-[15px] font-semibold italic">HOW IT WORKS</p>
          <h3 className="font-bold text-[33px] italic">
            Simple Steps to Get the Car
          </h3>
        </div>

      <div className="w-full flex justify-center items-center my-20 mb-[10rem]">
  <div className="relative w-full max-w-5xl px-4">
    <div className="absolute w-full h-[300px] rounded-full bg-red-400 opacity-40 blur-[120px] z-0"></div>

    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[220px] font-black text-white/25 select-none pointer-events-none z-0 mt-[5rem]">
      DRIVOXE
    </span>

    <div className="z-10 relative mt-[5rem] ml-10 gap-24 flex lg:flex-row flex-col items-center lg:items-start lg:translate-x-[-1rem]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-4">
        <div className="bg-white shadow-lg rounded-xl w-20 h-20 flex items-center justify-center border-2 border-gray-300 hover:bg-red-600 hover:scale-105 transition-transform duration-300 pl-0 lg:pl-[0.5rem]">
          <img src={selectIcon} alt="Select" className="w-[3rem] h-[3rem]" />
        </div>
        <div className="flex flex-col p-2">
          <h3 className="text-lg font-semibold">Select</h3>
          <p className="text-sm text-gray-500">
            Choose your desired <br /> car from our fleet.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end text-center lg:text-right gap-4">
        <div className="flex flex-col p-2">
          <h3 className="text-lg font-semibold">Drive</h3>
          <p className="text-sm text-gray-500">
            Pick up your car <br /> and hit the road.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl w-20 h-20 flex items-center justify-center border-2 border-gray-300 hover:bg-red-600 hover:scale-105 transition-transform duration-300 pl-0 lg:pl-[0.5rem]">
          <img src={driveIcon} alt="Drive" className="w-[3rem] h-[3rem]" />
        </div>
      </div>
    </div>

    <div className="border-t text-bold border-dashed border-gray-600 w-full mt-16"></div>

    <div className="z-10 relative mt-[5rem] gap-24 flex lg:flex-row flex-col items-center lg:items-start lg:translate-x-[20rem]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-4">
        <div className="bg-white shadow-lg rounded-xl w-20 h-20 flex items-center justify-center border-2 border-gray-300 hover:bg-red-600 hover:scale-105 transition-transform duration-300 pl-0 lg:pl-[0.5rem]">
          <img src={bookIcon} alt="Book" className="w-[3rem] h-[3rem]" />
        </div>
        <div className="flex flex-col p-2">
          <h3 className="text-xl font-semibold text-black">Book</h3>
          <p className="text-sm text-gray-600">
            Reserve your car <br /> online or through our <br /> app.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end text-center lg:text-right gap-4">
        <div className="flex flex-col p-2">
          <h3 className="text-xl font-semibold">Return</h3>
          <p className="text-sm text-gray-500">
            Bring the car back at <br /> the end of your rental <br /> period.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl w-20 h-20 flex items-center justify-center border-2 border-gray-300 hover:bg-red-600 hover:scale-105 transition-transform duration-300 pl-0 lg:pl-[0.5rem]">
          <img src={returnIcon} alt="Return" className="w-[3rem] h-[3rem]" />
        </div>
      </div>
    </div>
  </div>
</div>



        <div className="flex flex-col lg:flex-row h-auto lg:h-[25rem] mt-[50px] w-full">
  <div className="border w-full lg:w-[40%] h-auto lg:h-full border-gray-200 p-8 rounded-lg hover:border-red-600 cursor-pointer shadow-lg flex justify-center items-center flex-col hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:bg-red-200 duration-300">
    <h2 className="text-md text-[20px] text-gray-900 font-medium title-font mb-2 md:text-wrap achive md:mr-[4rem] lg:mr-[8rem] text-center md:text-left">
      ACHIEVEMENTS
    </h2>
    <p className="font-bold text-[35px] md:text-[40px] lg:text-[45px] achive text-center md:text-left">
      Let's See Our <br />
      Celebarte <br /> Milestones
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 w-full lg:w-[60%] bg-gray-100 h-auto lg:h-[25rem] hover:scale-105 transition-transform duration-300 p-[2rem] lg:p-[4rem]">
    <div className="flex justify-center items-center flex-col hover:skew-y-12 cursor-pointer p-5">
      <FaAward className="text-[#ff0000] h-[50px] w-[40px]" />
      <h4 className="font-bold text-center">
        Costomer <br /> Choice Award
      </h4>
    </div>

    <div className="flex justify-center items-center flex-col hover:skew-y-12 cursor-pointer p-5">
      <IoArchive className="text-[#ff0000] h-[50px] w-[40px]" />
      <h4 className="font-bold text-center">
        Inovation <br /> Champion
      </h4>
    </div>

    <div className="flex justify-center items-center flex-col hover:skew-y-12 cursor-pointer p-5">
      <MdOutlineHealthAndSafety className="text-[#ff0000] h-[50px] w-[40px]" />
      <h4 className="font-bold text-center">
        Safty Drive <br /> Excellence
      </h4>
    </div>

    <div className="flex justify-center items-center flex-col hover:skew-y-12 cursor-pointer p-5">
      <GiChampions className="text-[#ff0000] h-[50px] w-[40px]" />
      <h4 className="font-bold text-center">
        Inovation <br /> Champion
      </h4>
    </div>

    <div className="flex justify-center items-center flex-col hover:skew-y-12 cursor-pointer p-5">
      <MdOutlineModeOfTravel className="text-[#ff0000] h-[50px] w-[40px]" />
      <h4 className="font-bold text-center">
        Susteinable <br /> Travell Partner
      </h4>
    </div>

    <div className="flex justify-center items-center flex-col hover:skew-y-12 cursor-pointer p-5">
      <RiCustomerService2Fill className="text-[#ff0000] h-[50px] w-[40px]" />
      <h4 className="font-bold text-center">
        Best <br />
        Costomer <br /> Suport
      </h4>
    </div>

    <div className="flex justify-center items-center flex-col hover:skew-y-12 cursor-pointer p-5">
      <LuMilestone className="text-[#ff0000] h-[50px] w-[40px]" />
      <h4 className="font-bold text-center">
        Bussiness <br />
        Growth <br /> Milestone
      </h4>
    </div>

    <div className="flex justify-center items-center flex-col hover:skew-y-12 cursor-pointer p-5">
      <MdLeaderboard className="text-[#ff0000] h-[50px] w-[40px]" />
      <h4 className="font-bold text-center">
        Industry <br /> Leadership
      </h4>
    </div>
  </div>
</div>


       <div className="mt-11 flex justify-center items-center flex-col w-full max-w-[1400px] mx-auto px-4">
  <img
    src={car2}
    alt="car"
    className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-fill rounded-lg cursor-pointer"
  />
</div>

      </section>
      <Footer />
    </>
  );
}

export default Searvice;
