import React from 'react';
import { Button } from "./ui/button";

const Dashbody = () => {
    return (
        <div className="flex justify-center">
            <div className="max-w-4xl w-full flex items-center">
                <div className="mr-6">
                    <img src='./airy-colored-splashes-2.png' alt="Empowering Women" />
                </div>
                <div>
                    {/* <h3 className="tagline text-lg text-red-700 font-serif font-bold text-center">
                        <br></br>
                        Empowering Women with Knowledge and Convenience
                    </h3> */}
                    <h1 className="hero-heading text-6xl font-bold text-gray-900 mt-2 text-center">
                        Your Ultimate Solution For Menstrual Health
                    </h1>
                    <p className="hero-content text-m text-gray-700 mt-2 text-center"><br></br>
                        Take charge of your menstrual cycle with our all-in-one
                        platform. Get period tracking, sustainable products, expert
                        consultations, and more to empower your reproductive health.
                    </p>
                    <div className="flex justify-center mt-4"><br></br>
                        <Button className="btn btn-primary w-full md:w-auto bg-rose-300 hover:bg-rose-400 hover:shadow-md py-3 px-16 sm:py-4 sm:px-8 lg:py-5 lg:px-10 rounded-xl" variant='outline'>
                            <i>Try MenstruEase today</i>
                        </Button>
                    </div>
                </div>
                <div className="mr-13"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <img src='./airy-multicolored-pastel-clouds-2.png' alt="Empowering Women" />
                </div>
            </div>
        </div>
    )
}

export default Dashbody;
