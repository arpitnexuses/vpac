"use client"
import React from 'react';
import powerhouse from "./powerhouse.png";

function PowerhouseTeam() {
  return (
    <section className="w-full bg-[#F5F7FA] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-center mb-4 md:mb-6">
          <span className="text-[#2D2D2D] text-[32px] md:text-[42px] font-normal">The </span>
          <span className="text-[#A05EB5] text-[32px] md:text-[42px] font-normal">Powerhouse Behind VPAC</span>
        </h2>

        <p className="text-center text-[#2D2D2D] text-[14px] md:text-[16px] leading-[1.6] max-w-[900px] mx-auto mb-12 md:mb-20 opacity-80">
          VPAC's core strength lies in its collective of former CXOs, VPs, and Directors from global enterprises. Drawing on decades of proven success in strategic decision-making, operational excellence, and digital innovation, our team delivers world-class guidance at every turn.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="bg-white rounded-md border-2 border-[#A05EB5] overflow-hidden">
              <div className="w-full aspect-square bg-[#F5F5F5] flex items-center justify-center">
                <div className="w-24 md:w-32 h-24 md:h-32">
                  <img 
                    src={powerhouse} 
                    alt="Team member"
                    className="w-full h-full object-contain opacity-40"
                  />
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-[#2D2D2D] text-[18px] md:text-[22px] font-medium mb-1">
                  Lorem Ipsum
                </h3>
                <p className="text-[#666666] text-[14px] md:text-[15px]">
                  Lorem Ipsum
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PowerhouseTeam; 