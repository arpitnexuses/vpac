"use client"
import React from 'react';
import firsticon from "./firsticon.png"
import secondicon from "./secondicon.png"

function WhereExperience() {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center mb-6 md:mb-8">
          <span className="text-[#2D2D2D] text-[28px] md:text-[42px] font-bold">Where Fortune 500 </span>
          <span className="text-[#A05EB5] text-[28px] md:text-[42px]">Experience Meets Adaptive Execution</span>
        </h2>

        <p className="text-[#2D2D2D] text-[16px] md:text-[18px] text-center max-w-[900px] mx-auto leading-[1.5] mb-10 md:mb-16">
          Led by former Fortune 500 executives and industry veterans, VPAC specializes in accelerating growth across Startups, SMEs, and 
          Enterprises. Our experts integrate seamlessly with your teams to provide strategic direction and transformative solutions.
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1 bg-[#F8F9FF] rounded-lg p-6 md:p-8">
            <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-4 md:mb-6">
              <img src={firsticon} alt="Leadership Icon" className="w-full h-full"/>
            </div>
            <h3 className="text-[#2D2D2D] text-[20px] md:text-[22px] font-bold mb-3">
              100+ Years of Collective Leadership:
            </h3>
            <p className="text-[#4A4A4A] text-[15px] md:text-[16px] leading-[1.5]">
              A wealth of experience spanning various industries and global markets.
            </p>
          </div>

          <div className="flex-1 bg-[#F8F9FF] rounded-lg p-6 md:p-8">
            <div className="text-[#A05EB5] text-[48px] md:text-[60px] font-bold mb-3 md:mb-4">
              100%
            </div>
            <h3 className="text-[#2D2D2D] text-[20px] md:text-[22px] font-bold mb-3">
              Embedded, On-Demand CXOs:
            </h3>
            <p className="text-[#4A4A4A] text-[15px] md:text-[16px] leading-[1.5]">
              Immediate, high-impact leadership tailored to your organizational needs.
            </p>
          </div>

          <div className="flex-1 bg-[#F8F9FF] rounded-lg p-6 md:p-8">
            <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-4 md:mb-6">
              <img src={secondicon} alt="Growth Icon" className="w-full h-full"/>
            </div>
            <h3 className="text-[#2D2D2D] text-[20px] md:text-[22px] font-bold mb-3">
              Adaptive Growth Models:
            </h3>
            <p className="text-[#4A4A4A] text-[15px] md:text-[16px] leading-[1.5]">
              Strategic execution frameworks that evolve with your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhereExperience; 