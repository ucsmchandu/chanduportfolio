import React from "react";
import { motion } from "framer-motion";
import CPP from "../assets/c++.png";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import JAVASCRIPT from "../assets/js.png";
import REACT from "../assets/reactlogo.png";
import SQL from "../assets/sql.png";
import TAILWIND from "../assets/tailwind.png";
const Skills = () => {
  const skills = [
    { id: 1, img: CPP, name:"C++",bg:"bg-[#A594F9]",duration:1 },
    { id: 2, img: HTML,name:"HTML",bg:"bg-[#FFCDB2]" ,duration:1.1},
    { id: 3, img: CSS,name:"CSS",bg:"bg-[#E5D9F2]" ,duration:1.2},
    { id: 4, img: JAVASCRIPT,name:"JAVASCRIPT" ,bg:"bg-[#698474]",duration:1.3},
    { id: 5, img: REACT,name:"REACT",bg:"bg-[#F6F8D5]" ,duration:1},
    { id: 6, img: TAILWIND,name:"TAILWIND",bg:"bg-[#71BBB2]",duration:1.1},
    { id: 7, img: SQL,name:"SQL" ,bg:"bg-[#608BC1]",duration:1.2},
  ];
  return (
    <div id="skills" className=" bg-[#4CC9FE] min-h-screen relative ">
      <h1 className="text-5xl font-extrabold  flex justify-center p-4 text-[#FBF8EF] ">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-col-4 xl:grid-cols-5 justify-items-center gap-10 p-10 list-none">
        {skills.map((item) => (
          <li
          key={item.id}>
            <motion.div 
            animate={{
              y:["0%","-20%"]
            }}
            transition={{
              y:{
                duration:item.duration,
                repeat:Infinity,
                repeatType:"reverse",
                ease:"easeInOut"
              }
            }}
            className={`flex flex-col shadow-lg ${item.bg} rounded-4xl w-40 h-45 p-6 space-y-10 items-center`}>
              <div className="">
                <img src={item.img} alt="C++" className="h-16 w-16" />
              </div>
              <p className="text-center font-semibold">{item.name}</p>
            </motion.div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Skills;
