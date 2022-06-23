import {
  FadeContainer,
  FadeLeft,
  FadeRight,
  FadeTop,
  heroContainer,
} from "@/lib/ani";
import { FEATURES, Members, SERVERS } from "@/lib/DummyData";
import { motion } from "framer-motion";
import React from "react";
import Avatar from "./Avatar";
import Button from "./Button";
import Card from "./Card";
import CardIcon from "./CardIcon";
import * as Icons from "./Icons";

const Home: React.FC = () => {
  return (
    <div className="container space-y-20 mx-auto px-4">
      {/* HERO Section */}
      <motion.section
        className="relative h-[500px] overflow-hidden flex flex-col justify-center items-center gap-8 rounded-xl bg-gradient-to-tl dark:bg-none from-violet-500 to-fuchsia-500 dark:bg-neutral-800"
        variants={heroContainer}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        <motion.img
          className="w-80"
          src="/asset/logoipsum.svg"
          alt="Logo"
          variants={FadeTop}
        />
        <motion.h1
          className="dark:text-neutral-500 text-neutral-300 text-center font-poppins text-4xl font-bold"
          variants={FadeTop}
        >
          Ember demo
        </motion.h1>
      </motion.section>
      {/* FEATURES Section */}
      <motion.section
        variants={FadeContainer}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        <motion.h1
          className="font-poppins font-bold text-4xl text-neutral-600 dark:text-neutral-300 "
          variants={FadeLeft}
        >
          FEATURES
        </motion.h1>
        <div className="flex flex-wrap gap-8 my-8">
          {FEATURES.map((data, i) => (
            <CardIcon data={data} key={i}></CardIcon>
          ))}
        </div>
      </motion.section>
      {/* SERVERS Section */}
      <motion.section
        variants={FadeContainer}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        <motion.h1
          className="font-poppins font-bold text-4xl text-neutral-600 dark:text-neutral-300 "
          variants={FadeLeft}
        >
          OUR SERVERS
        </motion.h1>
        <div className="flex flex-wrap gap-8 my-8">
          {SERVERS.map((data, i) => (
            <Card data={data} key={i}></Card>
          ))}
        </div>
      </motion.section>
      {/* Discord Section */}
      <motion.section
        className="relative flex justify-evenly items-center flex-wrap rounded-2xl bg-gradient-to-tl dark:bg-none from-violet-500 to-fuchsia-500 dark:bg-neutral-800"
        variants={FadeContainer}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        <motion.iframe
          className="m-4"
          src="https://discord.com/widget?id=278654446496382986&theme=dark"
          width="350"
          height="350"
          allowtransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          variants={FadeLeft}
        ></motion.iframe>
        <motion.div
          className="backdrop-blur-sm bg-white/30 space-y-5 p-4 m-4 rounded-lg"
          variants={FadeRight}
        >
          <p className="font-poppins font-bold text-lg text-blue-900 dark:text-white">
            JOIN OUR COMMUNITY ON
          </p>
          <Button className="m-auto bg-green-800 rounded-lg gap-x-2 px-4 py-2">
            <Icons.Discord className="text-white w-7 h-7 sm:w-5 sm:h-5" />
            <p className="font-poppins font-bold text-lg text-white">Join</p>
          </Button>
        </motion.div>
        <div className="h-[500px] sm:h-auto">
          <img
            className="w-full h-full object-contain"
            src="/asset/rustGuy.png"
            alt="guy"
          />
        </div>
      </motion.section>
      {/* COMMUNITY TEAM Section */}
      <motion.section
        variants={FadeContainer}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-center font-poppins font-bold text-4xl text-neutral-600 dark:text-neutral-300 "
          variants={FadeTop}
        >
          COMMUNITY TEAM
        </motion.h1>
        <div className="flex justify-center flex-wrap gap-8 my-8">
          {Members.map((data, i) => (
            <Avatar data={data} key={i}></Avatar>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
