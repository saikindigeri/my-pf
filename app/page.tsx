'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectsSection from "./projects/page";

const projects = [
  {
    id: 1,
    title: 'Galactic Explorer',
    description: 'A web application that allows users to explore the universe and learn about celestial bodies.',
    thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URL
  },
  {
    id: 2,
    title: 'Star Map',
    description: 'An interactive star map that helps users locate constellations and stars in the night sky.',
    thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URL
  },
  {
    id: 3,
    title: 'Space Mission Tracker',
    description: 'A platform to track ongoing space missions and their objectives.',
    thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URL
  },
  {
    id: 4,
    title: 'Astro Photography',
    description: 'A gallery showcasing stunning astrophotography from around the world.',
    thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URL
  },
  {
    id: 5,
    title: 'Cosmic Events Calendar',
    description: 'Stay updated with upcoming cosmic events like meteor showers and eclipses.',
    thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URL
  },{
    id: 6,
    title: 'Galactic Explorer',
    description: 'A web application that allows users to explore the universe and learn about celestial bodies.',
    thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URL
  },
  {
    id:7,
    title: 'Star Map',
    description: 'An interactive star map that helps users locate constellations and stars in the night sky.',
    thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URL
  },
  {
    id: 8,
    title: 'Space Mission Tracker',
    description: 'A platform to track ongoing space missions and their objectives.',
    thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URL
  },
  {
    id:9,
    title: 'Astro Photography',
    description: 'A gallery showcasing stunning astrophotography from around the world.',
    thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URL
  },
  
];

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent!");
    // Handle form submission logic here
  };

  return (
    <>
<header className="bg-gray-900/90 text-white">
  <nav className="fixed w-full h-16 backdrop-blur-md z-10 border-b border-gray-700 bg-gray-900">
    <div className="container mx-auto px-6 h-full flex items-center justify-between">
      <span className="text-2xl font-light tracking-wider">
        UNIVERSE<span className="font-bold">.EXPLORE</span>
      </span>
      <div className="hidden md:flex space-x-8">
        <Link href="#home" className="hover:text-gray-300 transition-colors duration-300">Home</Link>
        <Link href="#about" className="hover:text-gray-300 transition-colors duration-300">About</Link>
        <Link href="#projects" className="hover:text-gray-300 transition-colors duration-300">Projects</Link>
        <Link href="#contact" className="hover:text-gray-300 transition-colors duration-300">Contact</Link>
        <a href="/path/to/your/resume.pdf" download className="hover:text-gray-300 transition-colors duration-300">Download Resume</a>
      </div>
    </div>
  </nav>
</header>


      <div className="min-h-screen bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50"></div>
        
        {/* Hero Section */}
        <section id="home" className="pt-28 md:pt-36 px-6 relative z-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-8">
              <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white">
                Explore the <span className="font-bold">Universe</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Discover the wonders of the cosmos and embark on a journey through space and time.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-500 transition-colors duration-300 font-light">
                Start Your Journey
              </button>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dpdejfl2k/image/upload/v1733838536/cvj7lmnskrx5sjbwi77p.jpg"
                  alt="Universe Explorer"
                  width={200}
                  height={300}
                  className="rounded-full relative transition-transform duration-500 ease-in-out transform hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </section>





 <ProjectsSection/>



        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 relative z-10">
          <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-blue-500">Contact Us</h1>
            <form onSubmit={handleSubmit} className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 py-8 border-t border-gray-700">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400 font-light">
              © 2024 Universe Explore. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}