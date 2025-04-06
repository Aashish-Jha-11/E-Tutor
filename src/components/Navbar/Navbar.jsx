import React, { useContext } from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import { ThemeContext } from "../../context/ThemeContext.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6 dark:bg-gray-900">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p className="dark:text-white">E-Tutor {isDarkMode ? '🌙' : '☀️'}</p>
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block text-gray-600 dark:text-gray-300 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA Button section */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <button className="font-semibold dark:text-white">Sign in</button>
            <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">
              Register
            </button>
            <ThemeToggle />
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <div onClick={() => setIsOpen(!isOpen)}>
              <MdMenu className="text-4xl dark:text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
