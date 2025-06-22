import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import todo from "../assets/todo.png";
import expense from "../assets/expense.png";
import gitproject from "../assets/gitproject.png";
import train from "../assets/train.png";
import bank from "../assets/bank.png";
import gitLogo from "../assets/githublogo.png";
import liveLink from "../assets/livelink.png";
import more from "../assets/more.png";
import ecommerce from "../assets/ecommerce.png"
const Projects = () => {
  const projects = [
    {
      id: 1,
      img: todo,
      name: "TodoList",
      bg: "bg-[#B7B1F2]",
      gitHubLink: "https://github.com/ucsmchandu/To-Do-App.git",
      live: "https://ucsmchandu.github.io/To-Do-App/",
      details:
      `A simple Todo List app built using HTML, Tailwind CSS, and JavaScript. The app helps users efficiently manage their daily tasks by allowing them to add, delete, and mark tasks as completed. 
-Technologies Used:
HTML, Tailwind CSS, JavaScript

-Features:
Add Task: Create new tasks easily.
Delete Task: Remove tasks when they’re no longer needed.
Mark as Completed: Track task progress with a visual indicator.
Local Storage: Saves tasks so they remain even after refreshing the page.
History Option: View the history of completed tasks for better task tracking.`
    },
    {
      id: 2,
      img: expense,
      name: "ExpenseTracker",
      bg: "bg-[#DDF2FD]",
      gitHubLink: "https://github.com/ucsmchandu/expense-tracker.git",
      live: "https://ucsmchandu.github.io/expense-tracker/",
      details:
        `
        An Expense Tracker app built using HTML, Tailwind CSS, and JavaScript. It helps users track their spending, categorize expenses, and manage finances efficiently.
-Technologies Used:
HTML, Tailwind CSS, JavaScript

-Features:
Add Expense: Input and categorize expenses
Delete Expense: Remove unnecessary or old entries.
Expense Summary: View the total expenditure and breakdown by category.
Local Storage: Automatically saves expense data, so users won’t lose their information after refreshing.
History Option: Track past transactions for better financial analysis.
        `
    },
    {
      id: 3,
      img: gitproject,
      name: "Github Profile Info",
      bg: "bg-[#FDDBBB]",
      gitHubLink:"https://github.com/ucsmchandu/github-hunt.git",
      live:" https://ucsmchandu.github.io/github-hunt/",
      details:
        `
       A project to fetch and display GitHub user profile information using the GitHub API, providing details like username, repositories, followers, and profile picture.
-Technologies Used:
HTML, Tailwind CSS, JavaScript

-Features:
GitHub Profile Fetching: Retrieve profiles using GitHub username.
Display Info: View profile picture, bio, followers, and repositories.
Search Functionality: Instantly search GitHub users.
Responsive Design: Smooth viewing on all devices.
Error Handling: Alerts for invalid usernames.
        `
    },
    {
      id: 4,
      img: train,
      name: "Train Reservation System",
      bg: "bg-[#A1EEBD]",
      gitHubLink:"https://github.com/ucsmchandu/Train-Reservation.git",
      details:
       `
      A terminal-based app to manage train ticket bookings, schedules, and cancellations.
-Technologies Used:
SQL, C++
-Features:
Ticket Booking: Select routes, dates, and passengers.
Schedules & Availability: View real-time seat status.
Cancellations: Cancel tickets and update seat data.
Database Integration: Efficient data handling with SQL.
       `
    },
    {
      id: 5,
      img: bank,
      name: "Bank Management System",
      bg: "bg-[#4CC9FE]",
      gitHubLink:"https://github.com/ucsmchandu/Bank-Management.git",
      details:
       `
       A terminal-based application for simulating essential banking operations like account management, deposits, withdrawals, and fund transfers.
-Technologies Used:
SQL, C++

-Features:
Account Management: Create, delete, and manage user accounts.
Deposits and Withdrawals: Perform deposits, withdrawals, and update balances in real-time.
Fund Transfers: Transfer money securely between accounts.
Transaction Records: SQL database stores all transaction details and account history.
User-Friendly CLI: Simple menu-based interface for easy interaction.
      `
    },
     {
      id: 6,
      img: ecommerce,
      name: "Ecommerce",
      bg: "bg-[#D9EAFD]",
      gitHubLink:"https://github.com/ucsmchandu/ecommerce.git",
      live:"https://ecommerce-gj17.vercel.app/",
      details:
       `
       I developed a fully functional e-commerce web application using React, Tailwind CSS, and Firebase. The platform allows users to explore a wide range of products, add items to their cart, and securely register or log in to place orders.

-Features:
 User Authentication: Registration, login, and Google Sign-In using Firebase Auth with protected routes for cart and wishlist access.
 Product Listing: Products fetched from an API and dynamically rendered with responsive UI
 Cart Functionality: Add to cart, remove items, quantity adjustment, and real-time cart summary.
 Product Details Page: Clickable products showing detailed information, images, price, and reviews.
  Responsive Design: Optimized for both desktop and mobile using Tailwind CSS.
      `
    },
  ];
  const [selectedProject, setSelectedProject] = useState(null);
  const showProjectDetails = (id) => {
    setSelectedProject(projects.find((project) => project.id === id));
  };
  const closeProjectDetails = () => {
    setSelectedProject(null);
  };
  return (
    <div id="projects" className="bg-[#1E3E62] min-h-screen">
      <h1 className="text-5xl font-extrabold flex justify-center p-4 text-white">
        Projects
      </h1>
      <div className="pt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-10 p-10 list-none relative md:-top-10">
        {projects.map((project) => (
          <li key={project.id}>
            <motion.div
              whileHover={{ scale: 1.1,duration:0 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1,y:-15}}
              transition={{ delay: 0.01,duration:0.4, ease: "easeInOut" }}
              viewport={{ margin: "-200px", once: false }}
              className={`rounded-4xl ${project.bg} flex flex-col p-2 items-center space-y-4 relative lg:top-15`}
            >
              <div>
                <img src={project.img} className="h-35 w-35" />
              </div>

              <p className="text-center relative font-mono text-xl p-1">
                {project.name}
              </p>

              <div className="space-x-8">

                <span title="github">
                  <button className="cursor-pointer">
                    <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                      <img src={gitLogo} className="h-7" />
                    </a>
                  </button>
                </span>

                <span title="live">
                  <button
                    className={`${
                      !project.live ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                  >
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <img src={liveLink} className="h-7" />
                      </a>
                    )}
                  </button>
                </span>

                <button
                  className="cursor-pointer"
                  onClick={() => showProjectDetails(project.id)}
                >
                  <img src={more} className="h-7" />
                </button>

              </div>
            </motion.div>
          </li>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="details-box"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50"
          >
            <div className="bg-white p-2 sm:p-8 rounded-lg shadow-lg max-w-2xl text-black relative">
              <h2 className="text-lg sm:text-2xl  font-bold text-wrap">{selectedProject.name}</h2>
              <pre className="text-sm sm:text-lg text-wrap ">{selectedProject.details}</pre>
            </div>
            {
              selectedProject && (
                <div 
                 className="fixed inset-0  bg-opacity-50 z-40"
                onClick={closeProjectDetails}
                />
              )
            }
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Projects;