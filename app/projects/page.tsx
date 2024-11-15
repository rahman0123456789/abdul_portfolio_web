import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Projects() {
  return (
    
    <div>
        <h1 className='text-center text-white italic lg:text-4xl text-3xl font-bold mt-20'>Typescript Projects</h1>
        <section className="body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center items-center">
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-purple-500 p-6 rounded-lg">
          <Image
            className="h-72 rounded w-full object-cover object-center mb-6"
            src="/cal.avif"
            alt="cal"
          width={200} height={100}/>
          <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
            Calculator
          </h2>
          <div className='text-white font-semibold flex gap-2 justify-center items-center'>
            <button className='bg-purple-800 rounded p-1'>Typescript</button>
            <button className='bg-purple-800 rounded p-1'>Node js</button>
            <Link href={"https://github.com/rahman0123456789/Calculator_Project"} target='_blank'>
            <button className='bg-purple-800 rounded p-1'>Github</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-purple-500 p-6 rounded-lg">
        <Image
            className="h-72 rounded w-full object-cover object-center mb-6"
            src="/atm.jpeg"
            alt="atm"
          width={200} height={100}/>
          <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
            ATM Machine
          </h2>
          <div className='text-white font-semibold flex gap-2 justify-center items-center'>
            <button className='bg-purple-800 rounded p-1'>Typescript</button>
            <button className='bg-purple-800 rounded p-1'>Node js</button>
            <Link href={"https://github.com/rahman0123456789/ATM_Project"} target='_blank'>
            <button className='bg-purple-800 rounded p-1'>Github</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-purple-500 p-6 rounded-lg">
        <Image
            className="h-72 rounded w-full object-cover object-center mb-6"
            src="/cc.jpeg"
            alt="cc"
          width={200} height={100}/>
         <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
            Currency Exchange
          </h2>
          <div className='text-white font-semibold flex gap-2 justify-center items-center'>
            <button className='bg-purple-800 rounded p-1'>Typescript</button>
            <button className='bg-purple-800 rounded p-1'>Node js</button>
            <Link href={"https://github.com/rahman0123456789/Currency_Converter"} target='_blank'>
            <button className='bg-purple-800 rounded p-1'>Github</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-purple-500 p-6 rounded-lg">
        <Image
            className="h-72 rounded w-full object-cover object-center mb-6"
            src="/ng.jpeg"
            alt="ng"
          width={200} height={100}/>
         <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
            Guessing The Number
          </h2>
          <div className='text-white font-semibold flex gap-2 justify-center items-center'>
            <button className='bg-purple-800 rounded p-1'>Typescript</button>
            <button className='bg-purple-800 rounded p-1'>Node js</button>
            <Link href={"https://github.com/rahman0123456789/Number_Guessing_Game"} target='_blank'>
            <button className='bg-purple-800 rounded p-1'>Github</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-purple-500 p-6 rounded-lg">
        <Image
            className="h-72 rounded w-full object-cover object-center mb-6"
            src="/tdl.jpeg"
            alt="tdl"
          width={200} height={100}/>
         <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
            Todo List
          </h2>
          <div className='text-white font-semibold flex gap-2 justify-center items-center'>
            <button className='bg-purple-800 rounded p-1'>Typescript</button>
            <button className='bg-purple-800 rounded p-1'>Node js</button>
            <Link href={"https://github.com/rahman0123456789/todo_list_project"} target='_blank'>
            <button className='bg-purple-800 rounded p-1'>Github</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-purple-500 p-6 rounded-lg">
        <Image
            className="h-72 rounded w-full object-cover object-center mb-6"
            src="/wc.png"
            alt="wc"
          width={200} height={100}/>
         <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
            Word Counter Game
          </h2>
          <div className='text-white font-semibold flex gap-2 justify-center items-center'>
            <button className='bg-purple-800 rounded p-1'>Typescript</button>
            <button className='bg-purple-800 rounded p-1'>Node js</button>
            <Link href={"https://github.com/rahman0123456789/word_Counter"} target='_blank'>
            <button className='bg-purple-800 rounded p-1'>Github</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-purple-500 p-6 rounded-lg">
        <Image
            className="h-72 rounded w-full object-cover object-center mb-6"
            src="/bmi.webp"
            alt="bmi"
          width={200} height={100}/>
         <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
             BMI Calculator
          </h2>
          <div className='text-white font-semibold flex gap-2 justify-center items-center'>
            <button className='bg-purple-800 rounded p-1'>Typescript</button>
            <button className='bg-purple-800 rounded p-1'>Node js</button>
            <Link href={"https://github.com/rahman0123456789/BMI_Calculator"} target='_blank'>
            <button className='bg-purple-800 rounded p-1'>Github</button>
            </Link>
          </div> 
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-purple-500 p-6 rounded-lg">
        <Image
            className="h-72 rounded w-full object-cover object-center mb-6"
            src="/sms.webp"
            alt="sms"
          width={200} height={100}/>
         <h2 className="text-xl text-white font-bold title-font mb-4 text-center">
             Student Management System 
          </h2>
          <div className='text-white font-semibold flex gap-2 justify-center items-center'>
            <button className='bg-purple-800 rounded p-1'>Typescript</button>
            <button className='bg-purple-800 rounded p-1'>Node js</button>
            <Link href={"https://github.com/rahman0123456789/Student_Management_System"} target='_blank'>
            <button className='bg-purple-800 rounded p-1'>Github</button>
            </Link>
          </div> 
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects