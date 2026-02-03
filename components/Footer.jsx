import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {

    const products = [
        { label: "Documentaries", url: "/documentaries" },
        { label: "Scholarship and Education", url: "/scholarships" },
        { label: "Politics", url: "/politics" },
        { label: "About Us", url: "/about" },
        { label: "Contact Us", url: "/contact" },
        { label: "Admin", url: "/admin" },

    ]
    return (
        <main className=' bg-[#0A2342] py-5  '>
            <section className='flex max-lg:flex-col max-lg:items-center justify-between lg:px-8 px-4 py-5 pb-20 bg-[#0A2342] text-white max-lg:space-y-10'>

                <div className='lg:space-y-15 max-lg:flexcol max-lg:gap-7 space-y-5'>
                    <div className=''>
                        <Link href={"#"} className='flex gap-1 items-center font-bold text-[#F8F9FA]'>
                            <Image src={"/pstreulogin.jpg"}
                                alt='logo'
                                width={800}
                                height={800}
                                className='h-10 w-10 rounded-full border-2 border-[#CFAE47]' />
                            <p>Pastor Reuben Wilson</p>
                        </Link>
                    </div>

                    <Link href={"/prifgla"}>
                        <div className='border border-white/50 w-fit rounded-full px-6 py-2 bg-blue-500/50 hover:bg-yellow-500 transition-all duration-300 hover:scale-110'>
                            <p>See more about PRIFGLA</p>
                        </div>
                    </Link>

                </div>

                <div className='text-sm grid grid-cols-2 gap-20'>
                    <div className='space-y-5'>
                        <p className='text-lg font-bold'>More About Us</p>
                        <div className='flex flex-col space-y-3'>
                            {products.map((items, index) => (
                                <Link key={index} href={items.url} className='hover:text-yellow-600 hover:underline hover:scale-110 transition-all duration-300'>{items.label} </Link>)
                            )}
                        </div>
                    </div>

                    <div className='space-y-10'>
                        <div className='text-xs flex flex-col space-y-2'>
                            <p>Our Social Media page</p>

                            <div className='flex gap-3 items-center text-2xl max-md:justify-between'>
                                <a href="https://www.facebook.com/profile.php?id=100083304044206"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='cursor-pointer hover:scale-120 transition'>
                                    <FaFacebook />
                                </a>
                                <FaInstagram />
                                <FaXTwitter />
                                <FaYoutube />
                            </div>
                        </div>


                        <div className='text-xs'>
                            <p>&copy; 2026 Pastor Reuben Wilson. All rights reserved.</p>
                        </div>

                    </div>
                </div>
            </section>
            <div className='flex items-center justify-center text-white text-sm  p-2'>
                <a href="https://www.fiverr.com/s/XLAdNx0"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='border border-white/50 w-fit px-4 py-3 bg-gray-300/10 gap-2 flex items-center rounded-lg shadow-lg shadow-white/25'>

                    <p>crafted by</p>
                    <p className='font-bold text-yellow-500'>veeracle</p>
                </a>
            </div>


        </main>
    )
}

export default Footer
