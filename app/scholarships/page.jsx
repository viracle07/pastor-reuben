"use client"
import PictureSlider from '@/components/PictureSlider'
import Image from 'next/image'
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
    <main className=' min-h-dvh bg-blue-100'>
      <motion.section
        initial={{ opacity: 0, scale: 0.80 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }} className='lg:px-10 px-4 py-15 space-y-10'>
        <div className='flex items-center justify-center'>
          <h1 className='font-bold lg:text-3xl text-xl'>Scholarships And Education  </h1>
        </div>
        <div className='w-full border-b border-gray-400/50'></div>

        {/* picture slider */}
        <div className='relative lg:flex items-center lg:justify-center lg:h-screen h-70 w-auto'>

          <div className='absolute  h-full w-full lg:w-[50rem] '>

            <PictureSlider />
          </div>
        </div>

        <div className='w-full border-b border-gray-400/50'></div>

      </motion.section>
      {/* text about his education plan */}
      <section className='min-h-dvh bg-[#0A2342] px-4 lg:px-10 py-15 space-y-10'>
        <div className='flex items-center justify-center text-white lg:text-2xl text-xl  '>
          <h1>Chief Pastor Reuben: A Lifelong Commitment to Education and the Promise of Tomorrow</h1>
        </div>

        <div className='w-full border-b border-gray-400/30'></div>

        <div>
          <span className='space-y-6'>
            <p className='text-white'>For Chief Pastor Reuben, education is not merely a social responsibility—it is a sacred calling. His unwavering love for learning is deeply rooted in his conviction that education is the surest path to freedom, dignity, and lasting transformation. He believes that when a child is educated, an entire generation is empowered, and when knowledge is planted in young minds, the future is secured with hope and purpose.</p>

            <p className='font-semibold text-yellow-400 border border-yellow-100 rounded-md p-4 bg-gray-500/50'>
              “Education is the light that shows a young person who they can become, even before the world believes in them,” he often says. This belief has shaped his life’s work and continues to guide his relentless efforts toward building a brighter tomorrow for Nigeria’s youth.
            </p>

            <p className='text-white'>
              Chief Pastor Reuben’s passion for education goes far beyond words. It is reflected in years of intentional investment in young people—especially those whose dreams might have been cut short by circumstance, poverty, or lack of opportunity. He sees potential where others see limitation and possibility where others see obstacles. To him, every child deserves a fair chance, and every young mind deserves access to knowledge that can unlock greatness.
            </p>
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.90 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }} className="relative w-full lg:min-h-dvh h-full overflow-hidden">
          {/* Background video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover bg-center"
            src="https://res.cloudinary.com/du5odjbs0/video/upload/v1769470444/debateVid_nrb3gl.mp4"
            autoPlay
            loop
            muted
            ref={videoRef}
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#0A2342]/60"></div>

          {/* Content */}
          <div className="relative z-10 animate-[slideIn_.5s_ease-out] flex flex-col items-center justify-center h-100 text-white text-center px-4 space-y-3">

            <p className='max-md:text-sm text-white font-semibold italic'>Pastor Reuben Foundation debate competition for secondary school students 2025 edition</p>
          </div>
        </motion.div>

      </section>
      {/* text and scolarship picture card */}
      <section className='min-h-dvh bg-white px-4 lg:px-10 py-10'>
        <div className=''>
          <span className='space-y-7'>
            <p>
              At the heart of Chief Reuben's advocacy lies a deep concern for the future of the next generation. He understands that today’s students are tomorrow’s leaders, innovators, educators, and nation builders. This is why youth empowerment through education has remained a cornerstone of his ministry and humanitarian outreach. As he passionately affirms, “When we educate the youth, we are not just teaching them how to make a living—we are teaching them how to live.”
            </p>

            <p>
              In recognition of his outstanding dedication to educational development and national progress, President Bola Ahmed Tinubu appointed Chief Pastor Reuben as a member of the Governing Board of the University of Uyo. This appointment stands as a testament to his credibility, vision, and proven commitment to advancing education at both grassroots and institutional levels. It also reflects the confidence placed in his ability to contribute meaningfully to policy, governance, and the strategic growth of higher education in Nigeria.
            </p>

            <p>
              Yet, beyond titles and appointments, Chief Pastor Reuben’s greatest legacy is found in lives changed. Across all 36 states of the federation, he has sponsored and supported numerous students through scholarships covering both private and public universities, as well as secondary schools. These scholarships are not merely financial aid; they are lifelines—restoring hope to families, rekindling abandoned dreams, and opening doors that once seemed permanently closed.
            </p>

          </span>
          <motion.div
            initial={{ opacity: 0, scale: 0.80 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }} className='flex items-center justify-center py-7'>

            <Image
              width={800}
              height={800}
              src={"/edu1.jpeg"}
              alt='image'
              className='h-auto w-auto' />
          </motion.div>

          <span>
            <p>Today, Chief Pastor Reuben stands as a symbol of hope, vision, and selfless investment in the future. His love for education continues to shape destinies, strengthen institutions, and inspire a generation to dream boldly. His story is a reminder that when faith meets purpose, and compassion meets action, the result is a legacy that outlives titles—a legacy written in educated minds, fulfilled dreams, and a nation steadily rising through the power of knowledge.</p>
          </span>
        </div>

      </section>

      <section className='lg:h-100 min-h-dvh bg-zinc-300 lg:flex flex-col items-center justify-center space-y-10 lg:px-10 px-4 pt-5'>
        <div className='flex flex-col items-center  justify-center space-y-3'>
          <h1 className='max-md:text-center text-xl font-bold text-gray-800 underline'>Scholarships and Competitions</h1>
          <p className='text-sm text-center'>Through his scholarship scheme, he has provided educational support to a large number of students nationwide, ensuring that financial limitations do not stand in the way of academic excellence and personal growth.

            Each year, students from different backgrounds and regions benefit from this initiative, gaining access to quality education in both public and private secondary schools and universities. These scholarships are designed not only to ease financial burdens but also to restore hope, inspire confidence, and empower students to pursue their academic goals with determination and purpose.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} className='grid lg:grid-cols-3 gap-10 lg:shadow-md py-10 px-10'>
          <div className='flex flex-col items-center justify-center space-y-4'>
            <img src="/uniuyopic.jpeg" alt="image" className='h-50 w-50 rounded-full' />
            <span className='space-y-3 flex flex-col items-center justify-center'>
              <p className='text-sm text-center'>University of Uyo Scholarship benefactors presenting an Award to Chief Reuben Wilson.</p>
            </span>
          </div>

          <div className='flex flex-col items-center justify-center space-y-4'>
            <img src="/debate24.jpeg" alt="image" className='h-50 w-50 rounded-full' />
            <span className='space-y-3 flex flex-col items-center justify-center'>
              <p className='text-sm text-center'>Pastor Reuben Foundation debate competition for secondary school students 2024 edition.</p>
            </span>
          </div>

          <div className='flex flex-col items-center justify-center space-y-4'>
            <img src="/novenaUnipic.jpeg" alt="image" className='h-50 w-50 rounded-full' />
            <span className='space-y-3 flex lex-col items-center justify-center'>
              <p className='text-sm text-center'>Novena University Scholarship benefactors with the SA on scholarship matters to Chief Reuben </p>
            </span>
          </div>
        </motion.div>


      </section>

    </main>
  )
}

export default page
