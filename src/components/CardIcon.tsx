import { FadeTop, PanelFade } from "@/lib/ani";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Button from "./Button";
import * as Icons from "./Icons";

const CardIcon: React.FC = ({ data }) => {
  const { text, excerpt, icon } = data;
  const [panel, setPanel] = useState(false);
  const toggle = () => setPanel(!panel);
  return (
    <motion.div
      className="max-w-[30rem] overflow-hidden w-full space-y-6 p-4 rounded-xl bg-neutral-200 shadow-3xl dark:shadow-none dark:bg-neutral-800"
      whileHover={{ scale: 1.05 }}
      variants={FadeTop}
    >
      <div className="flex justify-between">
        <Button onClick={toggle}>
          <p className="font-poppins font-bold text-lg dark:text-neutral-400 text-neutral-900">
            {text}
          </p>
          <Icons.Chevron
            className={`w-7 h-7 sm:w-5 sm:h-5 text-neutral-900 dark:text-white ${
              panel ? "rotate-0" : "rotate-180"
            }`}
          />
        </Button>
        {icon == "Store" && (
          <Icons.Store className="w-7 h-7 sm:w-5 sm:h-5 text-neutral-900 dark:text-white " />
        )}
        {icon == "People" && (
          <Icons.People className="w-7 h-7 sm:w-5 sm:h-5 text-neutral-900 dark:text-white" />
        )}
        {icon == "Gear" && (
          <Icons.Gear className="w-7 h-7 sm:w-5 sm:h-5 text-neutral-900 dark:text-white" />
        )}
        {icon == "Ban" && (
          <Icons.Ban className="w-7 h-7 sm:w-5 sm:h-5 text-neutral-900 dark:text-white" />
        )}
        {icon == "Server" && (
          <Icons.Server className="w-7 h-7 sm:w-5 sm:h-5 text-neutral-900 dark:text-white" />
        )}
      </div>
      <motion.div
        className="font-poppins dark:text-neutral-400 text-neutral-900"
        initial="hidden"
        animate={panel ? "visible" : "hidden"}
        variants={PanelFade}
      >
        {excerpt}
      </motion.div>
    </motion.div>
  );
};

export default CardIcon;
