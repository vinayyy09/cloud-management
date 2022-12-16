import React from "react";
import man from "../assets/person.png";
import partner from "../assets/partner.png";
import group from "../assets/group.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-[6.5rem] mx-auto mt-[-4rem]" src={man} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-gray-300 mx-8 mt-8">
              500 GB Storage
            </p>
            <p className="py-2 border-b border-gray-300 mx-8">1 Granted User</p>
            <p className="py-2 border-b border-gray-300 mx-8">Send Upto 2 GB</p>
          </div>
          <button className="bg-[#dc3535] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-4">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-[6.5rem] mx-auto mt-[-3rem]"
            src={partner}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-gray-300 mx-8 mt-8">
              1 TB Storage
            </p>
            <p className="py-2 border-b border-gray-300 mx-8">
              3 Users Allowed
            </p>
            <p className="py-2 border-b border-gray-300 mx-8">
              Send Upto 10 GB
            </p>
          </div>
          <button className="bg-[#dc3535] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-4">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-[7rem] mx-auto mt-[-4.5rem]" src={group} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Group</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-gray-300 mx-8 mt-8">
              5 TB Storage
            </p>
            <p className="py-2 border-b border-gray-300 mx-8">
              10 Users Allowed
            </p>
            <p className="py-2 border-b border-gray-300 mx-8">
              Send Upto 20 GB
            </p>
          </div>
          <button className="bg-[#dc3535] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-4">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
