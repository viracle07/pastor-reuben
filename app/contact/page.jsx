"use client"
import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';
import { BiLoaderCircle } from "react-icons/bi";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { motion } from "framer-motion";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #D3D3D3',
    boxShadow: 24,
    p: 4,
};

const page = () => {

    // contactform
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")

    const [processing, setProcessing] = useState(false)

    const formattedDate = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    })

    // modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setProcessing(true)
            const contactForm = {
                name: name,
                email: email,
                phoneNumber: number,
                message: message,
                subject: subject,
                date: formattedDate

            }
            console.log(contactForm);
            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, "feedback"), contactForm);
            console.log("Document written with ID: ", docRef.id);
            handleOpen()

        } catch (error) {
            console.error("error submitting form", error);
        }
        finally { setProcessing(false) }

        setName("")
        setEmail("")
        setMessage("")
        setNumber("")
        setSubject("")

    }

    return (
        <main className='min-h-dvh bg-blue-900'>

            <div className="bg-[url('/bg3.jpg')] bg-no-repeat  bg-cover bg-center">
                <div className='bg-blue-100/94 pb-15'>

                    <div className='lg:px-10 px-4 py-15 flex items-center justify-center flex-col space-y-5'>
                        <h1 className=' w-fit font-bold text-3xl bg-gradient-to-r from-blue-800 via-blue-600 via-blue-400 to-blue-800 bg-clip-text text-transparent animate-bounce duration-300 transition-all '>Contact Us</h1>
                        <p className='text-center text-sm text-gray-800 font-semibold'>We value your interest in connecting with us. Whether you wish to learn more about Pastor Reuben Wilson’s initiatives, collaborate on community projects, or invite him for an engagement, our team is ready to hear from you.</p>

                    </div>


                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }} className='lg:px-10 px-4 flex lg:justify-center'>
                        <form onSubmit={handleSubmit} className='flex flex-col space-y-5 px-4 lg:px-10 pb-10 shadow-lg shadow-blue-300 rounded-md max-md:w-100'>
                            <h1 className='text-center font-semibold text-blue-900 text-lg underline'>Contact Form</h1>
                            <div className='flex flex-col lg:w-100'>
                                <label className='text-sm text-gray-800'>Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border border-blue-600 p-2 rounded-lg' />
                            </div>

                            <div className='flex flex-col lg:w-100 '>
                                <label className='text-sm text-gray-800' >Phone Number(Optional) </label>
                                <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} className='border border-blue-500 p-2 rounded-lg' />
                            </div>

                            <div className='flex flex-col lg:w-100 '>
                                <label className='text-sm text-gray-800'>Email Address</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='border border-blue-600 p-2 rounded-lg' />
                            </div>

                            <div className='flex flex-col lg:w-100 '>
                                <label className='text-sm text-gray-800'>Message</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='border border-blue-600 p-2 rounded-lg' ></textarea>
                            </div>

                            <div className='flex flex-col lg:w-100 '>
                                <label htmlFor="choice" className='text-sm text-gray-800'>Subject</label>
                                <input value={subject} onChange={(e) => setSubject(e.target.value)} list='choose' id='choice' className='border border-blue-600 p-2 rounded-lg ' />
                                <datalist id='choose'>
                                    <option value="Media"></option>
                                    <option value="Partnership"></option>
                                    <option value="Sponsor"></option>
                                    <option value="Donations"></option>
                                    <option value="General Enquiries"></option>
                                    <option value="Supports"></option>
                                </datalist>
                            </div>

                            <button type='submit' className='border flex items-center justify-center p-2 rounded-lg mt-3 text-white bg-blue-900 font-semibold cursor-pointer hover:bg-yellow-500 transition-all duration-200'>{
                                processing ? <BiLoaderCircle className='animate-spin text-center text-black text-lg' />
                                    : "Submit"}</button>

                        </form>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography className='font-semibold text-center' id="modal-modal-title" variant="h6" component="h2">
                                    Submitted
                                </Typography>
                                <Typography className='text-center' id="modal-modal-description" sx={{ mt: 2 }}>
                                    Thank you for contacting Us.
                                </Typography>
                            </Box>
                        </Modal>
                    </motion.div>

                </div>
            </div>



        </main>
    )
}

export default page
