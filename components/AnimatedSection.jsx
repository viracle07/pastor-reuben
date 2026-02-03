import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';


const AnimatedSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }} className='bg-white/90 lg:py-15 py-10 lg:px-10 px-4 flex max-lg:flex-col lg:gap-15 gap-10 max-md:lg:justify-center md:items-center'>

            <Link href={"/prifgla"} className="relative bg-[url('/pic3.jpg')] h-100 md:w-100 w-auto bg-center bg-cover bg-no-repeat   shadow-mdtransform transition duration-300 ease-out hover:-translate-y-2 hover:-rotate-2 hover:scale-105">
                <div className='absolute bottom-0 bg-yellow-700/70 w-full h-40 lg:h-45 p-3'>
                    <span className='text-sm text-center font-semibold space-y-3 text-white'>
                        <p className='text-center  text-xl font-bold'>PRIFGLA</p>
                        <p>The Pastor Reuben Initiatives for Good Leadership and Accountability remains the top support group and political organization in the entire south-south Nigeria</p>
                    </span>
                </div>

            </Link>

            <Link href={"/humanitarian"} className="relative bg-[url('/reu15.jpeg')] h-100 md:w-100 w-auto bg-center bg-cover bg-no-repeat  shadow-md lg:mt-20 transform transition duration-300 ease-out hover:-translate-y-2 hover:-rotate-2 hover:scale-105 ">
                <div className='absolute bottom-0 bg-yellow-700/70 w-full h-40 lg:h-45 p-3'>
                    <span className='text-sm text-center font-semibold space-y-3 text-white'>
                        <p className='text-center text-xl font-bold'>HUMANITARIN SERVICES</p>
                        <p>Pastor Reuben demonstrates compassion through humanitarian services that uplift lives, restore hope, and support vulnerable individuals and communities.
                        </p>
                    </span>
                </div>

            </Link>

            <Link href={"/scholarships"} className="relative bg-[url('/pic7.png')] h-100 md:w-100 w-auto bg-center bg-cover bg-no-repeat  transform transition duration-300 ease-out hover:-translate-y-2 hover:-rotate-2 hover:scale-105">
                <div className='absolute bottom-0 bg-yellow-700/70 w-full h-40 lg:h-45 p-3'>
                    <span className='text-sm text-center font-semibold space-y-3 text-white'>
                        <p className='text-center text-xl font-bold'>EDUCATION</p>
                        <p>Chief Reuben Wilson is a testament that education is vital in nation building and human capital development</p>
                    </span>
                </div>
            </Link>
        </motion.section>
    )
}

export default AnimatedSection
