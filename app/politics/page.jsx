"use client"
import React from 'react'
import { motion } from "framer-motion";


const page = () => {
  return (
    <main className='min-h-dvh '>
      <section className='lg:px-10 px-4 py-15 animate-[slideIn_.9s_ease-out]'>
        <div className='flex flex-col space-y-10'>
          <div className='flex items-center max-lg:text-center flex-col  '>
            <h1 className='text-gray-800 font-bold text-xl lg:text-2xl'>The Pastor Reuben Initiative For Good Leadership and Accountability (PRIFGLA)</h1>
            <p className='text-gray-800 text-lg lg:text-xl'>The largest political support group in the South South Nigeria.</p>
          </div>



          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }} className='flex max-lg:flex-col items-center gap-10'>
            <img src="reu12.jpeg" alt="image" className='lg:h-100 w-auto' />
            <p className='p-4 border border-yellow-300 rounded-md shadow-xs'>Pastor Reuben’s political support group, the Pastor Reuben Wilson Initiative for Good Leadership and Accountability (PRIFGLA), stands as a powerful symbol of strategic political organization, grassroots strength, and visionary leadership in Nigeria’s democratic space. Renowned for its discipline, unity, and unwavering commitment to good governance, the Initiative has grown into a respected and influential national force headquartered in Yenagoa, Bayelsa State. Built on credibility, inclusiveness, and purposeful engagement, PRIFGLA continues to mobilize citizens, inspire political consciousness, and strengthen democratic participation. Its expanding national reach and strong organizational structure have earned admiration across regions and political divides, positioning the Initiative as a trusted voice and a driving force in Nigeria’s evolving political landscape.
            </p>
          </motion.div>
        </div>

      </section>
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }} className='px-4 lg:px-10 pb-15'>
        <div className='flex flex-col space-y-7'>
          <div className='flex max-lg:flex-col items-center gap-10'>
            <p className='p-4 border border-yellow-300 rounded-md shadow-xs'>In the landmark 2023 general elections, PRIFGLA emerged as one of the most formidable and influential support groups in the South-South, playing a decisive and historic role in the overwhelming victory of President Bola Ahmed Tinubu across the region. Its impact, however, went far beyond a single zone. With strong coordination, strategic planning, and growing national appeal, the Initiative has successfully expanded its presence into the Northern and the Eastern part of Nigeria, solidifying its status as a truly nationwide movement. Through intentional leadership development, political mobilization, mentorship, and value-driven engagement, PRIGLA has consistently produced credible, disciplined, and accountable leaders from the grassroots to the national stage, earning recognition as a beacon of excellence and a major driving force in Nigeria’s evolving political landscape.</p>
            <img src="reu21.jpeg" alt="image" className='lg:h-100 w-auto animate-[slideIn_.9s_ease-out]' />
          </div>
        </div>
      </motion.section>

      <section className='bg-blue-200 py-15 px-4 lg:px-10'>
        <div className='space-y-7'>
          <div className='flex items-center flex-col max-lg:text-center max-lg:space-y-4 '>
            <h1 className='text-gray-800 font-bold text-xl lg:text-2xl'>Solidarity walk in Bayelsa State to support President Tinubu</h1>
            <p className='text-gray-800 text-lg lg:text-xl'>A show of love and support by the people's general to PBAT ahead of the 2027 General Election</p>

            <div className='border-b border-gray-800/25 w-full mt-5'></div>
          </div>

          <div className='max-md:space-y-5'>
            <p className='lg:p-4 '>In September 2025, Pastor Reuben Wilson led a historic solidarity walk in Bayelsa State to express unwavering support for President Bola Ahmed Tinubu ahead of the 2027 general elections. The event attracted a massive turnout, with thousands of citizens from across the Niger Delta region gathering to demonstrate their confidence in the President’s leadership and vision for Nigeria. The solidarity walk was more than a political endorsement; it was a clear statement of unity, political mobilization, and grassroots engagement, highlighting the growing influence of Pastor Reuben’s leadership in shaping political discourse and rallying citizens around credible, people-centered governance.</p>

            <p className='lg:p-4 '>The walk also served as a platform to express profound appreciation to President Tinubu for the transformative policies and development initiatives his administration has brought to the Niger Delta. Attendees celebrated the progress in infrastructure, social programs, and economic empowerment that have positively impacted lives across the region. By organizing this high-profile event, Pastor Reuben not only reaffirmed his commitment to political accountability and good governance but also reinforced the importance of civic participation in building a stronger Nigeria. The solidarity walk stands as a testament to the collective desire of the Niger Delta people for continued progress, inclusive leadership, and strategic engagement in the nation’s political process.</p>
          </div>

          <div className='flex items-center justify-center'>
            <img src="pic3.jpg" alt="image" className='lg:h-100 w-auto animate-[slideIn_.9s_ease-out]' />
          </div>
        </div>

      </section>

      <section className='lg:px-10 px-4 py-15 min-h-dvh'>
        <motion.div initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }} className='lg:grid grid-cols-2 gap-10 max-lg:space-y-10 '>

          <div className='flex max-md:flex-col items-center  gap-4 lg:w-fit'>
            <img src="reu4.jpeg" alt="images" className='h-40 w-55  rounded-full' />
            <div className='h-50 lg:h-65 lg:w-80 flex items-center p-4 shadow-md rounded-lg border border-gray-300'>
              <p className=''>Pastor Reuben Wilson at the All South-South APC Stakeholders Meeting, reaffirming unity, collaboration, grassroots mobilization, and political support for progressive leadership across the South-South region.
              </p>
            </div>
          </div>

          <div className='flex max-md:flex-col items-center gap-4 lg:w-fit'>
            <img src="reu6.jpeg" alt="images" className='h-40 w-55 rounded-full' />
            <div className='h-50 lg:h-65 lg:w-80 flex items-center p-4 shadow-md rounded-lg border border-gray-300'>
              <p className=''>During the PRIFGLA and The Asiwaju Group (TAG) inauguration of the Edo State Chapter, Pastor Reuben Wilson emphasized strategic political alignment, party cohesion, and the advancement of accountable leadership in the state.</p>
            </div>

          </div>
          <div className='flex max-md:flex-col items-center gap-4 lg:w-fit'>
            <img src="reu7.jpeg" alt="images" className='h-40 w-55 rounded-full' />
            <div className='h-50 lg:h-65 lg:w-80 flex items-center p-4 shadow-md rounded-lg border border-gray-300'>
              <p className=''>Pastor Reuben Wilson addressing APC Bayelsa State issues during the solidarity walk, urging President Bola Ahmed Tinubu to intervene and restore unity within the party for lasting peace and stability.</p>
            </div>

          </div>
          <div className='flex max-md:flex-col items-center gap-4 lg:w-fit'>
            <img src="reu8.jpeg" alt="images" className='h-40 w-55 rounded-full' />
            <div className='h-50 lg:h-65 lg:w-80 flex items-center p-4 shadow-md rounded-lg border border-gray-300'>
              <p className=''>The People’s General drew a massive crowd in Bayelsa State, demonstrating overwhelming support for President Tinubu during his 2023 campaign, showcasing his influence and commitment to political leadership.</p>
            </div>
          </div>

          <div className='flex max-md:flex-col items-center gap-4 lg:w-fit'>
            <img src="reu9.jpeg" alt="images" className='h-40 w-55 rounded-full animate-[slideIn_.9s_ease-out]' />
            <div className='h-50 lg:h-65 lg:w-80 flex items-center p-4 shadow-md rounded-lg border border-gray-300'>
              <p className=''>At the inauguration of PRIFGLA and TAG in Rivers State, Pastor Reuben Wilson emphasized building the strength and capacity of both groups to deliver President Tinubu across the Niger Delta.</p>
            </div>
          </div>

          <div className='flex max-md:flex-col items-center gap-4 lg:w-fit'>
            <img src="reu10.jpeg" alt="images" className='h-40 w-55 rounded-full animate-[slideIn_.9s_ease-out]' />
            <div className='h-50 lg:h-65 lg:w-80 flex items-center p-4 shadow-md rounded-lg border border-gray-300'>
              <p className=''>The People’s General at a town hall meeting in Koluama, his hometown, engaging the community, addressing local concerns, and reaffirming his commitment to inclusive grassroots development and leadership.</p>
            </div>
          </div>

          <div className='flex max-md:flex-col items-center gap-4 lg:w-fit'>
            <img src="reu17.jpeg" alt="images" className='h-40 w-55 rounded-full' />
            <div className='h-50 lg:h-65 lg:w-80 flex items-center p-4 shadow-md rounded-lg border border-gray-300'>
              <p className=''>Pastor Reuben Wilson during his appointment by President Bola Ahmed Tinubu as a member of the Governing Council of the University of Uyo, marking a milestone in education leadership.</p>
            </div>
          </div>

          <div className='flex max-md:flex-col items-center gap-4 lg:w-fit'>
            <img src="reu20.jpeg" alt="images" className='h-40 w-55 rounded-full' />
            <div className='h-50 lg:h-65 lg:w-80 flex items-center p-4 shadow-md rounded-lg border border-gray-300'>
              <p className=''>The People’s General, Pastor Reuben Wilson, pictured with High Chief Oweizidei Thomas Ekpemupolo, also known as Tompolo, during one of his visits to Bayelsa State.</p>
            </div>
          </div>

        </motion.div>
      </section>
    </main>
  )
}

export default page
