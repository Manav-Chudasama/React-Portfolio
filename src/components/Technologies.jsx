import React from "react";
import { motion } from "framer-motion";
import { BsAndroid, BsAndroid2 } from "react-icons/bs";
import { DiJava } from "react-icons/di";
import { RiNodejsLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <RiReactjsLine className="text-7xl text-[#58C4DC]" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <RiNodejsLine className="text-7xl text-[#417E38]" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <RiTailwindCssLine className="text-7xl text-[#38BDF8]" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <SiMongodb className="text-7xl text-[#50A84C]" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
        >
          <SiExpress className="text-7xl text-yellow-200" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <BsAndroid className="text-7xl text-[#309D46]" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <DiJava className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <TbBrandCpp className="text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
