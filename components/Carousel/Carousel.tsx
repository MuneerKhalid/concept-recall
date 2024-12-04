"use client";

import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "TripSphere",
    description:
      "TripSphere is a travel recommendation app that simplifies trip planning by offering personalized suggestions from friends and peers. It features a peer-to-peer sharing system for exchanging tips and favorite destinations, all viewable on an integrated map.",
    image: "https://cdn.conceptrecall.com/CaseStudy/2024-10-28T08:24:36.343Z_file.png",
    link: "/case-study/tripsphere",
  },
  {
    title: "Pendume",
    description:
      "Pendume is a versatile transportation app designed to fulfill all your travel and logistics needs. Offering everything from reliable car rides to convenient towing and moving services, Pendume ensures an efficient experience.",
    image: "https://cdn.conceptrecall.com/CaseStudy/2024-08-19T12:01:51.962Z_file.png",
    link: "/case-study/pendume",
  },
  {
    title: "BloomKidz",
    description:
      "BloomKidz simplifies nursery management by allowing owners and educators to efficiently handle tasks like employee management, child progress tracking, and parent communication in one centralized location.",
    image: "https://cdn.conceptrecall.com/CaseStudy/2024-08-19T10:39:56.124Z_file.png",
    link: "/case-study/bloomkidz",
  },
  {
    title: "Zexal",
    description:
      "Zexal is a transportation app designed to revolutionize your travel experience. It allows users to easily book rides, track drivers in real-time, and enjoy reliable journeys.",
    image: "https://cdn.conceptrecall.com/CaseStudy/2024-08-15T15:13:55.857Z_file.png",
    link: "/case-study/zexal",
  },
];

const CaseStudyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [currentIndex, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-black py-10">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out w-full ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center justify-center lg:flex-row flex-col-reverse gap-6">
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg max-w-full object-contain"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-xl text-white">
                    <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                    <p className="text-sm opacity-75 line-clamp-5 mb-6">
                      {project.description}
                    </p>
                    <a href={project.link}>
                      <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition">
                        View Case Study
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
            onClick={nextSlide}
          >
            &#10095;
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentIndex ? "bg-orange-500" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCarousel;
