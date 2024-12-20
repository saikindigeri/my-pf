'use client'

import React from 'react';
import Header from '../header/page';

const About: React.FC = () => {
  return (
    <>

      <section id="about" className="pt-20 px-6 bg-white text-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center  justify-between">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-semibold">
              About Me
            </h1>
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
    </>
  );
};

export default About;
