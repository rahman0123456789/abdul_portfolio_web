"use client";
import Image from "next/image"
import Link from "next/link";
import Typewriter from 'typewriter-effect';
function Hero() {
  return (
    <div>
      <section className=" body-font">
        <div className="container mx-auto flex lg:flex-row flex-col  gap-14 px-5 py-24 justify-center items-center">
          <Image
            className="lg:w-80 md:w-48 w-52  object-cover object-center lg:rounded-full rounded"
            alt="pic"
            src="/pic.jpeg"
            width={300} height={100} />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center mt-7 ">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-white">
              Hi I am Abdul Rahman
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              <Typewriter
                options={{
                  strings: ['Frontend Developer','UI/UX Designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed text-white text-lg">
             Frontend Developer and UI/UX Designer with a strong foundation in javascript tailwind css typescript nextjs and nodejs I am passionate about using these skills to develop innovative web applications that are user friendly I am always eager to learn more about web development and marketing
              I enjoy the challenge of coding and solving real world problems Currently I am looking for opportunities to join a team that values innovation and shares my enthusiasm for technology
            </p>
            <div className="flex w-full justify-center items-end">
              <Link href="/contact">
                <button className="inline-flex text-white  border-0 py-2 px-6 focus:outline-none bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded text-lg font-bold">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
