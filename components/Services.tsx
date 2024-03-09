import React from "react";
import Image from "next/image";

const Services = () => {
    return (
        <div className="flex flex-wrap justify-center py-20">
            <h1 className="font-bold text-center text-4xl w-full">Services We Offer</h1>
            <div className="flex flex-col items-center justify-center m-12 hover:opacity-80 transform hover:scale-110 transition-transform duration-300">
                <Image src="period-tracker.avif" alt="Period Tracker" width={150} height={150} className="rounded-xl mb-2"/>
                <p>Period Tracker</p>
            </div>
            <div className="flex flex-col items-center justify-center m-12 transform hover:scale-110 transition-transform duration-300">
                <Image src="/consultancy.jpg" alt="Period Tracker" width={150} height={150} className="rounded-xl mb-2"/>
                <p>Consultancy</p>
            </div>
            <div className="flex flex-col items-center justify-center m-12 transform hover:scale-110 transition-transform duration-300">
                <Image src="/pads.avif" alt="Period Tracker" width={150} height={150} className="rounded-xl mb-2"/>
                <p>Get PILLs and PADs</p>
            </div>
            <div className="flex flex-col items-center justify-center m-12 transform hover:scale-110 transition-transform duration-300">
                <Image src="/mood-tracker.avif" alt="Period Tracker" width={150} height={150} className="rounded-xl mb-2"/>
                <p>Mood Tracker</p>
            </div>
        </div>
    )
};

export default Services;
