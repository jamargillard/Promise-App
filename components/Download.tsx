// components/DownloadAppSection.js
import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from "react-icons/io5";


const Download = () => {
  return (
    <div className=" bg-gradient-to-b from-sky-200 text-zinc-900 p-4 pb-8 ">
        <div className=" text-center mb-8 pt-1 flex justify-center ">

  <h2 className=" text-balance font-semibold text-2xl">
Download Now
  </h2>
</div>
      <div className="container mx-auto flex justify-center items-center font-semibold">
        <div className="flex space-x-2 text-center">




          <a
          
          href="#"
            className="text-blue-500 hover:animate-none animate-pulse transition-all hover:text-blue-600 py-2 px-4 rounded-md font-xl"
            
          >
            <FaAppStoreIos size={80} />
          </a>
          <a
            href="#"
            className="text-green-500  hover:animate-none animate-pulse hover:text-green-600  py-2 px-4 rounded-md"
          >
        <IoLogoGooglePlaystore size={80} />          </a>
        </div>
      </div>
      <div className="flex text-center justify-center ">

        <p className='text-xl font-bold text-white py-4'>
            
        </p>
      </div>
    </div>
  );
};

export default Download;
