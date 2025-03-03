"use client"
import React from 'react';
import aboutus1 from "./aboutus1.png";
import aboutus2 from "./aboutus2.png";
import aboutus3 from "./aboutus3.png";

function AboutUs() {
  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:gap-16 gap-8">
          {/* Left Content */}
          <div className="w-full md:max-w-[480px] pt-4 md:pt-16">
            <div className="border-b-2 border-gray-300 pb-4 md:pb-6 mb-6 md:mb-10 transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-[32px] md:text-[42px] leading-[1.2]">
                <span className="text-[#2D2D2D]">About </span>
                <span className="text-[#A05EB5]">Us</span>
              </h2>
            </div>
            
            <div className="space-y-6 md:space-y-8 transform transition-all duration-300 hover:translate-x-2">
              <p className="text-[#2D2D2D] text-[15px] md:text-[16px] leading-[1.6] opacity-90">
                VPAC accelerates growth for Startups, SMEs, and Enterprises by delivering boardroom-to-operations alignment through on-demand executive leadership and cutting-edge technology.
              </p>

              <p className="text-[#2D2D2D] text-[15px] md:text-[16px] leading-[1.6] opacity-90">
                We are architects for strategic growth in modern organizations, offering top-tier CXOs, VPs, and Directors on demand, We align marketing, revenue, technology, and operations in one cohesive strategy, With VPAC's support, innovative digital transformation will outpace competitors and drive sustainable results.
              </p>

              <button className="bg-[#A05EB5] text-white px-6 md:px-8 py-2 rounded-md text-[14px] md:text-[15px] mt-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-3 md:gap-5 mb-3 md:mb-5">
              <div className="transform transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-xl">
                <img 
                  src={aboutus1} 
                  alt="Team meeting"
                  className="w-full h-[180px] md:h-[260px] object-cover rounded-xl md:rounded-2xl"
                />
              </div>
              <div className="transform transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-xl">
                <img 
                  src={aboutus2} 
                  alt="Team collaboration"
                  className="w-full h-[180px] md:h-[260px] object-cover rounded-xl md:rounded-2xl"
                />
              </div>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img 
                src={aboutus3} 
                alt="Team celebration"
                className="w-full h-[200px] md:h-[300px] object-cover rounded-xl md:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs; 