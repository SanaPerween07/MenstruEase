import React from 'react';
import Image from 'next/image';

export default function Login() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-slate-100 shadow-md rounded-lg px-8 py-10 mt-10 mb-10 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
        <form>
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
            <input type="text" placeholder="enter your username" id="username" name="username" required className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input type="password" placeholder="enter your password" id="password" name="password" required className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline w-full">Login</button>
          </div>
          <br></br>
          <p className='flex items-center justify-center'>Or</p>
          <br></br>
            <button type="submit" className="bg-white text-black font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline w-full flex gap-6 items-center justify-center">
              <Image src = "/google.png" alt = "google" width={30} height={30}/>
              Login with Google
            </button>
        </form>
      </div>
    </div>
  );
}
