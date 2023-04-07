import React from "react";
import Laptop from "../Assets/laptop.jpg";
const Description = () => {
  return (
    <div className="bg-white w-full px-4 py-16">
      <div className="grid md:grid-cols-2 mx-auto max-h-[1240px]">
        <img src={Laptop} alt="/" className="my-4 mx-auto w-[500px]" />
        <div className="justify-center flex flex-col">
          <p className="text-lime-600 font-bold">DASHBOARD</p>
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">
            Manage Your Learning Experience
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            dolor ea voluptatibus maxime id eligendi placeat reiciendis,
            temporibus, beatae sapiente sunt accusamus quas enim sint
            accusantium harum labore amet distinctio.
          </p>
          <button className="bg-black text-lime-600 md:mx-0 mx-auto p-2 mt-4 font-medium  w-[150px] rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
