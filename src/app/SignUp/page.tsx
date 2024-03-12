import React from 'react';
import Link from 'next/link';
import Footer from '@/src/components/layout/Footer';

export default function SignUp() {
  return (
    <>
    <div className="flex justify-center items-center">
      <div className="bg-slate-200 shadow-md rounded-lg px-8 py-10 mt-10 mb-10 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">Welcome</h1>
        <form>
          <div className="mb-6">
            <label htmlFor="firstname" className="block text-gray-700 text-sm font-bold mb-2">First name:</label>
            <input type="text" placeholder="enter your first name" id="username" name="username" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="lastname" className="block text-gray-700 text-sm font-bold mb-2">Last name:</label>
            <input type="text" placeholder="enter your last name" id="username" name="username" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="string" placeholder="enter your email" id="username" name="username" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input type="password" placeholder="enter your password" id="password" name="password" className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline w-full">Create Account</button>
          </div>
          <div className='flex items-center justify-center my-4'>
            <p className='mr-2'>Already have an account ?</p>
            <Link className='underline text-blue-600 font-semibold' href={'/Login'} >Login here</Link>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}
