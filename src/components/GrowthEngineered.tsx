"use client"
import React from 'react';
import { motion } from 'framer-motion';
import firstcardimage from "./firstcardimage.png";
import secondcardimage from "./secondcardimage.png";
import thirdcardimage from "./thirdcardimage.png";

function GrowthEngineered() {
  // Different variants for each card
  const leftCardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const centerCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightCardVariants = {
    hidden: { 
      opacity: 0, 
      x: 100
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* For mobile - no animation */}
        <h2 className="text-center mb-8 md:mb-14 md:hidden">
          <span className="text-[#2D2D2D] text-[28px] md:text-[42px] font-semibold">Growth Engineered for </span>
          <span className="text-[#A05EB5] text-[28px] md:text-[42px]">Startups, SMEs & Enterprises</span>
        </h2>
        
        {/* For desktop - with animation */}
        <motion.h2 
          className="text-center mb-8 md:mb-14 hidden md:block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#2D2D2D] text-[28px] md:text-[42px] font-semibold">Growth Engineered for </span>
          <span className="text-[#A05EB5] text-[28px] md:text-[42px]">Startups, SMEs & Enterprises</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6">
          {/* Startups Card */}
          {/* Mobile version - no animation */}
          <div className="flex-1 group md:hidden">
            <div className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 
                          hover:shadow-xl relative overflow-hidden
                          before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-xl
                          hover:before:border-[#A05EB5] before:transition-all before:duration-300">
              <div className="relative rounded-xl overflow-hidden mb-4 h-[180px] md:h-[220px]">
                <img 
                  src={firstcardimage} 
                  alt="Startups" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#A05EB5]/10 group-hover:bg-[#A05EB5]/20 transition-all duration-300"></div>
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
          </div>
          
          {/* Desktop version - with animation */}
          <motion.div 
            className="flex-1 group hidden md:block"
            variants={leftCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 
                          hover:shadow-xl relative overflow-hidden
                          before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-xl
                          hover:before:border-[#A05EB5] before:transition-all before:duration-300">
              <div className="relative rounded-xl overflow-hidden mb-4 h-[180px] md:h-[220px]">
                <img 
                  src={firstcardimage} 
                  alt="Startups" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#A05EB5]/10 group-hover:bg-[#A05EB5]/20 transition-all duration-300"></div>
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
          </motion.div>

          {/* SMEs Card */}
          {/* Mobile version - no animation */}
          <div className="flex-1 group md:hidden">
            <div className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 
                          hover:shadow-xl relative overflow-hidden
                          before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-xl
                          hover:before:border-[#A05EB5] before:transition-all before:duration-300">
              <div className="relative rounded-xl overflow-hidden mb-4 h-[180px] md:h-[220px]">
                <img 
                  src={secondcardimage} 
                  alt="SMEs" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#A05EB5]/10 group-hover:bg-[#A05EB5]/20 transition-all duration-300"></div>
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
          </div>
          
          {/* Desktop version - with animation */}
          <motion.div 
            className="flex-1 group hidden md:block"
            variants={centerCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 
                          hover:shadow-xl relative overflow-hidden
                          before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-xl
                          hover:before:border-[#A05EB5] before:transition-all before:duration-300">
              <div className="relative rounded-xl overflow-hidden mb-4 h-[180px] md:h-[220px]">
                <img 
                  src={secondcardimage} 
                  alt="SMEs" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#A05EB5]/10 group-hover:bg-[#A05EB5]/20 transition-all duration-300"></div>
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
          </motion.div>

          {/* Enterprises Card */}
          {/* Mobile version - no animation */}
          <div className="flex-1 group md:hidden">
            <div className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 
                          hover:shadow-xl relative overflow-hidden
                          before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-xl
                          hover:before:border-[#A05EB5] before:transition-all before:duration-300">
              <div className="relative rounded-xl overflow-hidden mb-4 h-[180px] md:h-[220px]">
                <img 
                  src={thirdcardimage} 
                  alt="Enterprises" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#A05EB5]/10 group-hover:bg-[#A05EB5]/20 transition-all duration-300"></div>
              </div>
              <h3 className="text-[#2D2D2D] text-[20px] md:text-[24px] font-bold mb-4 text-center">
                Enterprises
              </h3>
              <ul className="space-y-2.5">
                <ListItem text="Executive Reinforcement" highlight="for large-scale transformations." />
                <ListItem text="Operational Mastery" highlight="translating boardroom strategies into measurable success." />
                <ListItem text="Scalable Cost Optimization" highlight="through flexible leadership augmentation." />
                <ListItem text="Advanced Digital Leadership" highlight="modernizing legacy systems with AI and next-gen tech." />
              </ul>
            </div>
          </div>
          
          {/* Desktop version - with animation */}
          <motion.div 
            className="flex-1 group hidden md:block"
            variants={rightCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 
                          hover:shadow-xl relative overflow-hidden
                          before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-xl
                          hover:before:border-[#A05EB5] before:transition-all before:duration-300">
              <div className="relative rounded-xl overflow-hidden mb-4 h-[180px] md:h-[220px]">
                <img 
                  src={thirdcardimage} 
                  alt="Enterprises" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#A05EB5]/10 group-hover:bg-[#A05EB5]/20 transition-all duration-300"></div>
              </div>
              <h3 className="text-[#2D2D2D] text-[20px] md:text-[24px] font-bold mb-4 text-center">
                Enterprises
              </h3>
              <ul className="space-y-2.5">
                <ListItem text="Executive Reinforcement" highlight="for large-scale transformations." />
                <ListItem text="Operational Mastery" highlight="translating boardroom strategies into measurable success." />
                <ListItem text="Scalable Cost Optimization" highlight="through flexible leadership augmentation." />
                <ListItem text="Advanced Digital Leadership" highlight="modernizing legacy systems with AI and next-gen tech." />
              </ul>
            </div>
          </motion.div>
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