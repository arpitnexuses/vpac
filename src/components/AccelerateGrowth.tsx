"use client"
import React from 'react';
import accgrowth from "./accgrowth.png";

function AccelerateGrowth() {
  return (
    <section className="hidden md:block w-full px-2 py-0 bg-white">
      <div className="max-w-[1200px] mx-auto bg-white rounded-[32px] overflow-hidden relative">
        <div className="relative px-16 py-20">
          {/* Background Image */}
          <div className="absolute top-0 right-0 h-full">
            <img 
              src={accgrowth} 
              alt="Business professional"
              className="h-full w-auto object-contain object-right"
            />
            {/* Decorative lines */}
            {/* <div className="absolute inset-0 w-full h-full">
              {[...Array(15)].map((_, i) => (
                <React.Fragment key={i}>
                  <div 
                    className="absolute w-6 h-[2px] bg-white/20 -rotate-45"
                    style={{
                      top: `${i * 25}px`,
                      right: `${i * 25}px`,
                    }}
                  />
                  <div 
                    className="absolute w-6 h-[2px] bg-white/20 rotate-45"
                    style={{
                      top: `${i * 25}px`,
                      right: `${200 + i * 25}px`,
                    }}
                  />
                </React.Fragment>
              ))}
            </div> */}
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[520px]">
            <h2 className="text-white text-[48px] leading-[1.2] font-light mb-6 pt-20">
              Ready To Accelerate
              <br />
              Your Growth?
            </h2>
            
            <p className="text-white/90 text-[17px] leading-[1.6] mb-10">
              Unlock the full potential of your business with a complimentary Discovery Call. Connect with our seasoned experts to explore tailored solutions that drive transformative, measurable growth—risk-free.
            </p>

            <button className="bg-white text-[#A05EB5] px-10 py-4 rounded-md text-[15px] font-medium tracking-wide">
              BOOK YOUR FREE DISCOVERY CALL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccelerateGrowth; 