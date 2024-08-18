import React from 'react';
import { IoSearch } from "react-icons/io5";
import Navbar from './navbar';


const Herosection = () => {
  return (
    <div
      className="relative h-[35vh] md:h-[100vh] bg-center bg-cover bg-no-repeat"
    >
      <img src="./Assets/herosection.jpg" className='h-full  w-full md:object-cover' alt="" />
      <div className="absolute w-full top-[15%] flex flex-col justify-center items-center px-4">
        <div className="border relative w-[70%] md:w-[40%] max-w-[600px] rounded-full overflow-hidden flex bg-white/10">
          <div className="ml-2 w-[10%] flex flex-col items-center justify-center">
            <IoSearch className="text-white text-2xl" />
          </div>
          <input
            type="text"
            className="h-full text-white placeholder-white w-[90%] bg-transparent outline-none p-3"
            placeholder="Search for Flight, City and Country"
          />
        </div>
      </div>
      
      <Navbar />
    </div>
  );
}

export default Herosection;
