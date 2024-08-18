import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' absolute top-0 z-10 w-full flex flex-col justify-center items-center'>
     <div className=' md:flex justify-between w-[80%]'>
    <div className='flex justify-between items-center'>
    <div className='flex justify-between items-center'>
          <h2 className='font-bold text-3xl text-white'>Raj Fly</h2>
        </div>
        <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
          <div className='w-8 h-1 bg-white mb-1'></div>
          <div className='w-8 h-1 bg-white mb-1'></div>
          <div className='w-8 h-1 bg-white'></div>
        </div>
    </div>
      <div className={`hidden md:flex justify-between  w-full md:w-[80%] p-4`}>
        <ul
          className="md:flex bg-black p-2 md:bg-transparent justify-between items-center w-full md:w-[50%] mt-4 md:mt-0">
          <li className='text-white font-semibold py-2 md:py-0'>Home</li>
          <li className='text-white font-semibold py-2 md:py-0'>Services</li>
          <li className='text-white font-semibold py-2 md:py-0'>About</li>
          <li className='text-white font-semibold py-2 md:py-0'>Support</li>
        </ul>
        <div className='md:flex'>
          <button className='border p-2 rounded-lg mr-2 text-white border-green-500 bg-white/15'>
            Login
          </button>
          <button className='border border-green-500 p-2 rounded-lg text-white bg-green-500'>
            Get Started
          </button>
        </div>
      </div>








     </div>
     <div className={`md:hidden flex flex-col ${isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"} justify-between w-full md:w-[80%] p-4 transition-all duration-700 ease-in-out overflow-hidden`}>
        <ul className="md:flex bg-black rounded-lg p-2 md:bg-transparent justify-between items-center w-full md:w-[50%] mt-4 md:mt-0">
          <li className='text-white font-semibold py-2 md:py-0'>Home</li>
          <li className='text-white font-semibold py-2 md:py-0'>Services</li>
          <li className='text-white font-semibold py-2 md:py-0'>About</li>
          <li className='text-white font-semibold py-2 md:py-0'>Support</li>
          <button className='border p-2 rounded-lg mr-2 text-white border-green-500 bg-white/15'>
            Login
          </button>
          <button className='border border-green-500 p-2 rounded-lg text-white bg-green-500'>
            Get Started
          </button>
        </ul>
      </div>

    
    
    </div>
  );
};

export default Navbar;
