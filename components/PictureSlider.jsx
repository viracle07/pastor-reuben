"use client"
import React, { useEffect, useState } from 'react'

const PictureSlider = () => {
    const pictures = [
        "/reu31.jpeg",
        "/reu18.jpeg",
        "/reu2.jpeg",
        "/reu17.jpeg",
        "/uniuyopic.jpeg",
        "/edu1.jpeg",]

    const [current, setCurrent] = useState(0);

    // Change image every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, [pictures.length]);

    return (
        <main className="relative w-full h-full overflow-hidden rounded-md shadow-md">
            {pictures.map((pics, index) => (
                <img
                    key={index}
                    src={pics}
                    alt=""
                    className={`absolute inset-0 lg:w-full h-full w-full  object-center transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            {/* Optional: Overlay text */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Optional: Dots indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {pictures.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === current ? "bg-yellow-400" : "bg-gray-400"
                            }`}
                    ></div>
                ))}
            </div>
        </main>
    )
}

export default PictureSlider
