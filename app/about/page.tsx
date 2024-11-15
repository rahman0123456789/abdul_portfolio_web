import Image from "next/image"

function About() {
  return (
    <div>
      <section className="body-font">
        <div className="container mx-auto flex px-5 lg:my-10 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mt-0 items-center text-center lg:pl-20 md:pl-10">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white border-b-2 italic">
              About Me
            </h1>
            <p className="mb-10 leading-relaxed text-white text-lg mt-10">
              I am expert in html tailwind css javascript typescript nextjs sanity and also postgre sql i have made many websites
              Enthusiastic learner at PIAIC diving deep into the realms of certified cloud applied Generative AI
              Fueled by a passion for cutting edge technologies I am on a mission to leverage these skills for impactful freelancing venture
              With a commitment to continuous growth  i am excited about contributing to innovative projects and connecting with like minded professionals <br />
            </p>
            <div className="flex w-full md:justify-center justify-center items-center">
              <a href="/cv.pdf" target='_blank'>
                <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded text-lg font-bold">
                  View CV
                </button></a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:pr-20 md:pr-10">
            <Image
              className="object-cover object-center rounded"
              alt="photo"
              src="/photo.jpg"
              width={400} height={300} />
          </div>
        </div>
      </section>

    </div>
  )
}

export default About