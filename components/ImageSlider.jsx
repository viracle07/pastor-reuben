"use client"
import React, { useEffect, useState } from 'react'

const ImageSlider = () => {
    const images = [
    "/reu3.jpeg",
    "/reu30.jpeg",
    "/reu13.jpeg",
    "/reu19.jpeg",
    "/reu23.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="relative lg:w-full w-full h-full  lg:h-full overflow-hidden rounded-md shadow-md">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute inset-0 lg:w-full w-full h-full lg:h-full  object-center transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Optional: Overlay text */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Optional: Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === current ? "bg-yellow-400" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </main>
  );
};

export default ImageSlider

