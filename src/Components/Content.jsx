import React from "react";
import Typed from "react-typed";

const Content = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col text-center justify-center w-full h-screen  mt-[-96px] mx-auto max-w-[800px]">
        <p className="text-lime-600 font-bold p-2 md:text-3xl sm:text-2xl text-xl">
          Learn React with me
        </p>
        <h1 className="font-bold md:text-6xl sm:text-5xl text-3xl md:py-6">
          React is fun to learn!
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-3xl text-xl font-bold ">
            First you must learn
          </p>
          <Typed
            className="md:text-5xl sm:text-3xl text-xl font-bold  pl-2"
            strings={["HTML", "CSS", "JavaScript"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className="bg-lime-600 text-black mx-auto py-3 my-6 font-medium  w-[150px] rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Content;
