import React from "react";
import Image from "next/image"; 
import { Button } from "./ui/button";



const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 sm:block">
      <div className="container py-4 bg-red-100">
        <div className="flex justify-between items-center">
          <div className="Logo flex items-center">
            <Image src="/icons8-flo.svg" width={58} height={50} alt="logo"/>
            <span className='text-xl font-extrabold text-rose-700'>Menstru</span>
            <span className='text-xl font-extrabold text-rose-500'>E<i>ase</i></span>
          </div>
          <div className="navbar">
            <a href = '#' className="mr-8 hover:text-rose-600 font-medium">Home</a>
            <a href = '#' className="mr-8 hover:text-rose-600 font-medium">About</a>
            <a href = '#' className="mr-8 hover:text-rose-600 font-medium">Services</a>
            <a href = '#' className="mr-8 hover:text-rose-600 font-medium">Tracker</a>
            <a href = '#' className="mr-8 hover:text-rose-600 font-medium">Blogs</a>
          </div>
          <div className="Button">
            <Button variant='secondary' size='lg' className="btn btn-primary w-full md:w-auto bg-rose-300 hover:bg-rose-400 hover:shadow-md mr-2 rounded-xl">Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

