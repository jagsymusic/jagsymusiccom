import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div>
      <div className="bg-orange-200">
        <div className="px-4 py-20">
          <div className="relative w-full  text-center">
            {/* <h1 className="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                Welcome to my website
              </h1> */}

            {/* <p className="text-gray-600 md:text-xl md:px-18 mb-20">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
              </p> */}

            {/* <div className="hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-64 -mr-48"></div> */}

            {/* <div className="hidden md:block h-5 w-5 rounded-full bg-yellow-500 absolute top-0 right-0 -mr-40 mt-32"></div> */}
          </div>
        </div>

        <div className={`w-full h-36 ${styles.picContainer}`}>
          <div
            className={`inset-0 flex items-center justify-center ${styles.picDiv}`}
          >
            <img
              src="/header1.png"
              alt=""
              className={`shadow-lg rounded shadow-orange-600/40 ${styles.picture}`}
            />
          </div>
        </div>

        <svg
          className="fill-current bg-orange-200 text-white hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill-opacity="1"
            d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
