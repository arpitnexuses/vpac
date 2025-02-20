"use client"
import React from 'react';
import VectorLine from "./VectorLine.png";

function VPACDelivers() {
  return (
    <section className="w-full bg-[#3F0056] py-24">
      <div className="max-w-[1400px] mx-auto text-center px-4">
        <div className="inline-block">
          <h2 className="text-white text-[48px] leading-[1.2]">
            <span className="font-bold relative inline-block">
              VPAC Delivers
              <img 
                src={VectorLine} 
                alt="" 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                style={{ width: '105%' }}
                aria-hidden="true"
              />
            </span>
            <span className="ml-4 font-normal">Boardroom-to-operations Alignment</span>
          </h2>
        </div>
        
        <p className="text-white/90 text-[20px] font-light max-w-[1000px] mx-auto leading-[1.5] mt-8">
          through on-demand executive leadership and cutting-edge technology enablers—empowering your 
          organization to achieve measurable outcomes in today's fast-paced business environment.
        </p>
      </div>
    </section>
  );
}

export default VPACDelivers; 