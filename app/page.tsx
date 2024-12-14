import Image from "next/image";
import Link from "next/link";
import Header from "./header/page";

export default function Home() {
  return (

    <>
    <Header/>
     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-track]:bg-transparent font-['Outfit']">
      {/* Navigation with enhanced glass effect */}
    

      {/* Hero Section */}
    <section id="home" className="pt-28 md:pt-36 px-6 ">
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
          width={200} // Increased size
          height={300} // Increased size
          className="rounded-full relative transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-3" // Enhanced animation classes
          priority
        />
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
     <section id="skills" className="py-24 px-6 bg-gray-100 dark:bg-gray-900">
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