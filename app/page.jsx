"use client"

import AnimatedSection from '@/components/AnimatedSection'
import ImageSlider from '@/components/ImageSlider'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";



const page = () => {
  return (
    <main className='min-h-dvh '>
      <div className="relative w-full h-100 lg:h-[45rem] overflow-hidden">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/du5odjbs0/video/upload/v1769470528/bg4_rimyc4.mp4"
          autoPlay
          loop
          muted
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0A2342]/80"></div>

        {/* Content */}
        <div className="relative z-10  animate-[slideIn_.5s_ease-out] flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="lg:text-3xl text-2xl font-bold text-yellow-500 mb-4">The Official Site of Pastor Reuben Wilson</h1>
          <p className="lg:text-md text-sm max-w-xl">
            This platform highlights his distinguished contributions to humanitarian development and political leadership, showcasing a lifelong commitment to service and societal progress.
          </p>
        </div>
      </div>

      {/* A word from pastor reuben */}
      <section className='flex items-center justify-center  animate-[slideIn_.7s_ease-out] lg:px-10 px-4 lg:py-15 py-10 bg-[#0A2342]'>
        <div className='h-fit w-200 text-center space-y-5 '>
          <motion.div
            initial={{ opacity: 0, scale: 0.90 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }} className='text-white space-y-4'>
            <p className='lg:text-2xl text-xl'>“Leadership, to me, is about service and the positive impact we leave on others. My mission has always been to uplift lives, promote accountability, and inspire hope through purposeful action. Together, we can build a future where compassion leads, opportunities grow, and true leadership becomes a way of life.”
            </p>
            <p className='text-md font-semibold text-yellow-500'> — Pastor Reuben Wilson</p>
          </motion.div>
        </div>
      </section>

      {/* section for pictures story */}
      <section className=" bg-gray-100 bg-no-repeat bg-cover bg-center ">
        <AnimatedSection />

      </section>

      <div className='border-t border-yellow-600/50 lg:mx-10 mx-4 w-auto shadow-md'></div>

      <motion.section
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }} className='lg:py-15 py-10 lg:px-10 px-4 flex max-md:flex-col gap-10'>
        <div className='bg-[#0A2342] p-10 lg:w-200 w-auto rounded-xl shadow-xl hover:shadow-yellow-200'>
          <span className='text-white space-y-3 text-center'>
            <p className='text-xl font-bold text-yellow-500'>VISION</p>
            <p>To see a society where leadership is defined by compassion, integrity, and service to the people. I strive to build a nation where governance uplifts lives, empowers communities, and creates lasting opportunities for all — a future where unity, education, and accountability become the true pillars of progress.</p>
          </span>
        </div>

        <div className='bg-[#0A2342] p-10 lg:w-200 w-auto rounded-xl shadow-xl  hover:shadow-yellow-200 transition-all duration-500 '>
          <span className='text-white space-y-3 text-center'>
            <p className='text-xl font-bold text-yellow-500'>MISSION</p>
            <p>To serve humanity through purposeful leadership that promotes transparency, empowerment, and social development. I am committed to creating opportunities for growth, supporting education, and championing initiatives that improve lives and strengthen communities across our nation. Through dedication and accountability, I aim to inspire others to lead with compassion and integrity.</p>
          </span>
        </div>

      </motion.section>

      <div className='border-t border-yellow-600/50 mx-10 w-auto shadow-md'></div>



      {/*  picture slide */}

      <section className='lg:py-20 py-10 px-4'>

        <div className='relative lg:flex items-center lg:justify-center lg:h-screen h-70 w-auto'>

          <div className='absolute  h-full w-full lg:w-[50rem] '>

            <ImageSlider />
          </div>
        </div>
      </section>


    </main>
  )
}

export default page

