"use client"
import React, { useEffect, useState } from 'react';
import secondgroup from "./secondgroup.png";
import thirdgroup from "./thirdgroup.png";
import fourgroup from "./fourgroup.png";
import fivegroup from "./fivegroup.png";
import sixgroup from "./sixgroup.png";
import firstcardasset from "./firstcardasset.png";

function TransformativeExecution() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className={`text-center mb-14 opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : ''}`}>
          <span className="text-[#2D2D2D] text-[42px] font-semibold">Transformative Execution & </span>
          <span className="text-[#A05EB5] text-[42px]">Sustainable Growth</span>
        </h2>
        
        <p className={`text-center text-[#2D2D2D] text-[18px] mb-14 opacity-0 transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : ''}`}>
          Below are the core solution areas that power our clients' success:
        </p>

        {/* First Row - 2 Cards */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className={`relative bg-[#E6F4FF] overflow-hidden transition-all duration-1000 delay-500 opacity-0 hover:scale-[1.02] hover:shadow-lg ${isVisible ? 'opacity-100' : ''}`}>
            <img 
              src={firstcardasset} 
              alt="Revenue Graph"
              className="w-full"
            />
          </div>
          
          <div className={`overflow-hidden transition-all duration-1000 delay-700 opacity-0 hover:scale-[1.02] hover:shadow-lg ${isVisible ? 'opacity-100' : ''}`}>
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
          <div className={`w-[325px] overflow-hidden bg-[#E6F4FF] h-full transition-all duration-1000 delay-900 opacity-0 hover:scale-[1.02] hover:shadow-lg ${isVisible ? 'opacity-100' : ''}`}>
            <img 
              src={thirdgroup}
              alt="Digital Transformation"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Middle card: 464px */}
          <div className={`w-[515px] overflow-hidden bg-[#A05EB5] transition-all duration-1000 delay-[1100ms] opacity-0 hover:scale-[1.02] hover:shadow-lg ${isVisible ? 'opacity-100' : ''}`}>
            <img 
              src={fourgroup}
              alt="Technology Leadership"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Last card: 348px */}
          <div className={`w-[325px] overflow-hidden bg-[#E6F4FF] h-full transition-all duration-1000 delay-[1300ms] opacity-0 hover:scale-[1.02] hover:shadow-lg ${isVisible ? 'opacity-100' : ''}`}>
            <img 
              src={fivegroup}
              alt="Operational Excellence"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Card */}
        <div className={`overflow-hidden transition-all duration-1000 delay-[1500ms] opacity-0 hover:scale-[1.02] hover:shadow-lg ${isVisible ? 'opacity-100' : ''}`}>
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