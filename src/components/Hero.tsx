"use client"
import React from 'react';
import HeroImage from "./Hero1.png";

function Hero() {
  return (
    <section className="relative w-full min-h-[75vh] border-b-2 border-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={HeroImage} 
          alt="Business Meeting" 
          className="w-full h-full object-cover blur-[1.5px]"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent 
          w-full sm:w-[60%] lg:w-[40%]"></div>
      </div>

      {/* Content */}
      <div className="relative h-full py-8 sm:py-12">
        <div className="flex h-full">
          <div className="w-full lg:w-[60%] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:pl-24 space-y-6 sm:space-y-8">
            <div className="font-inter space-y-4 sm:space-y-6">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[82px] font-bold 
                leading-[1.3] sm:leading-[1.2] lg:leading-[1.1] tracking-tight">
                Strategic expertise<br />
                meets Agile Execution
              </h1>
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-light 
                leading-[1.6] sm:leading-[1.5] lg:leading-[1.4] tracking-wide 
                font-semibold max-w-[900px]">
                for Startups and Small to Medium Enterprises
              </h2>
              <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-[24px] font-light 
                leading-[1.8] sm:leading-[1.7] lg:leading-[1.6]">
                Architects for Strategic Growth in Modern Organizations
              </p>
              <button className="bg-[#0095E8] text-white text-sm sm:text-base md:text-lg lg:text-[18px] 
                px-6 sm:px-8 md:px-10 lg:px-12 
                py-2.5 sm:py-3 md:py-3.5 lg:py-4 
                rounded hover:bg-blue-600 transition-colors 
                w-full sm:w-auto 
                mt-4 sm:mt-6">
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