import { FadeLeft } from "@/lib/ani";
import { motion } from "framer-motion";
import React from "react";

const Avatar: React.FC = ({ data }) => {
  const { name, image } = data;
  return (
    <motion.div
      className="p-4 bg-neutral-200 shadow-3xl dark:shadow-none dark:bg-neutral-800 rounded-lg"
      variants={FadeLeft}
    >
      <div className="w-36 h-36 overflow-hidden rounded-full">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <p className="text-center font-poppins font-bold text-lg text-neutral-800 dark:text-white">
        {name}
      </p>
    </motion.div>
  );
};

export default Avatar;
