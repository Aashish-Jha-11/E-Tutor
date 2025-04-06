import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import FooterImg from "../../assets/footer.jpg";

const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
};

const Footer = () => {
  return (
    <div style={FooterBg} className="rounded-t-3xl">
      <div className="bg-primary/5 dark:bg-gray-900/90">
        <div className="container">
          <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black dark:text-white">
            {/* brand info section */}
            <div className="py-8 px-4 space-y-4">
              <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                <MdComputer className="text-secondary text-4xl" />
                <p className="">E-Tutor</p>
              </div>
              <p className="dark:text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                accusamus nulla labore cumque id ipsum molestias architecto
                voluptatum saepe ab.
              </p>
              <div className="flex items-center justify-start gap-5 !mt-6">
                <a href="#" className="hover:text-secondary duration-200 dark:text-white">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200 dark:text-white">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200 dark:text-white">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200 dark:text-white">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 dark:text-white">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" className="hover:text-secondary duration-200 dark:text-gray-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200 dark:text-gray-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200 dark:text-gray-300">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200 dark:text-gray-300">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 dark:text-white">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" className="hover:text-secondary duration-200 dark:text-gray-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200 dark:text-gray-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200 dark:text-gray-300">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200 dark:text-gray-300">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 dark:text-white">
                  Company Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" className="hover:text-secondary duration-200 dark:text-gray-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200 dark:text-gray-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200 dark:text-gray-300">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200 dark:text-gray-300">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="text-center py-6 border-t-2 border-gray-800/10">
              <span className="text-sm text-black/60 dark:text-gray-400">
                {" "}
                @copyright 2025 Aashish Jha
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
