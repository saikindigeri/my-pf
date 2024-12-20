'use client'

import React from 'react';
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: 'Galactic Explorer',
    description: 'A web application that allows users to explore the universe and learn about celestial bodies.',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Star Map',
    description: 'An interactive star map that helps users locate constellations and stars in the night sky.',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Space Mission Tracker',
    description: 'A platform to track ongoing space missions and their objectives.',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Astro Photography',
    description: 'A gallery showcasing stunning astrophotography from around the world.',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Cosmic Events Calendar',
    description: 'Stay updated with upcoming cosmic events like meteor showers and eclipses.',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'Galactic Explorer',
    description: 'A web application that allows users to explore the universe and learn about celestial bodies.',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    title: 'Star Map',
    description: 'An interactive star map that helps users locate constellations and stars in the night sky.',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    title: 'Space Mission Tracker',
    description: 'A platform to track ongoing space missions and their objectives.',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    title: 'Astro Photography',
    description: 'A gallery showcasing stunning astrophotography from around the world.',
    thumbnail: 'https://via.placeholder.com/150',
  },
];

const ProjectsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;

      const mouseX = e.clientX;
      const scrollX = (mouseX / window.innerWidth) * container.scrollWidth;

      container.scrollTo({
        left: scrollX,
        behavior: "smooth",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="projects"
      className="h-screen w-full overflow-hidden relative bg-gradient-to-r from-gray-900 to-black text-white"
    >
      
      <div
        ref={containerRef}
        className="h-full w-full flex items-center overflow-x-scroll scrollbar-hide"
      >
        <div className="flex space-x-8 px-6 py-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="flex-shrink-0 w-72 p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={150}
                height={150}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-md leading-relaxed text-gray-300 mt-2">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;