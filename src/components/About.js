import React, { useState } from 'react'
import carTouch from '../assets/carTouch.png';
import data from '../AccordianData.json'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Accordian1 from '../AccordiansFolder/Accordian1';
import Accordian2 from '../AccordiansFolder/Accordian2';
import Accordian3 from '../AccordiansFolder/Accordian3';
import Accordian4 from '../AccordiansFolder/Accordian4';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
 
  return (
   <>
   <Navbar />
  <section className="mb-[2rem] w-full">
    <div className="flex flex-col items-center justify-center mt-8 leading-1 cursor-pointer group-hover:origin-top-left mb-[20px] px-4 text-center">
      <p className="text-[21px] font-semibold group aboutfont sm:text-[14px]">HOME/FAQS</p>
      <h1 className="text-[43px] font-extrabold aboutfont sm:text-[24px]">Frequently Asked Questions</h1>
    </div>

    <div className="w-full h-[390px] md:h-[300px] sm:h-[220px]">
  <img
    src={carTouch}
    alt="person"
    className="w-full h-full object-cover"
  />
</div>


  </section>

  <section className="flex flex-col mt-[6rem] w-full px-4">
    <div className="flex flex-col md:flex-row w-full p-4 gap-4">
      <Accordian1 />
      <Accordian2 />
    </div>
    <div className="flex flex-col md:flex-row w-full p-4 gap-4">
      <Accordian3 />
      <Accordian4 />
    </div>
  </section>

  <section className="w-full relative z-0 px-4">
    <div className="mt-11 flex justify-center items-center flex-col lg:w-[1420px] w-full mx-auto relative">
      
      <div className="w-full h-[390px] bg-[#f16666] opacity-40 z-0 border-2 rounded-xl"></div>

      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[220px] font-black text-white/50 select-none pointer-events-none z-0 sm:text-[70px] md:text-[150px]">
        DRIVOXE
      </span>

      <div className="absolute z-10 flex flex-col text-left p-3 left-0 lg:ml-[9rem] ml-[1.5rem] sm:ml-[1rem] top-[20%] sm:top-[15%] w-auto h-auto">
        <h1 className="text-[50px] text-black tracking-wide font-bold sm:text-[26px] leading-wider">
          Still Have <br /> Questions?
        </h1>
        <h1 className="text-[20px] text-black tracking-wide font-bold sm:text-[14px] mt-1">
          CONTACT US FOR ASSISTANCE
        </h1>
        <button className="w-full sm:w-[200px] md:w-[250px] h-[45px] bg-[#ff0000] text-white px-6 py-2 rounded-[50px] tracking-wider font-semibold text-md shadow hover:bg-red-600 mt-5 sm:text-sm">
          Contact Us
        </button>
      </div>

      <div className="lg:absolute lg:right-0 lg:mr-[10rem] hidden lg:block">
        <img
          src="https://www.pngmart.com/files/23/Red-Car-Transparent-PNG.png"
          className="h-[25rem] w-[40rem]"
        />
      </div>
    </div>
  </section>
  <Footer />
</>


  )
}

export default About