import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from "framer-motion"; 
import heroLogo from '../assets/bg-4.png';

const Homepage = () => {
  const text=`I'm Chandu,
  Full Stack Developer`;
  return (
   <>
    <div id="home" className='pt-20 md:pt-30 bg-[#4CC9FE]  text-[#FFFF]'>
      <div className='grid md:grid-cols-2 grid-cols-1 p-6 gap-6 justify-items-center'>
        <motion.div 
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className='relative md:left-10 z-25 sm:top-15 md:top-20 top-10 flex flex-col sm:items-center '
        >
          <p className='text-4xl sm:text-3xl font-mono relative '>Hi there 👋</p>
          <motion.p
          initial={{opacity:1}}
          animate="visible"
          className='text-3xl text-[#ffff2c] sm:text-4xl pt-4 font-extrabold'>
            {
              text.split("").map((char,index)=>(
                <motion.span
                key={index}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:index*0.1}}
                >
                  {char}
                </motion.span>
              ))
            }
          </motion.p>
          <p className='sm:text-lg pt-6 text-[#FFFF] text-md font-semibold text-wrap'>Crafting websites that tell your story is what I do best.<br /> I believe in simplicity and clarity in design.</p>
         
          <Link to="#skills" smooth duration={500} className=''>
          <motion.div whileHover={{scale:1.04}} whileTap={{scale:1.1}} className='relative top-10 cursor-pointer  rounded-4xl p-2 text-white font-serif px-3 w-fit bg-sky-900 hover:bg-sky-800'>
          Explore my work<span className="ml-2">→</span>
          </motion.div> </Link>

        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2.5 }}
          className='sm:max-w-md sm:min-w-md lg:max-w-lg lg:min-w-lg pb-10 relative ' 
        >
         <div className=''>
         <img src={heroLogo} alt="Hero Logo" className='w-full relative sm:top-10 md:-top-15 top-5' />
         </div>
        </motion.div>
      </div>
    </div>
   </>
  );
}

export default Homepage;