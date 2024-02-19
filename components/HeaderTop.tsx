import React from "react";
import Image from "next/image"; 
import { Button } from "./ui/button";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-8">
        <div className="flex justify-between items-center">
          <div className="Logo">
            <Image src="/logoipsum-226.svg" width={50} height={50} alt="logo"/>
            <p>MenstruEase</p>
          </div>
          <div className="navbar">
            <a href = '#' className="mr-4">Home</a>
            <a href = '#' className="mr-4">Services</a>
            <a href = '#' className="mr-4">Consultancy</a>
            <a href = '#' className="mr-4">Calculaters</a>
            <a href = '#' className="mr-4">Blogs</a>
          </div>
          <div className="Button">
            <Button variant='default' size='sm' className="btn mr-2">Login</Button>
            <Button variant='default' size='sm'>Sign In</Button>
          </div>
          {/* <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <BsTwitter />
            </div>
            <div className="header_top__icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_top__icon_wrapper">
              <BsLinkedin />
            </div>
          </div> */}

          {/* <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
          </div> */}

          {/* <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="INR">INR</option>
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;