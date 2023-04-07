import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between h-24 mx-auto px-4 max-h-[1240px] items-center">
      <h1 className="w-full text-3xl font-bold text-lime-600">React</h1>
      <ul className='hidden md:flex '>
        <li className="p-4">Resources</li>
        <li className="p-4">Company</li>
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "left-0 top-0 fixed h-full w-[60%] bg-[#000300] border-r border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl m-4 font-bold text-lime-600">React</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-lime-700">Resources</li>
          <li className="p-4 border-b border-b-lime-700">Company</li>
          <li className="p-4 border-b border-b-lime-700">Home</li>
          <li className="p-4 border-b border-b-lime-700">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
