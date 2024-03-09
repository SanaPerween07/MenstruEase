import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-20 py-20">
      <div className="flex justify-between items-center flex-col sm:flex-row">
        <div className="mb-4 sm:mb-0 px-20">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Know your body</h1>
          <h1 className="text-3xl sm:text-4xl font-bold">Own your health</h1>
        </div>

        <div className="flex flex-col px-20">
          <div className="mb-8 flex items-center">
            <img src="/tracking.svg" alt="Tracking" className="mr-4" style={{ width: "80px" }} />
            <p className="mt-2">Get predictions based on the most up-to-date science</p>
          </div>
          <div className="mb-8 flex items-center">
            <img src="/calender.svg" alt="Calendar" className="mr-4" style={{ width: "80px" }} />
            <p className="mt-2">Keep track of your cycle lengths to observe patterns</p>
          </div>
          <div className="flex items-center">
            <img src="/accuracy.svg" alt="Accuracy" className="mr-4" style={{ width: "80px" }} />
            <p className="mt-2">Your predictions get more accurate every time you track</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
