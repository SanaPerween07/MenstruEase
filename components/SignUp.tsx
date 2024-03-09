import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const SignUp = () => {
  return (
    <div className="flex justify-between items-center bg-indigo-50 px-20 py-10">
      <div className="max-w-l">
        <h4 className="text-lg font-semibold">
          Share your stories through us to the world
        </h4>
        <h2 className="text-2xl font-bold">Let end Period Stigma</h2>
        <p className="max-w-md">
          Sign Up and start contributing your first own blog on health and
          hygiene. Here at Shewin we respect privacy so you can opt stay
          anynomous or privately share the story to us.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="mt-4 bg-rose-300 hover:bg-rose-400 hover:shadow-md rounded-lg px-4 py-2"
        >
          Share the World
        </Button>
      </div>
      <div className="flex flex-col">
        <Image src="/signUp-stain.jpg" alt="stain" className="mb-2 rounded-xl" width={112} height={112}/>
        <Image src="/signUp-stain1.avif" alt="stain1" className="mb-2 rounded-xl" width={112} height={112}/>
        <Image src="/signUp-stain2.jpg" alt="stain2" className="mb-2 rounded-xl" width={112} height={112}/>
      </div>
    </div>
  );
};

export default SignUp;
