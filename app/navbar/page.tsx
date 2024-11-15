"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {

  const [menuOpen, setMenuOpen]= useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="shadow-md sticky bg-background/50 top-0 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={"/"}>
           <h1 className='text-3xl text-white font-bold italic hover:text-yellow-300'>Abdul <span className='text-lg'>Rahman</span></h1>
           </Link>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className=" hover:text-red-400 font-semibold text-white">Home</Link>
            <Link href="/about" className=" hover:text-red-400 font-semibold text-white">About</Link>
            <Link href="/skills" className=" hover:text-red-400 font-semibold text-white">Skills</Link>
            <Link href="/projects" className=" hover:text-red-400 font-semibold text-white">Projects</Link>
            <Link href="/services" className=" hover:text-red-400 font-semibold text-white">Services</Link>
            <Link href="/contact" className=" hover:text-red-400 font-semibold text-white">Contact</Link>
            <Link href="/cv.pdf" target='_blank'>
            <button className='border-2 px-3 py-1 text-white font-semibold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500'>Download CV</button>
            </Link>
          </div>

          {/* mobile Navbar */}
          <div className='md:hidden mt-5 text-white' onClick={toggleMenu}>
            {menuOpen ? <IoMdClose size={25}/> : <CiMenuFries size={25}/>}
         
          </div>
        </div>
      </div>
      {menuOpen && (
      <div className="flex flex-col gap-6 items-center pb-5 shadow-md mt-5">
      <Link href="/" className=" hover:text-red-400 text-white">Home</Link>
      <Link href="/about" className=" hover:text-red-400 text-white">About</Link>
      <Link href="/skills" className=" hover:text-red-400 font-semibold text-white">Skills</Link>
       <Link href="/projects" className=" hover:text-red-400 font-semibold text-white">Projects</Link>
      <Link href="/services" className=" hover:text-red-400 font-semibold text-white">Services</Link>
      <Link href="/contact" className=" hover:text-red-400 text-white font-semibold">Contact</Link>
      <Link href="/cv.pdf" target='_blank'>
       <button className='border-2 px-3 py-1 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold'>Download CV</button>             
      </Link>
     <section className='flex'>
     <Link className="text-white" href='https://www.facebook.com/share/nGRKQJTUNrPiDvm8/' target='_blank'>
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </Link>
      <Link className="ml-3 text-white" href='https://www.instagram.com/rahmaaan_official/profilecard/?igsh=ejAzbzI4NW12NzZw' target='_blank'>
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      </Link>
      <Link className="ml-3 text-white" href='https://www.linkedin.com/in/abdul-rahman-71b909216/' target='_blank'>
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </Link>
     </section>
    </div>
      )}
    </nav>
  );
};

export default Navbar;
