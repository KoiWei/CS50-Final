"use client";

import RevealContent from "@/components/ReavealContent";
import SectionBadge from "@/components/SectionBadge";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1 }}
    >
      <RevealContent>
        <>
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="w-12/12 mb-6 flex justify-center md:w-5/12 md:self-start">
              <Image
                src={"/images/AboutPicture.png"}
                className="self-center dark:hidden"
                alt=""
                height={400}
                width={400}
              />
            </div>
            <div className="w-12/12 md:w-7/12 xl:w-5/12">
              <h2 style={{ fontSize: '48px' }}>About Me</h2>
              <div className="flex flex-col gap-4">
              <p>
                 

                </p>
                <p>
                  I&apos;m currently pursuing a master&apos;s degree at Brown University to further expand my skills and explore global career opportunities.

                </p>
                <p>
                I am currently exploring the healthcare industry through my internship at Intus Care, where I analyze operational data to improve eldercare outcomes. Additionally, I co-led a digital health startup project and am auditing public health courses at Brown University, deepening my understanding of the industry&apos;s challenges and opportunities.
                </p>
                <p>
                With an internship at LVMH in e-commerce, where I gained insights into brand logic in the marketing industry, and experience in product management at top tech firms like Tencent and TikTok, I&apos;ve honed my abilities in data analysis, customer insights, and product iteration across gaming, advertising, and media sectors. 
                </p>
                <p>
                Now, I&apos;m interested in applying my expertise in broader domains such as tech, marketing, and consulting. I&apos;m open to internships and full-time roles globally that align with my career interests.
                </p>
                <p>
                Beyond my professional pursuits, I excelled in fitness and sports as a college basketball player, certified yoga instructor, and record-breaking women long jump athlete.
                </p>
              </div>
            </div>
          </div>
        </>
      </RevealContent>
    </motion.div>
  );
}

export default About;
