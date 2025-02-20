"use client"
import React from 'react';
import HeroImage from "./Hero1.png";

function Hero() {
  return (
    <section className="relative w-full h-[75vh] border-b-2 border-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={HeroImage} 
          alt="Business Meeting" 
          className="w-full h-full object-cover blur-[1.5px]"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent w-[40%] md:w-[40%] w-full"></div>
      </div>

      {/* Content */}
      <div className="relative h-full">
        <div className="flex h-full">
          <div className="w-full md:w-[60%] flex flex-col justify-center px-6 md:pl-24">
            <div className="font-inter">
              <h1 className="text-white text-4xl md:text-[82px] font-bold leading-[1.1] tracking-tight mb-4">
                Strategic expertise<br />
                meets Agile Execution
              </h1>
              <h2 className="text-white text-2xl md:text-[42px] font-light leading-[1.4] tracking-wide mb-3 font-semibold max-w-[900px]">
                for Startups and Small to Medium Enterprises
              </h2>
              <p className="text-white/90 text-lg md:text-[24px] font-light mb-8">
                Architects for Strategic Growth in Modern Organizations
              </p>
              <button className="bg-[#0095E8] text-white text-base md:text-[18px] px-8 md:px-12 py-3 md:py-4 rounded hover:bg-blue-600 transition-colors w-full md:w-auto">
                Book Your Free Discovery Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 