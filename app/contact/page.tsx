import React from 'react'

function Contact() {
  return (
    <div>
      <section className=" body-font relative mt-10 flex">
  <div className="container px-5 py-14 mx-auto flex justify-center items-center">
    <div className="flex flex-col w-96">
    <form action="https://getform.io/f/broonjwa" method='POST'>
      <h2 className="text-white text-4xl mb-1 font-bold title-font text-center">
        Contact
      </h2>
      <div className="relative mb-4 mt-10">
        <label htmlFor="name" className="leading-7 text-md text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-purple-300 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-md text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-purple-300 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-md text-white">
           Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-purple-300 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <div className='flex justify-center items-center'>
      <button className="text-white font-bold border-0 py-2 px-6 focus:outline-none bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded text-lg">
          Send Message
      </button>
      </div>
      </form>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contact