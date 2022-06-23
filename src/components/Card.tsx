import { FadeTop } from "@/lib/ani";
import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";
import * as Icons from "./Icons";

const Card: React.FC = ({ data }) => {
  const { image, text, button } = data;
  return (
    <motion.div
      className="max-w-[30rem] w-full space-y-6 p-4 rounded-xl bg-neutral-200 shadow-3xl dark:shadow-none dark:bg-neutral-800"
      whileHover={{ scale: 1.05 }}
      variants={FadeTop}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img src={image} alt="" />
      </div>
      <h1 className=" text-center font-poppins font-bold text-2xl text-neutral-600 dark:text-neutral-300 ">
        {text}
      </h1>
      {button == "Steam" && (
        <div className="flex justify-between items-center">
          <Button className="dark:bg-neutral-700 bg-blue-600 rounded-lg gap-x-2 px-4 py-2">
            <Icons.Steam className="dark:text-neutral-900 text-white w-7 h-7 sm:w-5 sm:h-5" />
            <p className="font-poppins font-bold text-lg dark:text-neutral-400 text-white">
              Join
            </p>
          </Button>
          <div className="flex gap-x-2 justify-center">
            <Icons.Map className="text-neutral-900 dark:text-white w-7 h-7 sm:w-5 sm:h-5" />
            <Icons.People className="text-neutral-900 dark:text-white w-7 h-7 sm:w-5 sm:h-5" />
            <p className="font-poppins text-lg dark:text-neutral-400 text-neutral-900">
              73/500
            </p>
          </div>
        </div>
      )}
      {button == "error" && (
        <Button className=" bg-red-300 rounded-lg gap-x-2 px-4 py-2">
          <Icons.Exclamation className="text-red-700 w-7 h-7 sm:w-5 sm:h-5" />
          <p className="font-poppins text-lg text-red-700">Offline</p>
        </Button>
      )}
      {button == "Server" && (
        <Button className="dark:bg-neutral-700 bg-neutral-400 rounded-lg gap-x-2 px-4 py-2">
          <p className="font-poppins text-lg dark:text-neutral-400 text-white">
            mc.kekalainen.me:25565
          </p>
        </Button>
      )}
    </motion.div>
  );
};

export default Card;
