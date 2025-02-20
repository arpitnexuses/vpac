"use client"
import React from 'react';
import firstcardimage from "./firstcardimage.png";
import secondcardimage from "./secondcardimage.png";
import thirdcardimage from "./thirdcardimage.png";

function GrowthEngineered() {
  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-center mb-8 md:mb-14">
          <span className="text-[#2D2D2D] text-[28px] md:text-[42px] font-semibold">Growth Engineered for </span>
          <span className="text-[#A05EB5] text-[28px] md:text-[42px]">Startups, SMEs & Enterprises</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6">
          {/* Startups Card */}
          <div className="flex-1">
            <div className="relative rounded-xl overflow-hidden mb-4 h-[180px] md:h-[220px]">
              <img 
                src={firstcardimage} 
                alt="Startups" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[white]/10"></div>
            </div>
            <h3 className="text-[#2D2D2D] text-[20px] md:text-[24px] font-bold mb-4 text-center">
              Startups
            </h3>
            <ul className="space-y-2.5">
              <ListItem text="On-Demand CXOs" highlight="to jumpstart your strategic foundation." />
              <ListItem text="Lean Growth" highlight="ensures cost-effective leadership for evolving needs." />
              <ListItem text="Tech Integration & AI" highlight="embedded from day one to foster innovation." />
              <ListItem text="Agile Execution" highlight="that rapidly converts ideas into market-ready solutions." />
            </ul>
          </div>

          {/* SMEs Card */}
          <div className="flex-1">
            <div className="relative rounded-xl overflow-hidden mb-4 h-[180px] md:h-[220px]">
              <img 
                src={secondcardimage} 
                alt="SMEs" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[white]/10"></div>
            </div>
            <h3 className="text-[#2D2D2D] text-[20px] md:text-[24px] font-bold mb-4 text-center">
              SMEs
            </h3>
            <ul className="space-y-2.5">
              <ListItem text="Leadership Amplification" highlight="with embedded executive expertise." />
              <ListItem text="Seamless Collaboration" highlight="across tech, marketing, and sales." />
              <ListItem text="Execution Excellence" highlight="via on-demand specialist teams for strategic initiatives." />
              <ListItem text="AI-Driven Digital Transformation" highlight="to modernize processes and remain competitive." />
            </ul>
          </div>

          {/* Enterprises Card */}
          <div className="flex-1">
            <div className="relative rounded-xl overflow-hidden mb-4 h-[180px] md:h-[220px]">
              <img 
                src={thirdcardimage} 
                alt="Enterprises" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[white]/10"></div>
            </div>
            <h3 className="text-[#2D2D2D] text-[20px] md:text-[24px] font-bold mb-4 text-center">
              SMEs
            </h3>
            <ul className="space-y-2.5">
              <ListItem text="Executive Reinforcement" highlight="for large-scale transformations." />
              <ListItem text="Operational Mastery" highlight="translating boardroom strategies into measurable success." />
              <ListItem text="Scalable Cost Optimization" highlight="through flexible leadership augmentation." />
              <ListItem text="Advanced Digital Leadership" highlight="modernizing legacy systems with AI and next-gen tech." />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ListItem({ text, highlight }: { text: string, highlight: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <div className="mt-[8px]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#9747FF]" />
      </div>
      <p className="text-[#2D2D2D] text-[14px] md:text-[15px] leading-[1.5]">
        <span className="font-semibold">{text}</span> {highlight}
      </p>
    </li>
  );
}

export default GrowthEngineered; 