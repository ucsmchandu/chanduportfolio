import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import logo from "../assets/logo2.png";

const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [present, setPresent] = useState("home");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let prev = window.scrollY;
    const handleScroll = () => {
      const cur = window.scrollY;
      setHidden(cur > prev && cur > 150);
      prev = cur;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-3"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="w-full max-w-5xl h-16 flex items-center justify-between px-5 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.32)",
            boxShadow:
              "0 8px 32px rgba(21,177,244,0.2), inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <Link
            to="#home"
            smooth={true}
            duration={500}
            onClick={() => setPresent("home")}
          >
            <img src={logo} alt="UCSM" className="w-26 object-contain" />
          </Link>

          <ul className="hidden sm:flex items-center gap-1">
            {NAV_LINKS.map(({ id, label, href }) => (
              <li key={id}>
                <Link
                  to={href}
                  smooth={true}
                  duration={500}
                  onClick={() => setPresent(id)}
                  className="block px-3.5 py-1.5 rounded-xl text-[13px] font-medium transition-all duration-200"
                  style={
                    present === id
                      ? {
                          background: "rgba(21,177,244,0.75)",
                          border: "1px solid rgba(21,177,244,0.45)",
                          color: "#fff",
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 8px rgba(21,177,244,0.35)",
                        }
                      : {
                          color: "rgba(255,255,255,0.9)",
                          border: "1px solid transparent",
                        }
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/1GgJQp9uGbOYXELhl8jQnIS5AHFiTfM0q/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 ml-1 rounded-xl text-[13px] font-medium text-white transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m-4-4l4 4 4-4"
                  />
                </svg>
                Resume
              </a>
            </li>
          </ul>

          <button
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.35)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img src={close} alt="Close" className="h-5" />
            ) : (
              <img src={menu} alt="Menu" className="h-5" />
            )}
          </button>
        </div>
      </motion.nav>

      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="sm:hidden fixed top-[76px] left-3 z-50 w-60 rounded-2xl overflow-hidden"
        style={{
          background: "rgba(26,26,46,0.72)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <ul className="p-3 space-y-0.5">
          {NAV_LINKS.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                to={href}
                smooth={true}
                duration={500}
                onClick={() => {
                  setPresent(id);
                  setIsOpen(false);
                }}
                className="flex items-center px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-150 hover:bg-white/10"
                style={
                  present === id
                    ? { color: "#fff", background: "rgba(255,255,255,0.1)" }
                    : { color: "rgba(255,255,255,0.8)" }
                }
              >
                {label}
              </Link>
            </li>
          ))}
          <li
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "6px",
              marginTop: "6px",
            }}
          >
            <a
              href="https://drive.google.com/file/d/18-fDo0lNfjF7f6l0YLH4CFx8u9I-Z1wX/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-150 hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m-4-4l4 4 4-4"
                />
              </svg>
              Resume
            </a>
          </li>
        </ul>
      </motion.div>

      {isOpen && (
        <div
          className="sm:hidden fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
