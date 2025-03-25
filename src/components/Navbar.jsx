import React, { useState } from "react";
import {motion} from "framer-motion";
import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [present, setPresent] = useState("home");
  const [hidden,setHidden]=useState(false);
  useEffect(() => {
    let previousScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > previousScrollY && currentScrollY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // for medium devices
    <>
      <motion.nav
      variants={{
        visible:{y:0},
        hidden:{y:-100}
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{duration: 0.5,ease:"easeInOut"}}
      className=" p-6 bg-[#15b1f4] text-[#FFFFFF] shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-extrabold">
              <Link to="#home" smooth={true} duration={500}>
                <img src={logo} alt="UCSM" className="h-9 w-36" />
              </Link>
            </h1>
          </div>
          {/* computer */}
          <div className=" hidden sm:flex">
            <ul className=" flex space-x-5 text-sm ">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPresent("home")}
              >
                <Link to="#home" smooth={true} duration={500} className="cursor-pointer">
                  <li
                    className={`rounded-lg cursor-pointer p-2 text-[#FFFFFF] hover:bg-[#2A8BB0] transition-all duration-400 ease-in-out ${
                      present == "home" ? " bg-[#E55B50]" : "bg-[#4CC9FE]"
                    }`}
                  >
                    Home
                  </li>
                </Link>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPresent("skills")}
              >
                <Link to="#skills" smooth={true} duration={500} className="cursor-pointer">
                  <li
                    className={`rounded-lg cursor-pointer p-2 text-[#FFFFFF] hover:bg-[#2A8BB0] transition-all duration-400 ease-in-out ${
                      present == "skills" ? " bg-[#E55B50]" : "bg-[#4CC9FE]"
                    }`}
                  >
                    Skills
                  </li>
                </Link>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPresent("projects")}
              >
                <Link to="#projects" smooth={true} duration={500} className="cursor-pointer">
                  {" "}
                  <li
                    className={`rounded-lg cursor-pointer p-2 text-[#FFFFFF] hover:bg-[#2A8BB0] transition-all duration-400 ease-in-out ${
                      present == "projects" ? " bg-[#E55B50]" : "bg-[#4CC9FE]"
                    }`}
                  >
                    Projects
                  </li>
                </Link>
              </motion.button>

              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                  <li
                    className={`rounded-lg cursor-pointer p-2 text-[#FFFFFF] hover:bg-[#2A8BB0] transition-all duration-400 ease-in-out ${
                      present == "resume" ? " bg-[#E55B50]" : "bg-[#4CC9FE]"
                    }`}
                  >
                   <a href="/portfolio-dox.txt" download="sample.txt" >📥 Download Resume</a>
                  </li>
              </motion.button> */}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPresent("contact")}
              >
                <Link to="#contact" smooth={true} duration={500} className="cursor-pointer">
                  {" "}
                  <li
                    className={`rounded-lg cursor-pointer p-2 text-[#FFFFFF] hover:bg-[#2A8BB0] transition-all duration-400 ease-in-out ${
                      present == "contact" ? " bg-[#E55B50]" : "bg-[#4CC9FE]"
                    }`}
                  >
                    Contact
                  </li>
                </Link>
              </motion.button>
            </ul>
          </div>
          <button
            className="flex sm:hidden border p-1 rounded-md cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img src={close} alt="Close" className="h-6" />
            ) : (
              <img src={menu} alt="Menu" className="h-6" />
            )}
          </button>
        </div>
      </motion.nav>
      {/* this is for mobile */}
      <div
        className={`flex sm:hidden fixed top-20 left-0 z-50 h-full rounded-r-lg w-64 bg-[#1A1A2E] text-white shadow-lg transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="p-6 space-y-4 w-full">
          <li
            onClick={() => {
              setPresent("/");
            }}
          >
            <Link
              to="#home" smooth={true} duration={500}
              className={`block p-2 hover:bg-gray-700 rounded ${
                present == "/" ? "bg-gray-800" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>

          <li
            onClick={() => {
              setPresent("skills");
            }}
          >
            <Link
              to="#skills"  smooth={true} duration={500}
              className={`block p-2 hover:bg-gray-700 rounded ${
                present == "skills" ? "bg-gray-800" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li
            onClick={() => {
              setPresent("projects");
            }}
          >
            <Link
              to="#projects"  smooth={true} duration={500}
              className={`block p-2 hover:bg-gray-700 rounded ${
                present == "projects" ? "bg-gray-800" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
         
          {/* <li
            onClick={() => {
              setPresent("resume");
            }}
          >
            <a
              className={`block p-2 hover:bg-gray-700 rounded ${
                present == "resume" ? "bg-gray-800" : ""
              }`}
             href="/portfolio-dox.txt" download="sample.txt"
            >
              📥 Download Resume
            </a>
          </li> */}
          <li
            onClick={() => {
              setPresent("contact");
            }}
          >
            <Link
              to="#contact"  smooth={true} duration={500}
              className={`block p-2 hover:bg-gray-700 rounded ${
                present == "contact" ? "bg-gray-800" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
