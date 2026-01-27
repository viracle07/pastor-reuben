"use client"
import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion";



const page = () => {
  const videoRef = useRef(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3
    }
  }, [])

  return (
    <main className='min-h-dvh'>
      <section className='lg:min-h-dvh h-full'>
        <div className="relative w-full lg:min-h-dvh h-full overflow-hidden">
          {/* Background video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover bg-center"
            src="https://res.cloudinary.com/du5odjbs0/video/upload/v1769470443/bg3_nvghvv.mp4"
            autoPlay
            loop
            muted
            ref={videoRef}
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#0A2342]/80"></div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }} className="relative z-10  flex flex-col items-center justify-center h-100 text-white text-center px-4 space-y-3">
            <h1 className='text-yellow-400 lg:text-4xl text-xl font-bold'>The People's General Touches Lives Around the World</h1>
            <p className='max-md:text-sm'>"Compassion in action, leaving footprints of hope across nations. Extending love, service, and impact to every corner of the world."</p>
          </motion.div>
        </div>
      </section>

      <motion.section initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }} className='lg:px-10 px-4 py-10 bg-white space-y-10'>
        <div>
          <span className='space-y-10'>
            <p>
              Pastor Reuben’s humanitarian work is driven by a deep commitment to restoring dignity, hope, and opportunity to individuals and communities in need. Through strategic outreach programs, emergency relief efforts, human capital development initiatives, and long-term development projects, lives are touched beyond words and transformed through action.
            </p>

            <p>
              From providing essential support to vulnerable families, to investing in education, skills acquisition, leadership training, and scholarship programs, these initiatives are designed to create lasting change. The focus extends beyond immediate relief to empowering individuals with knowledge, capacity, and tools needed to build sustainable futures.
            </p>
          </span>

        </div>

        <div className='lg:flex items-center  max-md:space-y-10 gap-5'>
          <div className='flex text-[#0A2342] space-y-4 rounded-md text-sm font-semibold flex-col shadow-md lg:w-100 p-4 bg-white text-center '>
            <img src="reu15.jpeg" alt="images" className='h-70 w-auto rounded-md' />
            <p>Chief Reuben Clifford gifting N100,000 each to widows and old women in Bayelsa State</p>
          </div>

          <div className='flex space-y-4 text-[#0A2342] text-sm font-semibold rounded-md flex-col  shadow-md lg:w-100 p-4 bg-white text-center '>
            <img src="reu16.jpeg" alt="images" className='h-70 w-auto rounded-md' />
            <p>Over 1000 bags of rice shared accross different communities in Southern Ijaw LG</p>
          </div>

          <div className='flex space-y-4 text-[#0A2342] text-sm font-semibold rounded-md flex-col  shadow-md lg:w-100 p-4 bg-white text-center'>
            <img src="reu14.jpeg" alt="images" className='h-70 w-auto rounded-md' />
            <p>More than 300 people getting incentives from the People's General</p>
          </div>
        </div>
      </motion.section>

    </main>
  )
}

export default page
