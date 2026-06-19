import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gitproject from "../assets/gitproject.png";
import train from "../assets/train.png";
import bank from "../assets/bank.png";
import gitLogo from "../assets/githublogo.png";
import liveLink from "../assets/livelink.png";
import ecommerce from "../assets/ecommerce.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: gitproject,
      name: "Github Profile Info",
      stack: "HTML · Tailwind · JavaScript",
      bg: "bg-[#FDDBBB]",
      gitHubLink: "https://github.com/ucsmchandu/github-hunt.git",
      live: "https://ucsmchandu.github.io/github-hunt/",
      summary:
        "Fetches and displays GitHub user profile data via the GitHub API.",
      details: [
        "GitHub profile fetching by username",
        "Profile picture, bio, followers and repositories",
        "Instant search for any GitHub user",
        "Responsive across all device sizes",
        "Error handling for invalid usernames",
      ],
    },
    {
      id: 2,
      img: train,
      name: "Train Reservation System",
      stack: "C++ · SQL",
      bg: "bg-[#A1EEBD]",
      gitHubLink: "https://github.com/ucsmchandu/Train-Reservation.git",
      summary:
        "Terminal-based app for managing train bookings, schedules and cancellations.",
      details: [
        "Ticket booking by route, date and passenger",
        "Real-time seat status and availability",
        "Cancellations with automatic seat updates",
        "SQL-backed data handling throughout",
      ],
    },
    {
      id: 3,
      img: bank,
      name: "Bank Management System",
      stack: "C++ · SQL",
      bg: "bg-[#9AD0EC]",
      gitHubLink: "https://github.com/ucsmchandu/Bank-Management.git",
      summary: "Terminal-based simulation of core banking operations.",
      details: [
        "Account creation, deletion and management",
        "Deposits and withdrawals with live balances",
        "Secure transfers between accounts",
        "Full transaction history in SQL",
        "Simple menu-driven CLI",
      ],
    },
    {
      id: 4,
      img: ecommerce,
      name: "Ecommerce",
      stack: "React · Tailwind · Firebase",
      bg: "bg-[#B0DB9C]",
      gitHubLink: "https://github.com/ucsmchandu/ecommerce.git",
      live: "https://ecommerce-azure-phi-46.vercel.app/",
      summary: "Full e-commerce app with auth, cart and product browsing.",
      details: [
        "Email and Google sign-in via Firebase Auth",
        "Product listing pulled from an API",
        "Cart with quantity controls and live summary",
        "Product detail pages with images and reviews",
        "Responsive layout for desktop and mobile",
      ],
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dllvcgpsk/image/upload/v1751353015/cq7hnfgu3impnf6z0s8m.png",
      name: "Skilcenta",
      stack: "React · Firebase · Tailwind",
      bg: "bg-[#E5D9F2]",
      gitHubLink: "https://github.com/ucsmchandu/Skilcenta.git",
      live: "https://skilcenta.vercel.app",
      summary:
        "A student-focused platform that combines academic resources, career guidance, AI-powered learning assistance, and a campus marketplace to help students learn, grow, and collaborate in one place.",

      details: [
        "AI-powered study assistance for faster and smarter learning",
        "Academic resources, notes and learning materials",
        "Career roadmaps for different technology domains",
        "Campus marketplace for buying and selling within the college",
        "Built to improve productivity, learning and student engagement",
      ],
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dllvcgpsk/image/upload/v1781327605/ezuvsuuzeu6nkzog4o6s.png",
      name: "Taskopia",
      stack: "React · Firebase · Tailwind",
      bg: "bg-[#FFF6B7]",
      gitHubLink: "https://github.com/ucsmchandu/taskopia.git",
      live: "https://taskopia-one.vercel.app/",
      summary:
        "An AI-enhanced hyperlocal task marketplace that connects task posters with nearby workers, making it easier to find help, discover opportunities, and complete short-term tasks efficiently.",

      details: [
        "AI-assisted task creation with smart description generation",
        "AI-powered translation for multilingual task postings",
        "Post and discover nearby short-term work opportunities",
        "Simple application and worker selection process",
        "Designed for fast, flexible and location-based task completion",
      ],
    },
  ];

  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div
      id="projects"
      className="bg-[#4CC9FE] min-h-screen relative pt-20 pb-24 px-6"
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="text-center mb-14">
        <p
          className="text-xs font-semibold tracking-[.16em] uppercase text-white/60 mb-2"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          What I&apos;ve built
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-none"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          My <span className="text-[#ffff2c]">Projects</span>
        </h1>
        <div className="w-12 h-1 rounded-full bg-[#ffff2c] mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto list-none">
        {projects.map((project) => {
          const isOpen = openId === project.id;
          return (
            <li key={project.id} className="list-none">
              <motion.div
                layout
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className={`${project.bg} rounded-4xl shadow-lg p-6 flex flex-col`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/70 shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.img}
                      alt=""
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-lg text-[#1E3E62] truncate">
                      {project.name}
                    </p>
                    <p className="text-xs font-medium text-[#1E3E62]/60 truncate">
                      {project.stack}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#1E3E62]/80 mb-5 flex-1">
                  {project.summary}
                </p>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden mb-5 space-y-1.5"
                    >
                      {project.details.map((line, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[#1E3E62]/75"
                        >
                          <span className="font-bold text-[#1E3E62]/40 mt-[1px]">
                            +
                          </span>
                          {line}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.gitHubLink.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View source on GitHub"
                    className="inline-flex items-center gap-2 bg-white text-[#1E3E62] font-semibold text-xs rounded-full px-4 py-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <img src={gitLogo} className="h-4 w-4" alt="" />
                    Source
                  </a>

                  {project.live ? (
                    <a
                      href={project.live.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View live site"
                      className="inline-flex items-center gap-2 bg-white text-[#1E3E62] font-semibold text-xs rounded-full px-4 py-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <img src={liveLink} className="h-4 w-4" alt="" />
                      Live
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 bg-white/40 text-[#1E3E62]/50 font-semibold text-xs rounded-full px-4 py-2 cursor-not-allowed">
                      No live demo
                    </span>
                  )}

                  <button
                    onClick={() => toggle(project.id)}
                    className="ml-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#ffff2c] text-[#1E3E62] font-bold text-sm shadow-sm hover:scale-110 transition-transform"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Hide details" : "Show details"}
                  >
                    {isOpen ? "−" : "+"}
                  </button>
                </div>
              </motion.div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
