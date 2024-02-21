import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-rose-500">Services We Offer</h1>
      <div className="flex justify-center gap-8">
        <div className="w-1/4"></div>
        <Card className="transition duration-300 ease-in-out bg-lime-50 hover:bg-lime-100 px-12 py-12 flex-1" style={{ height: "350px", minWidth: "300px" }}>
          <CardContent className="flex aspect-square items-center justify-center p-3">
            <span className="text-4xl font-semibold text-center text-fuchsia-600">
              Period Tracker
              <img src="./bouncy-calendar-with-marked-day-and-pencil.gif" alt="consultancy" style={{ width: "200px", height: "180px" }} />
            </span>
          </CardContent>
        </Card>

        <Card className="transition duration-300 ease-in-out bg-green-50 hover:bg-green-100 px-12 py-12 flex-1" style={{ height: "350px", minWidth: "300px" }}>
          <CardContent className="flex aspect-square items-center justify-center p-3">
            <span className="text-4xl font-semibold text-center text-amber-600">
              Anonymous Forums
              <img src="./taxi-user-icon-1.gif" alt="consultancy" style={{ width: "200px", height: "200px" }} />
            </span>
          </CardContent>
        </Card>

        <Card className="transition duration-300 ease-in-out bg-blue-50 hover:bg-blue-100 px-12 py-12 flex-1" style={{ height: "350px", minWidth: "300px" }}>
          <CardContent className="flex aspect-square items-center justify-center p-3">
            <span className="text-4xl font-semibold text-center text-blue-500">
              Consultancy
              <img src="./kit-health-technology-and-digital-health-solutions.gif" alt="consultancy" style={{ width: "220px", height: "220px" }} />
            </span>
          </CardContent>
        </Card>
        <div className="w-1/4"></div> 
      </div>
    </div>
  );
};

export default Services;
