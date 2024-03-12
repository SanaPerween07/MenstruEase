import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="border-b border-gray-200 sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="Logo flex items-center">
            <Link href={'/'}>
                <Image src="/icons8-flo.svg" width={58} height={50} alt="logo" />
            </Link>
            <Link href = {'/'}>
            <span className='text-xl font-extrabold text-rose-700'>Menstru</span>
            <span className='text-xl font-extrabold text-rose-500'>E<i>ase</i></span>
            </Link>
          </div>
          <div className="navbar">
            <Link href={'/'} className="mr-8 hover:text-rose-600 font-medium">Home</Link>
            <Link href={'/'} className="mr-8 hover:text-rose-600 font-medium">About</Link>
            <Link href={'/Consultancy'} className="mr-8 hover:text-rose-600 font-medium">Services</Link>
            <Link href={'/Tracker'} className="mr-8 hover:text-rose-600 font-medium">Tracker</Link>
            <Link href={'/Blog'} className="mr-8 hover:text-rose-600 font-medium">Blogs</Link>
          </div>
          <div className="Button">
          <Link href="/Login">
            <button className="btn btn-primary h-10 rounded-m px-8 md:w-auto bg-rose-400 hover:bg-rose-500 hover:shadow-md mr-2 rounded-xl">
            Login
            </button>
          </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
