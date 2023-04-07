import React from "react";

const Email = () => {
  return (
    <div className="w-full text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 pl-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold">
            Want tips and tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center">
            <input className= "p-3 text-black rounded-md w-full" type="email" placeholder="Enter email" />
            <button className="bg-lime-600 text-black mx-auto px-6 py-3 my-6 ml-4 font-medium  w-[200px] rounded-md">
              Notify me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
