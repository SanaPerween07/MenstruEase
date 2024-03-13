"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/src/components/layout/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch('/api/Login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-slate-200 shadow-md rounded-lg px-10 py-10 mt-10 mb-10 max-w-md w-full">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-6">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Username:
              </label>
              <input
                type="text"
                placeholder="enter your username"
                id="username"
                name="username"
                required
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                placeholder="enter your password"
                id="password"
                name="password"
                required
                className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Login
              </button>
            </div>
            <br />
            <p className="flex items-center justify-center">Or</p>
            <br />
            <button
              type="button"
              className="bg-white text-black font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline w-full flex gap-6 items-center justify-center"
            >
              <Image src="/google.png" alt="google" width={30} height={30} />
              Login with Google
            </button>
            <div className="flex items-center justify-center my-4">
              <p className="mr-2">Do not have an account ?</p>
              <Link className="underline text-blue-600 font-semibold" href={'/SignUp'}>
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
