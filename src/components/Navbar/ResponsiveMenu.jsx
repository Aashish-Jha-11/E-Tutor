import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-primary dark:bg-secondary text-black dark:text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
              <li>
                <div className="flex justify-center pt-5">
                  <button className="primary-btn">Sign in</button>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
