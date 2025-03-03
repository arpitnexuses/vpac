"use client"
import React from 'react';
import growthbg from "./growthbg.png";

function RedefiningGrowth() {
  return (
    <section className="w-full bg-[#2D0B5A] relative overflow-hidden py-20">
      <img 
        src={growthbg} 
        alt="background shapes"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-center text-[32px] md:text-[42px] text-white mb-8 md:mb-16">
          Redefining Growth & Transformation
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-6">
          {/* Card 1 */}
          <div className="w-full md:w-[320px] min-h-[200px] bg-[#20002A]/40 p-6 md:p-8 backdrop-blur-sm 
            border border-transparent hover:border-white/30 rounded-lg
            transition-all duration-300 ease-in-out
            hover:transform hover:scale-105 hover:bg-[#20002A]/60
            cursor-pointer group">
            <h3 className="text-white text-[20px] md:text-[24px] font-semibold mb-4
              group-hover:text-purple-300 transition-colors duration-300">
              Embedded Leadership
            </h3>
            <p className="text-[#B4B4B4] text-[14px] md:text-[15px] leading-[1.6]
              group-hover:text-white transition-colors duration-300">
              Top-tier CXOs, VPs, and Directors on demand—no long-term hiring commitments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-[320px] min-h-[200px] bg-[#20002A]/40 p-6 md:p-8 backdrop-blur-sm 
            border border-transparent hover:border-white/30 rounded-lg
            transition-all duration-300 ease-in-out
            hover:transform hover:scale-105 hover:bg-[#20002A]/60
            cursor-pointer group">
            <h3 className="text-white text-[20px] md:text-[24px] font-semibold mb-4
              group-hover:text-purple-300 transition-colors duration-300">
              Agile Operational Excellence
            </h3>
            <p className="text-[#B4B4B4] text-[14px] md:text-[15px] leading-[1.6]
              group-hover:text-white transition-colors duration-300">
              Rapidly deploy specialized teams to execute strategies with precision.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-[320px] min-h-[200px] bg-[#20002A]/40 p-6 md:p-8 backdrop-blur-sm 
            border border-transparent hover:border-white/30 rounded-lg
            transition-all duration-300 ease-in-out
            hover:transform hover:scale-105 hover:bg-[#20002A]/60
            cursor-pointer group">
            <h3 className="text-white text-[20px] md:text-[24px] font-semibold mb-4
              group-hover:text-purple-300 transition-colors duration-300">
              Innovative Digital Transformation
            </h3>
            <p className="text-[#B4B4B4] text-[14px] md:text-[15px] leading-[1.6]
              group-hover:text-white transition-colors duration-300">
              Unleash creativity with Generative AI: Empower innovation and drive growth through AI-generated content and design solutions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-full md:w-[320px] min-h-[200px] bg-[#20002A]/40 p-6 md:p-8 backdrop-blur-sm 
            border border-transparent hover:border-white/30 rounded-lg
            transition-all duration-300 ease-in-out
            hover:transform hover:scale-105 hover:bg-[#20002A]/60
            cursor-pointer group">
            <h3 className="text-white text-[20px] md:text-[24px] font-semibold mb-4
              group-hover:text-purple-300 transition-colors duration-300">
              Unified Growth Ecosystem
            </h3>
            <p className="text-[#B4B4B4] text-[14px] md:text-[15px] leading-[1.6]
              group-hover:text-white transition-colors duration-300">
              Align marketing, revenue, technology, and operations in one cohesive strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RedefiningGrowth; 