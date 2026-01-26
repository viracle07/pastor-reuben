"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";


const page = () => {
  return (
    <main className='min-h-dvh'>
      {/* the man pst reuben */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }} className='flex max-md:flex-col items-center gap-10 lg:py-15 py-10 lg:px-10 px-4 bg-gray-200/50'>
        <div className='w-auto h-fit flex  flex-col space-y-5'>
          <div className='flex justify-center'>
            <h1 className='lg:text-2xl text-lg text-[#0A2342] max-md:text-center font-bold border-b border-[#CFAE47] pb-3 w-fit'>" THE MAN CHIEF REUBEN WILSON "</h1>
          </div>
          <span className='flex flex-col items-center text-gray-800 lg:text-md text-sm space-y-3'>
            <p>Chief Reuben Wilson, fondly known as “The People’s General,” is a visionary leader and humanitarian from Koluama 1 in Southern Ijaw Local Government Area of Bayelsa State, Nigeria. He is a man of integrity, compassion, and purpose-driven leadership, devoted to the service of humanity and the advancement of his people.
            </p>

            <p>
              A holder of both Master’s and Ph.D. degrees in Political Science and International Relations from the University of Uyo, Chief Wilson combines intellectual excellence with practical leadership. As the CEO of Reuwells Oil and Gas, he has demonstrated outstanding business acumen while using his influence to drive community growth, youth empowerment, and educational support through scholarships and training programs.
            </p>

            <p>
              He is also the Founder of the Pastor Reuben Initiative for Good Leadership and Accountability (PRIFGLA) — a prominent political support group in the South-South region of Nigeria dedicated to promoting responsible leadership and civic engagement. Through his humanitarian services, political involvement, and capacity-building efforts, Chief Reuben Wilson continues to inspire hope and transformation across the Niger Delta and beyond.
            </p>
          </span>
        </div>

        <Image
          className='w-fit lg:h-125 h-100 shadow-md'
          src={"/pic1.png"}
          alt='image'
          width={800}
          height={800}
        />

      </motion.section>

      {/* about the website */}
      <section className='lg:px-10 px-4 lg:py-15 py-10 bg-blue-100/50'>
        <div className=' flex flex-col space-y-7 w-auto'>
          <h1 className='text-center font-bold text-blue-900 lg:text-3xl text-xl'>A Journey of Leadership and Impact</h1>

          <p className='max-md:text-sm text-gray-800'>Every great leader has a story, and the journey of Pastor (Chief) Reuben Wilson is one marked by dedication, resilience, and a heart for people. This website captures his lifelong mission to lead with compassion, inspire change, and create lasting opportunities for those in need. From his role in promoting good governance to his investments in education and community empowerment, every chapter of his life reflects a deep commitment to humanity.</p>

          <motion.img initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }} src="/reu5.jpeg" alt="image" className='w-auto h-auto rounded-xl' />

          <p className='max-md:text-sm text-gray-800'>This platform invites you to walk through his story — to see the faces, the places, and the lives transformed by his vision and generosity. It is not just a record of achievements, but a testament to what true leadership can accomplish when driven by service, faith, and love for others.</p>

          <p className='max-md:text-sm text-gray-800'>Beyond showcasing his legacy, this platform also serves as a hub for inspiration and learning — where individuals can draw lessons from his journey, discover his ongoing initiatives, and connect with the causes he passionately supports. It highlights the power of selfless service and the difference one leader can make through integrity, vision, and love for humanity.</p>
        </div>
      </section>

      {/* vision and mission in action */}
      <motion.section
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }} className='lg:px-10 px-4 lg:py-15 py-10 lg:space-y-15 space-y-10 '>
        <div className='flex flex-col lg:space-y-5 '>
          <h1 className='text-center lg:text-2xl text-lg text-yellow-500 font-bold'>VISION IN ACTION</h1>
          <div className="h-auto w-auto rounded-xl font-semibold shadow-lg text-center max-md:text-sm lg:p-10 p-5 transition-all duration-200  hover:bg-[url('/bg6.jpg')] bg-no-repeat bg-cover bg-center ">
            Pastor (Chief) Reuben Wilson’s vision is not confined to words on paper — it lives through his daily actions and the countless lives he continues to touch. His dream of a society led by integrity, compassion, and purposeful leadership finds expression in every scholarship awarded, every youth empowered, and every community uplifted. By merging political wisdom with humanitarian service, his vision in action seeks to nurture a generation of leaders who will not only dream of a better future but actively build it — with fairness, love, and accountability at the core.
          </div>

        </div>

        <div className='flex flex-col lg:space-y-5'>
          <h1 className='text-center lg:text-2xl text-lg text-yellow-500 font-bold'>MISSION IN ACTION</h1>
          <div className="h-auto w-auto rounded-xl max-md:text-sm text-center font-semibold shadow-lg lg:p-10 p-5 transition-all duration-200  hover:bg-[url('/bg1.jpg')] bg-no-repeat bg-cover bg-center ">
            Driven by a deep passion for people and progress, Pastor Wilson’s mission goes beyond advocacy — it is a movement rooted in service and transformation. Through the Pastor Reuben Initiative for Good Leadership and Accountability, he continuously promotes transparency, mentorship, and social development across the Niger Delta and beyond. His mission in action focuses on creating opportunities, fostering responsible leadership, and ensuring that no one is left behind in the pursuit of growth and justice. In every act of kindness, empowerment, and reform, his mission becomes a living testimony of faith in humanity and dedication to lasting impact.
          </div>

        </div>
      </motion.section>
    </main>
  )
}

export default page
