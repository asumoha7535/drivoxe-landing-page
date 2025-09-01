import React, { useState } from 'react'
import data from '../AccordianData.json'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
function Accordian3() {
     const [showSelectedQ, setShowSelectedQ] = useState(null);
           const [active, isActive] = useState(false);
          const showAnswer = (index)=>{
              setShowSelectedQ(index);  
              isActive(true);
          }
  return (
    <>
    <div className='flex lg:flex-col md:flex-col flex-col w-full md:w-[90%] sm:w-[95%] mx-auto'>
   
     <h1 className='font-bold text-[1.3rem] tracking-wide ml-[3rem] md:ml-[1rem] sm:ml-2 text-center md:text-left'>
       Booking and Reservations
     </h1>
   
     {/* accordion section */}
     <div className='p-[2rem] gap-[2rem] md:p-[1rem] sm:p-[0.5rem]'>
   
       {data.map((item, index) => (
         <div
           key={index}
           className={`border-b border-white/25 last-border-b-0 overflow-hidden rounded-md p-3 m-[1rem] 
                      ${active && showSelectedQ === index ? 'bg-[#ff0000] text-white' : 'bg-[#ede9ee]'}`}
           onClick={() => showAnswer(index)}
         >
           <h2 className='flex justify-between font-bold items-start cursor-pointer text-xl py-4'>
             {item.qus}
           </h2>
   
           <span className={`text-md opacity-75 ease-in-out duration-500 ${showSelectedQ === index ? 'max-h-96' : 'hidden'}`}>
             {item.ans}
           </span>
   
           <span className={`self-end ${showSelectedQ === index ? 'rotate-180' : ""} ease-in-out duration-500`}>
             {showSelectedQ === index ? <FaChevronUp /> : <FaChevronDown />}
           </span>
         </div>
       ))}
   
     </div>
   </div>
    </>
  )
}

export default Accordian3