"use client"
import React from 'react'
import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";




const videos = [
  {
    title: "Award Recognitions: Honouring Leadership and Impact",
    src: "https://res.cloudinary.com/du5odjbs0/video/upload/v1769470665/docvid1_lsuvxm.mp4",
  },
  {
    title: "Chief Reuben commissioned palm kernel and oil factory",
    src: "https://res.cloudinary.com/du5odjbs0/video/upload/v1769470831/docvid2_xogk4u.mp4",
  },
  {
    title: "2025 Pastor Reuben foundation debate competition",
    src: "https://res.cloudinary.com/du5odjbs0/video/upload/v1769470757/docvid3_hgmlmq.mp4",
  },
  {
    title: "Pastor Reuben annual dancing and canoe competition",
    src: "https://res.cloudinary.com/du5odjbs0/video/upload/v1769470747/docvid4_ksnuzu.mp4",
  },
  {
    title: "Yuletide Food Items part 1",
    src: "https://res.cloudinary.com/du5odjbs0/video/upload/v1769470812/docvid11_uj1rds.mp4",
  },
  {
    title: "Yuletide Food Items part 2",
    src: "https://res.cloudinary.com/du5odjbs0/video/upload/v1769470522/docvid5_u6wmdu.mp4",
  },
  {
    title: "Birthday Outreach: Sharing Love, Hope, and Compassion",
    src: "/docvid6.mp4",
  },
  {
    title: "PRIFGLA Plateau Chapter Receives New APC Entrants",
    src: "https://res.cloudinary.com/du5odjbs0/video/upload/v1769470747/docvid6_d8snfd.mp4",
  },
  {
    title: "PRIFGLA Solidarity walk for President Tinubu 2025",
    src: "/docvid8.mp4",
  },
  {
    title: "AIT cover of the PRIFGLA 2025 Solidarity walk",
    src: "https://res.cloudinary.com/du5odjbs0/video/upload/v1769470684/docvid9_ctrhkt.mp4",
  },
  {
    title: "ARISE NEWS cover of the PRIFGLA 2025 Solidarity walk",
    src: "https://res.cloudinary.com/du5odjbs0/video/upload/v1769470709/docvid10_vkhtql.mp4",
  },

];

const page = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  return (
    <main className='min-h-dvh'>
      <div className="relative w-full min-h-dvh py-15 overflow-hidden">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/du5odjbs0/video/upload/v1769470442/bg1_nmfkjt.mp4"
          autoPlay
          loop
          muted
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0A2342]/90"></div>

        <div className='relative z-10 text-gray-300 lg:px-10 px-4  text-center font-semibold lg:text-lg text-md'>
          <h1>A documentary collection highlighting political engagement, humanitarian outreach, educational initiatives, scholarship programs, and major public events involving Pastor Reuben Wilson—focused on measurable impact, leadership, and community development.</h1>
        </div>

        <div className='relative z-10 border-b border-gray-300/25 shadow-md my-10 lg:mx-10 mx-4'></div>

        {/* Video Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} className="relative lg:px-10 px-4 max-md:space-y-10 z-10  lg:grid grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setActiveVideo(video)}
              className="cursor-pointer rounded-xl shadow-lg shadow-white/50 p-4 hover:scale-110 transition "
            >
              <div className="h-50 bg-[url('/thumbnail.jpeg')] bg-center bg-cover flex items-center justify-center rounded-lg">
                <FaCirclePlay className='text-red-600 text-5xl rounded-full shadow-xl' />
              </div>
              <h3 className="mt-3 text-sm text-center text-white font-semibold">{video.title}</h3>
            </div>
          ))}
        </motion.div>

        {/* Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-black rounded-xl w-full h-100 max-w-3xl relative p-4">
              {/* Close button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-2 right-2 text-white cursor-pointer hover:scale-120 transition text-xl"
              >
                <FaTimes />

              </button>

              {/* Video */}
              <video
                src={activeVideo.src}
                controls
                autoPlay
                className="w-full h-100 p-5 rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default page
