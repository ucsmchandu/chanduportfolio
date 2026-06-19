import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <div id="home" className='min-h-screen bg-[#4CC9FE] flex items-center justify-center pt-20 pb-16 px-6'>
        <div className='flex flex-col items-center text-center gap-0'>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18 }}
            className='flex flex-col items-center'
          >
            <p
              className='text-xs font-semibold tracking-[.16em] uppercase text-white/60 mb-5'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Hi there 👋
            </p>

            <h1
              className='text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-2'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              I'm Chandu
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className='text-2xl md:text-3xl font-semibold text-[#ffff2c] tracking-tight mb-6'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Full Stack Developer
            </motion.p>

            <div className='w-12 h-1 rounded-full bg-[#ffff2c] mb-8' />

            <p
              className='text-[15px] font-normal text-white/80 leading-relaxed max-w-md mb-10'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Crafting websites that tell your story is what I do best.
              <br />I believe in simplicity and clarity in design.
            </p>

            <Link to="#skills" smooth duration={500}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className='cursor-pointer inline-flex items-center gap-2 rounded-full px-7 py-3 text-[#1E3E62] font-semibold text-sm bg-white hover:shadow-md transition-shadow'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Explore my work <span>→</span>
              </motion.div>
            </Link>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default Homepage;