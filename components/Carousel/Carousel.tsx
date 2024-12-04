"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./Projects";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className="bg-black min-h-screen flex items-center justify-center">
      <div
        className="relative mx-auto max-w-5xl p-4 lg:p-8 flex items-center justify-center"
        style={{ height: "600px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <div className="flex flex-col-reverse lg:flex-row items-center gap-6 h-full">
              <div
                className="w-full lg:w-1/2 flex justify-center items-center"
                style={{ height: "350px" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover mb-6"
                />
              </div>

              <div
                className="w-full lg:w-1/2 bg-[rgb(29,29,29)] bg-opacity-100 p-8 rounded-xl text-white relative h-full flex flex-col justify-between"
                style={{ height: "300px" }}
              >
                <div className="absolute top-0 right-4 flex space-x-1">
                  <button
                    className="text-white bg-orange-500 p-2 rounded-[10px] w-10"
                    onClick={prevSlide}
                  >
                    &#10094;
                  </button>
                  <button
                    className="text-white bg-orange-500 p-2 rounded-[10px] w-10"
                    onClick={nextSlide}
                  >
                    &#10095;
                  </button>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4 mt-6">
                    {project.title}
                  </h4>
                  <p className="text-sm opacity-75 line-clamp-5 mb-6">
                    {project.description}
                  </p>
                </div>
                <Link href={project.link}>
                  <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
