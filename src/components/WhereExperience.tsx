"use client"
import React from 'react';
import { motion } from 'framer-motion';
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
          <motion.div 
            className="flex-1 bg-[#F8F9FF] rounded-lg p-6 md:p-8 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#ffffff",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-4 md:mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
              whileHover={{ 
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
            >
              <img src={firsticon} alt="Leadership Icon" className="w-full h-full"/>
            </motion.div>
            <h3 className="text-[#2D2D2D] text-[20px] md:text-[22px] font-bold mb-3">
              100+ Years of Collective Leadership:
            </h3>
            <p className="text-[#4A4A4A] text-[15px] md:text-[16px] leading-[1.5]">
              A wealth of experience spanning various industries and global markets.
            </p>
          </motion.div>

          <motion.div 
            className="flex-1 bg-[#F8F9FF] rounded-lg p-6 md:p-8 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#ffffff",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="text-[#A05EB5] text-[48px] md:text-[60px] font-bold mb-3 md:mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.4
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              100%
            </motion.div>
            <h3 className="text-[#2D2D2D] text-[20px] md:text-[22px] font-bold mb-3">
              Embedded, On-Demand CXOs:
            </h3>
            <p className="text-[#4A4A4A] text-[15px] md:text-[16px] leading-[1.5]">
              Immediate, high-impact leadership tailored to your organizational needs.
            </p>
          </motion.div>

          <motion.div 
            className="flex-1 bg-[#F8F9FF] rounded-lg p-6 md:p-8 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#ffffff",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-4 md:mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.6
              }}
              whileHover={{ 
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
            >
              <img src={secondicon} alt="Growth Icon" className="w-full h-full"/>
            </motion.div>
            <h3 className="text-[#2D2D2D] text-[20px] md:text-[22px] font-bold mb-3">
              Adaptive Growth Models:
            </h3>
            <p className="text-[#4A4A4A] text-[15px] md:text-[16px] leading-[1.5]">
              Strategic execution frameworks that evolve with your business needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhereExperience; 