"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import manuind from "./manuind.png";
import pharmaind from "./pharmaind.png";
import retailind from "./retailind.png";

function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: manuind,
      title: "Manufacturing",
      description: "Drive efficiency and reduce costs with agile processes and lean design principles."
    },
    {
      icon: pharmaind,
      title: "Pharma",
      description: "Navigate regulatory hurdles and accelerate product development with strategic oversight."
    },
    {
      icon: retailind,
      title: "Retail",
      description: "Optimize customer experiences and drive sales with data-driven digital transformation."
    }
  ];

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center mb-5">
          <span className="text-[#A05EB5] text-[42px] font-normal">Industries </span>
          <span className="text-[#2D2D2D] text-[42px] font-normal">We Serve</span>
        </h2>
        
        <p className="text-center text-[#2D2D2D] text-[18px] mb-16 opacity-80">
          Transforming Industries, Driving Excellence
        </p>

        <div className="relative" ref={containerRef}>
          <motion.div 
            className="flex gap-8"
            animate={{
              x: [-10, -1200, -10],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {[...industries, ...industries, ...industries].map((industry, index) => (
              <div 
                key={index} 
                className="min-w-[380px] bg-white rounded-[16px] border border-[#A05EB5] p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-[#F9F5FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <img 
                      src={industry.icon} 
                      alt={industry.title}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#2D2D2D] text-[20px] font-medium">
                      {industry.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[#666666] text-[14px] leading-[1.4] pl-[56px]">
                  {industry.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Industries; 