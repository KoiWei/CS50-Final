"use client";

import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="flex h-full flex-col items-start justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-left"
      >
        <h1 className="text-6xl font-extrabold leading-tight">
          Jinlin Wei
        </h1>
        <p className="text-4xl font-bold mt-4">
        Brown MSc in Innovation Management and Entrepreneurship 25' | Healthcare | Tech x Marketing | Consulting 
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-12 flex flex-col items-start gap-9 sm:flex-row"
      >
        {/* Dark Brown Button */}
        <a href="mailto:weijinlinkoi@gmail.com">
          <button
            className="bg-[#4B2E2E] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#3E2727] transition "
          >
            Get in touch with me
          </button>
        </a>
        {/* Beige Button */}
        <a
          href="https://drive.google.com/file/d/1uePShqOvthRCx1tGUZO7px45hvThSxY2/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-[#F5F5DC] text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#EAE0C8] transition" 
          >
            Download my Resume
          </button>
        </a>
        {/* Pink Button */}
        <a
          href="https://www.linkedin.com/in/jinlin-wei-koi19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-[#dcccbc] text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#EAE0C8] transition"
          >
            Connect with me on LinkedIn
          </button>
        </a>
      </motion.div>
    </div>
  );
}

export default Hero;
