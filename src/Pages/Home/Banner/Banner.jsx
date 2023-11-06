import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

const Banner = () => {
  return (
<section className="bannerSection text-white">
  <div
    className="mx-auto max-w-screen px-4 py-32 lg:flex lg:gap-6 lg:h-screen lg:items-center bg-black/50"
  >
    <div className="mx-auto max-w-3xl text-center ">
      <h1
        className="bg-gradient-to-r from-purple-800 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent md:text-6xl sm:text-5xl text-4xl"
      >
        Leave no meal behind
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-lg text-sm">
      Every month, people like you use ResQFood to save tens of thousands of meals from ending up in the trash bin. With a 97% satisfaction rate on all orders, saving the world has never tasted this good!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to={'/availablefoods'}
          className="block rounded border bg-purple-950 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 w-fit"
         
        >
          Get Started
        </Link>

      </div>
    </div>
  </div>
</section>
  )
}

export default Banner