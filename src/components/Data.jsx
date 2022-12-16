import React from "react";
import data from "../assets/laptop.jpg";

const Data = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[600px] mx-auto my-4" src={data} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#dc3535] font-bold">
            Data Analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="mt-4">
            Build apps faster, make smarter business decisions, and connect
            people anywhere. Explore and assess Google Cloud with free usage of
            over 20 products, plus new customers get $300 in free credits on
            signup. Solve your business problems with our industry solutions
          </p>
          <button className="bg-[#dc3535] w-[200px] rounded-md font-semibold my-6 mx-auto md:mx-0 py-3 text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Data;
