"use client"
import React, { useEffect, useRef, useState } from 'react';
import VectorLine from "./Vectorline.png";

function VPACDelivers() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#3F0056] py-24">
      <div className="max-w-[1400px] mx-auto text-center px-4">
        <div className="inline-block" ref={elementRef}>
          <h2 className="text-white text-[48px] leading-[1.2]">
            <span className="font-bold relative inline-block">
              VPAC Delivers
              <img 
                src={VectorLine} 
                alt="" 
                className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
                  isVisible ? 'animate-drawLine opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  width: '105%',
                  maskImage: 'linear-gradient(to right, black 50%, transparent 50%)',
                  maskSize: '200% 100%',
                  WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 50%)',
                  WebkitMaskSize: '200% 100%',
                }} 
                aria-hidden="true"
              />
            </span>
            <span className="ml-4 font-normal md:text-[48px] text-[32px]">Boardroom-to-operations Alignment</span>
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