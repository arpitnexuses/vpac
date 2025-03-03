"use client"
import React from 'react';
import secondgroup from "./secondgroup.png";
import thirdgroup from "./thirdgroup.png";
import fourgroup from "./fourgroup.png";
import fivegroup from "./fivegroup.png";
import sixgroup from "./sixgroup.png";
import firstcardasset from "./firstcardasset.png";

function TransformativeExecution() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center mb-14">
          <span className="text-[#2D2D2D] text-[42px] font-semibold">Transformative Execution & </span>
          <span className="text-[#A05EB5] text-[42px]">Sustainable Growth</span>
        </h2>
        
        <p className="text-center text-[#2D2D2D] text-[18px] mb-14">
          Below are the core solution areas that power our clients' success:
        </p>

        {/* First Row - 2 Cards */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="relative bg-[#E6F4FF] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <img 
              src={firstcardasset} 
              alt="Revenue Graph"
              className="w-full"
            />
          </div>
          
          <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <img 
              src={secondgroup}
              alt="Strategic Partnerships"
              className="w-full"
            />
          </div>
        </div>

        {/* Second Row - 3 Cards */}
        <div className="flex gap-4 mb-6">
          {/* First card: 348px */}
          <div className="w-[325px] rounded-2xl overflow-hidden bg-[#E6F4FF] h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <img 
              src={thirdgroup}
              alt="Digital Transformation"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Middle card: 464px */}
          <div className="w-[515px] rounded-2xl overflow-hidden bg-[#A05EB5] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <img 
              src={fourgroup}
              alt="Technology Leadership"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Last card: 348px */}
          <div className="w-[325px] rounded-2xl overflow-hidden bg-[#E6F4FF] h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <img 
              src={fivegroup}
              alt="Operational Excellence"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Card */}
        <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img 
            src={sixgroup}
            alt="Leadership Development"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default TransformativeExecution; 