import React from 'react'
import Image from 'next/image'
function Skills() {
  return (
    <div>
      <div>
        <h1 className='text-center text-white italic lg:text-4xl text-3xl font-bold mt-20'>My Skills</h1>
        <section className="body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center items-center">
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-black p-6 rounded-lg">
          <Image
            className="h-60 rounded w-full object-cover object-center mb-6"
            src="/htm.png"
            alt="htm"
          width={200} height={100}/>
          <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
            HTML
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-black p-6 rounded-lg">
        <Image
            className="h-60 rounded w-full object-cover object-center mb-6"
            src="/css.jpg"
            alt="css"
          width={200} height={100}/>
          <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
            CSS
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-black p-6 rounded-lg">
        <Image
            className="h-60 rounded w-full object-cover object-center mb-6"
            src="/js.webp"
            alt="js"
          width={200} height={100}/>
         <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
            JAVASCRIPT
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-black p-6 rounded-lg">
        <Image
            className="h-60 rounded w-full object-cover object-center mb-6"
            src="/ts.jpg"
            alt="ts"
          width={200} height={100}/>
         <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
            TYPESCRIPT
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-black p-6 rounded-lg">
        <Image
            className="h-60 rounded w-full object-cover object-center mb-6"
            src="/rj.png"
            alt="rj"
          width={200} height={100}/>
         <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
            REACT JS
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-black p-6 rounded-lg">
        <Image
            className="h-60 rounded w-full object-cover object-center mb-6"
            src="/nxt.jpg"
            alt="nxt"
          width={200} height={100}/>
         <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
            NEXT JS
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-black p-6 rounded-lg">
        <Image
            className="h-60 rounded w-full object-cover object-center mb-6"
            src="/njs.jpg"
            alt="njs"
          width={200} height={100}/>
         <h2 className="text-2xl text-white font-bold title-font mb-4 text-center">
             NODE JS
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 w-96 p-4">
        <div className="bg-black p-6 rounded-lg">
        <Image
            className="h-60 rounded w-full object-cover object-center mb-6"
            src="/tc.png"
            alt="tc"
          width={200} height={100}/>
         <h2 className="text-xl text-white font-bold title-font mb-4 text-center">
             TAILWIND CSS
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    </div>
  )
}

export default Skills