"use client"
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";



const page = () => {
  return (
    <main className='min-h-dvh'>
      <section className="relative w-full h-100 overflow-hidden">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/du5odjbs0/video/upload/v1769470721/prifgla3_lyezza.mp4"
          autoPlay
          loop
          muted
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0A2342]/90"></div>

        {/* Content */}
        <div className="relative z-10  animate-[slideIn_.5s_ease-out] lg:px-10 px-4 pt-15">
          <div className='flex items-center justify-center'>
            <h1 className="lg:text-2xl text-xl font-bold text-yellow-500 mb-4 text-center">Pastor Reuben Initiative For Good Leadership And Accountability (PRIFGLA) </h1>
          </div>

        </div>
      </section>
      <div className='bg-[#0A2342]'>

        <div className='w-full border  border-yellow-400/25'></div>
      </div>

      <section className='bg-[#0A2342] lg:px-10 px-4 min-h-dvh py-15 space-y-15'>

        <div className=''>
          <span className='text-white space-y-7'>
            <p>
              The Pastor Reuben Initiative for Good Leadership and Accountability (PRIFGLA) is a dynamic political support and advocacy organization founded by Chief Pastor Reuben Clifford Wilson, a visionary leader, humanitarian, and champion of integrity and excellence in leadership. Rooted in the Niger Delta and South-South region of Nigeria, the initiative has grown over the years to establish a presence nationwide, reflecting a commitment to promoting ethical governance, transparency, and accountability across all levels of leadership.
            </p>

            <p>
              At its core, PRIFGLA seeks to cultivate a new generation of leaders who are principled, responsible, and driven by the interests of the people they serve. The organization operates on the belief that sustainable development, social progress, and national growth are built on the foundation of good leadership and accountable governance. By advocating for these values, PRIFGLA empowers citizens, strengthens democratic processes, and fosters a culture of civic responsibility.
            </p>
          </span>
        </div>

        <div className='flex max-lg:flex-col max-lg:space-y-10 items-center justify-between'>
          <div className='rounded-lg bg-[#0A2342] shadow-lg shadow-white/50 h-auto lg:w-150 lg:p-8 p-4 text-yellow-200 text-sm space-y-4 '>
            <p className=''>Under the leadership of Chief Pastor Reuben, PRIFGLA has become more than just a political support group—it is a movement aimed at transforming political engagement into positive, measurable impact. Through strategic advocacy, educational programs, community engagement, and capacity-building initiatives, the organization encourages active participation in governance while promoting ethical standards for public office holders.</p>

            <p className=''>
              The initiative is guided by the vision that Nigeria can achieve lasting progress when its leaders are transparent, responsive, and committed to serving the people above all else. PRIFGLA organizes programs, workshops, and forums that inspire young people and community members to take ownership of governance processes, understand their civic responsibilities, and hold leaders accountable. These programs often focus on leadership skills, ethics, community service, and policy awareness, equipping participants with the tools to effect change in their communities.
            </p>
          </div>

          <div>
            <img src="/reu21.jpeg" alt="image" className='h-auto lg:h-90 w-auto' />
          </div>

        </div>
      </section>
      <div className='bg-[#0A2342]'>

        <div className='w-full border border-yellow-400/25'></div>
      </div>

      <section className='lg:min-h-dvh max-lg:py-15 relative w-full overflow-hidden px-4 w-full'>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/du5odjbs0/video/upload/v1769470721/prifgla3_lyezza.mp4"
          autoPlay
          loop
          muted
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gray-300/90"></div>
        <motion.div initial={{ opacity: 0, scale: 0.90 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }} className='flex justify-center items-center w-full '>
          <div className='relative lg:h-[25rem] lg:w-[50rem] h-full w-100 lg:p-7 rounded-lg  shadow-lg  lg:mt-25 bg-gray-300' >
            <div className='lg:p-7 p-5 border-2 rounded-lg border-yellow-600 w-fit h-full space-y-5 text-sm'>
              <h1 className='lg:text-2xl text-xl font-bold text-center'>Executive Structure and State Chapters</h1>
              <p>
                The Pastor Reuben Wilson Initiative for Good Leadership and Accountability (PRIGLA) operates through a clearly defined executive structure and a growing network of state chapters across Nigeria. With its National Headquarters situated in Yenagoa, Bayelsa State, the Initiative coordinates its national vision, programs, and strategic engagements from a central hub that reflects its strong roots in the Niger Delta and South-South region.
                The national leadership of PRIGLA is made up of committed individuals entrusted with advancing the Initiative’s mission of promoting good governance, ethical leadership, and accountability. Notable amongst others are:
              </p>

              <ul className='space-y-3'>
                <li className='flex lg:items-center gap-1'> <GoDotFill />
                  National Director-General (DG): Spokesman Frank Eseimokumo</li>
                <li className='flex items-center gap-1'> <GoDotFill />National Secretary: Hon. Fortune Ogbomo</li>
                <li className='flex items-center gap-1'> <GoDotFill />National Women Leader: Pst. Ruth Iyala, JP</li>
              </ul>

            </div>
          </div>
        </motion.div>

      </section>

      <section className=' bg-black min-h-dvh lg:px-10 px-4 py-15 overflow-hidden'>
        <motion.div initial={{ opacity: 0, rotate: -5 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }} className='lg:flex max-lg:flex-col max-lg:space-y-10 items-center gap-15 text-white lg:text-center shadow-md shadow-white/50 p-5 pb-10 '>

          <div className='w-fit'>
            <p>
              In 2022, Chief Reuben Clifford Wilson took a bold step to strengthen political engagement and leadership in Nigeria by inaugurating PRIFGLA chapters in every South-South state. This strategic initiative was aimed at mobilizing and galvanizing support for President Bola Ahmed Tinubu, while simultaneously building a structured network of committed leaders and supporters across the region. The establishment of these chapters significantly enhanced the organization’s visibility, influence, and ideological reach, positioning PRIFGLA as a powerful political movement capable of shaping public opinion and driving meaningful change.            </p>
          </div>

          <video src="https://res.cloudinary.com/du5odjbs0/video/upload/v1769470741/prifgla_wqknwz.mp4"
            autoPlay
            loop
            muted
            className='lg:h-100 h-auto w-auto border-3 border-white' />

          <div className='w-fit'>
            <p>
              PRIFGLA is more than a political support group; it is a platform dedicated to nurturing credible, disciplined, and accountable leaders across Nigeria. Through its chapters, the organization has successfully influenced leadership development in states including Akwa Ibom, Rivers, Edo, Bayelsa, Cross River, and Delta State. By promoting ethical leadership, civic responsibility, and strategic engagement, PRIFGLA empowers members and communities to take active roles in governance, policy advocacy, and decision-making processes at both the grassroots and state levels.
            </p>
          </div>


        </motion.div>

      </section>

      <div className='lg:px-10 px-4 py-15 '>
        <p>
          Over the years, PRIFGLA has remained committed to building a culture of excellence, transparency, and civic engagement across Nigeria. By combining strategic political mobilization with leadership development, the organization continues to expand its reach and impact, serving as a model for political advocacy and nation-building. Through PRIFGLA, Chief Reuben Wilson has created a lasting legacy of responsible leadership, unity, and empowerment, ensuring that the next generation of leaders is equipped to drive positive transformation across the country.
        </p>
      </div>


    </main>
  )
}

export default page
