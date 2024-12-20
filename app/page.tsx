'use client'

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A web application that allows users to track their daily tasks and improve productivity.',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An e-commerce platform that provides a seamless shopping experience with various payment options.',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A mobile app that connects users with local service providers for home repairs and maintenance.',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A social media platform that focuses on connecting people with similar interests and hobbies.',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'A data visualization tool that helps businesses analyze their performance metrics effectively.',
  },
];

export default function Home() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      alert("ok");
      // Handle form submission logic here
    };
  
  return (
    <>
      <header className="bg-gray-800 text-white">
        <nav className="fixed w-full h-16 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md z-10 border-b border-slate-200/80 dark:border-gray-700/80">
          <div className="container mx-auto px-6 h-full flex items-center justify-between">
            <span className="text-2xl font-light tracking-wider text-stone-800 dark:text-white">
              SAI<span className="font-bold">.DEV</span>
            </span>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">Home</Link>
              <Link href="#about" className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">About</Link>
              <Link href="#projects" className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">Projects</Link>
              <Link href="#contact" className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">Contact</Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-track]:bg-transparent font-['Outfit']">
        
        {/* Hero Section */}
        <section id="home" className="pt-28 md:pt-36 px-6 bg-white dark:bg-gray-900">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-8">
              <h1 className="text-4xl md:text-6xl font-light tracking-tight text-stone-800 dark:text-white">
                Innovative <span className="font-bold">Software Engineer</span>
              </h1>
              <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed font-light">
                Building robust and efficient applications with cutting-edge technologies
              </p>
              <button className="bg-stone-900 text-white px-8 py-3 rounded-md hover:bg-stone-800 transition-colors duration-300 font-light">
                Contact Me
              </button>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-stone-900/10 rounded-full blur-2xl"></div>
                <Image
                  src="https://res.cloudinary.com/dpdejfl2k/image/upload/v1733838536/cvj7lmnskrx5sjbwi77p.jpg"
                  alt="Software Engineer profile"
                  width={200}
                  height={300}
                  className="rounded-full relative transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-3"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-12 text-stone-800 dark:text-white">
              Skills & <span className="font-bold text-teal-500">Technologies</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-stone-800 dark:text-white">Frontend</h3>
                <p className="text-stone-600 dark:text-stone-400 font-medium">HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-stone-800 dark:text-white">Backend</h3>
                <p className="text-stone-600 dark:text-stone-400 font-medium">Node.js, Express, MongoDB, MySQL, Firebase</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-stone-800 dark:text-white">Web Technologies</h3>
                <p className="text-stone-600 dark:text-stone-400 font-medium">WebSockets, REST APIs</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-stone-800 dark:text-white">Programming Languages</h3>
                <p className="text-stone-600 dark:text-stone-400 font-medium">Python, Java</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="pt-20 px-6 bg-white dark:bg-gray-900">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-4">
              <h1 className="text-4xl font-semibold">About Me</h1>
              <p className="text-lg leading-relaxed">
                I am a passionate software engineer with over 2 years of experience in both web development and software development. My expertise lies in creating robust applications that enhance user experience and drive business success.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in leveraging modern technologies and frameworks to build scalable web applications. My collaborative approach allows me to work effectively with teams to deliver innovative solutions that meet real-world challenges.
              </p>
              <p className="text-lg leading-relaxed">
                Continuous learning is at the core of my professional journey, and I am always eager to embrace new technologies and methodologies to stay ahead in this dynamic field.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://res.cloudinary.com/dpdejfl2k/image/upload/v1733838536/cvj7lmnskrx5sjbwi77p.jpg"
                alt="About Me"
                className="rounded-full"
                width={200}
                height={300}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="pt-20 px-6 bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map(project => (
                <div key={project.id} className="p-4 border rounded shadow">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-lg leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
          <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
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
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm py-8 border-t border-stone-200/80 dark:border-gray-700/80">
          <div className="container mx-auto px-6 text-center">
            <p className="text-stone-600 dark:text-stone-400 font-light">
              © 2024 K Sai Kumar. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}