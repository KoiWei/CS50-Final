import { motion } from "framer-motion";

function SkillsBadge() {
  const skills = [
    "Java",
    "SQL",
    "Python",
    "Power BI",
    "React.JS",
    "Next.JS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "React testing",
    "Git",
    "Github",
    "Figma",
  ];
  const shuffledSkills = skills.sort(() => Math.random() - 0.5);

  const animationVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 + 0.1 * index,
      },
    }),
  };

  return (
    <div className="flex overflow-hidden">
      {shuffledSkills.map((skill, index) => (
        <motion.div
          key={index}
          variants={animationVariants}
          initial="initial"
          animate="animate"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
          className="mx-2 my-3 cursor-default overflow-hidden rounded-md bg-[#A0522D] px-4 py-1 text-lg font-semibold text-white shadow-none"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
}

export default SkillsBadge;
