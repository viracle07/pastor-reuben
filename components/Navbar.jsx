"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";





const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navItems = [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Documentaries", url: "documentaries/" },
    ]
    const mobileNav = [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Politics", url: "/politics" },
        { label: "Contact Us", url: "/contact" },
        { label: "Documentaries", url: "/documentaries" },
        { label: "Humanitarian Services", url: "/humanitarian" },
        { label: "Scholarship & Education", url: "/scholarships" },
    ]

    return (
        <main className='relative sticky top-0 z-50 flex items-center max-lg:justify-between lg:gap-[35rem] py-3 lg:px-8 px-4 bg-[#0A2342]'>
            <div className=''>
                <Link href={"#"} className='flex gap-1 items-center font-bold text-[#F8F9FA]'>
                    <Image src={"/pstreulogin.jpg"}
                        alt='logo'
                        width={800}
                        height={800}
                        className='h-10 w-10 rounded-full border-2 border-[#CFAE47]' />
                    <p className='text-sm animate-bounce'>Pastor Reuben Wilson</p>
                </Link>
            </div>

            <div className="lg:flex items-center gap-6 max-lg:hidden">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.url}
                        className="text-[#CFAE47] font-semibold hover:text-yellow-600 hover:scale-115 transition-all duration-150 text-lg"
                    >
                        {item.label}
                    </Link>
                ))}
                <span className='flex items-center text-[#CFAE47] font-semibold hover:text-yellow-600 transition-all duration-150 text-lg'>
                    <button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                    >
                        <span className='flex items-center'>
                            <p>More</p>
                            <IoMdArrowDropdown />
                        </span>
                    </button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            list: {
                                "aria-labelledby": "basic-button",
                            },
                            
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link className='text-sm text-blue-900 font-semibold' href={"/humanitarian"}>Humanitarian Services</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link className='text-sm text-blue-900 font-semibold' href={"/scholarships"}>Scholarships & Education</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link className='text-sm text-blue-900 font-semibold' href={"/politics"}>Politics</Link>
                        </MenuItem>
                    </Menu>


                </span>
            </div>

            <button onClick={() => setNavOpen(!navOpen)} className='lg:hidden text-2xl font-bold z-40'>
                {navOpen ? <IoCloseSharp className='lg:hidden text-3xl text-white' /> : <FaBars className='lg:hidden text-2xl text-white ' />}

            </button>

            {/* mobile Navbar */}
            <div className={`lg:hidden bg-[#0A2342] text-yellow-400 animate-[slideIn_.7s_ease-out] h-auto w-auto px-4 absolute top-full right-0 shadow-xl shadow-white/50   transition-all duration-500 overflow-hidden items-center flex flex-col gap-10 py-10 ${navOpen ? "opacity-100 translate-y-0" : "hidden -translate-x-10 pointer-events-none"} `}>
                {
                    mobileNav.map((navItems, index) => (

                        <Link onClick={() => setNavOpen(false)} key={index} href={navItems.url}
                            className='text-yelllow-400 animate-[slideIn_.7s_ease-out] hover:text-red-100 transition-all duration-150 text-lg hover:bg-green-800/25 px-2 rounded-lg' >{navItems.label} </Link>
                    ))
                }

            </div>




        </main>
    )
}

export default Navbar
