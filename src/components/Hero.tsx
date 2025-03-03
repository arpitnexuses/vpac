"use client"
import React from 'react';
import HeroVideo from "./herovideo.mp4";

function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[75vh] border-b-2 border-white">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay - lighter version */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full py-4 sm:py-8 sm:py-12 mt-[-20px]">
        <div className="flex h-full">
          <div className="w-full lg:w-[60%] flex flex-col justify-between sm:justify-center 
            px-4 sm:px-6 md:px-12 lg:pl-24 space-y-4 sm:space-y-6 sm:space-y-8 h-full">
            <div className="font-inter space-y-4 sm:space-y-4 sm:space-y-6 pt-8 sm:pt-12">
              <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-[82px] font-bold 
                leading-[1.1] sm:leading-[1.2] lg:leading-[1.1] tracking-tight
                drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]">
                Strategic expertise<br className="hidden sm:block" />
                meets Agile Execution
              </h1>
              <h2 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-[42px] 
                leading-[1.3] sm:leading-[1.5] lg:leading-[1.4] tracking-wide 
                font-semibold max-w-[900px]
                drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]">
                for Startups and Small to Medium Enterprises
              </h2>
              <p className="text-white text-xl sm:text-lg md:text-xl lg:text-[24px] font-light 
                leading-[1.4] sm:leading-[1.7] lg:leading-[1.6]
                drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]
                bg-black/30 backdrop-blur-sm inline-block px-4 py-2 rounded-lg">
                Architects for Strategic Growth in Modern Organizations
              </p>
            </div>
            <div className="pb-8 sm:pb-0">
              <button className="bg-[#0095E8] text-white text-xl sm:text-base md:text-lg lg:text-[18px] 
                px-6 sm:px-8 md:px-10 lg:px-12 
                py-4 sm:py-3 md:py-3.5 lg:py-4 
                rounded-lg hover:bg-blue-600 transition-colors 
                w-full sm:w-auto 
                shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all
                backdrop-blur-sm">
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