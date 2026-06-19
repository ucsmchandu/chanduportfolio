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
    { id: 1, img: CPP, name: "C++", duration: 1 },
    { id: 2, img: SQL, name: "SQL", duration: 1.2 },
    { id: 3, img: HTML, name: "HTML", duration: 1.1 },
    { id: 4, img: CSS, name: "CSS", duration: 1.2 },
    { id: 5, img: JAVASCRIPT, name: "JAVASCRIPT", duration: 1.3 },
    { id: 6, img: REACT, name: "REACT", duration: 1 },
    { id: 7, img: TAILWIND, name: "TAILWIND", duration: 1.1 },
    { id: 8, img: "https://res.cloudinary.com/dllvcgpsk/image/upload/v1751477289/database_rxuxth.png", name: "FIREBASE", duration: 1.2 },
    { id: 9, img: "https://res.cloudinary.com/dllvcgpsk/image/upload/v1755105859/node-js_wnkqsr.png", name: "NODE", duration: 1.1 },
    { id: 10, img: "https://res.cloudinary.com/dllvcgpsk/image/upload/v1755105881/express_hajjpf.png", name: "EXPRESS", duration: 1 },
    { id: 11, img: "https://res.cloudinary.com/dllvcgpsk/image/upload/v1755105870/mongo_jidfti.png", name: "MONGO DB", duration: 1.3 },
  ];

  return (
    <div id="skills" className="bg-[#4CC9FE] min-h-screen relative pt-20 pb-24 px-6">
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="text-center mb-14">
        <p
          className="text-xs font-semibold tracking-[.16em] uppercase text-white/60 mb-2"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          What I work with
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-none"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          My <span className="text-[#ffff2c]">Skills</span>
        </h1>
        <div className="w-12 h-1 rounded-full bg-[#ffff2c] mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-items-center gap-6 max-w-5xl mx-auto list-none">
        {skills.map((item) => (
          <li key={item.id} className="list-none">
            <motion.div
              animate={{ y: ["0%", "-16%"] }}
              transition={{
                y: {
                  duration: item.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center bg-white shadow-lg rounded-4xl w-36 h-36 sm:w-40 sm:h-40 p-5 gap-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <img src={item.img} alt={item.name} className="h-12 w-12 object-contain" />
              <p className="text-center text-xs font-semibold text-[#1E3E62] tracking-wide">
                {item.name}
              </p>
            </motion.div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Skills;