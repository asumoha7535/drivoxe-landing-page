import React from 'react';
import { FaArrowUp, FaLongArrowAltRight } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-white text-black mt-12 px-6 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-12">
        
        <div className="flex flex-col items-start max-w-md">
          <h1 className="text-4xl font-bold mb-2">Don’t Miss a Thing</h1>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter for exclusive deals and updates.</p>
          
          <div className="flex items-center border border-gray-400 rounded-full overflow-hidden w-full max-w-md">
            <input
              type="text"
              placeholder="Enter email address for newsletter ..."
              className="flex-1 px-5 py-3 outline-none text-sm"
            />
            <button className="px-4 text-xl text-gray-600 hover:text-black">
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>

        <div className=
        "grid grid-cols-1 sm:grid-cols-3 gap-10 w-full lg:w-1/2"
        >
          
          <div>
            <h2 className="font-bold text-lg mb-3">Quick Link</h2>
            <ul className="text-gray-600 space-y-1">
              <li className="hover:text-red-500 cursor-pointer">About us</li>
              <li className="hover:text-red-500 cursor-pointer">Who we are</li>
              <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-3">The Cars</h2>
            <ul className="text-gray-600 space-y-1">
              <li className="hover:text-red-500 cursor-pointer">How it works</li>
              <li className="hover:text-red-500 cursor-pointer">Pick a car</li>
              <li className="hover:text-red-500 cursor-pointer">FAQs</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-3">Social Media</h2>
            <ul className="text-gray-600 space-y-1">
              <li className="hover:text-red-500 cursor-pointer">Facebook</li>
              <li className="hover:text-red-500 cursor-pointer">Instagram</li>
              <li className="hover:text-red-500 cursor-pointer">Twitter</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-end items-center text-sm text-gray-500 border-t pt-5">
        <p className='mr-[27rem]'>Copyright © 2023 GoCar. All rights reserved.</p>
        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}

export default Footer;
