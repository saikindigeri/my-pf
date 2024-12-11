import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-track]:bg-transparent font-['Outfit']">
      {/* Navigation with enhanced glass effect */}
      <nav className="fixed w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md z-10 border-b border-slate-200/80 dark:border-gray-700/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-light tracking-wider text-stone-800 dark:text-white">SAI<span className="font-bold">.DEV</span></span>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">Home</a>
              <a href="#about" className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">About</a>
              <a href="#projects" className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
     <section id="home" className="pt-28 md:pt-36 px-6">
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
      width={300} // Increased size
      height={300} // Increased size
      className="rounded-full relative transition-transform duration-300 ease-in-out transform hover:scale-105" // Added animation classes
      priority
    />
  </div>
</div>

  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-center mb-16 text-stone-800 dark:text-white">Skills & <span className="font-bold">Technologies</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/80 dark:border-gray-700/80">
              <h3 className="text-lg font-bold text-stone-800 dark:text-white">Frontend</h3>
              <p className="text-stone-600 dark:text-stone-400 font-light">React, Next.js, Tailwind</p>
            </div>
            <div className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/80 dark:border-gray-700/80">
              <h3 className="text-lg font-bold text-stone-800 dark:text-white">Backend</h3>
              <p className="text-stone-600 dark:text-stone-400 font-light">Node.js, Express, MongoDB</p>
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
  );
}