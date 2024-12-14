
import Link from 'next/link';
import React from 'react';

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="fixed w-full h-16 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md z-10 border-b border-slate-200/80 dark:border-gray-700/80">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <span className="text-2xl font-light tracking-wider text-stone-800 dark:text-white">
            SAI<span className="font-bold">.DEV</span>
          </span>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">Home</Link>
            <Link href="/about" className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">About</Link>
            <Link href="/projects" className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">Projects</Link>
            <Link href="/contact" className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors duration-300">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Header: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        {/* Other content goes here */}
      </div>
    </div>
  );
};

export default Header;