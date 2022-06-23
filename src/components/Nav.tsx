import { isActive, toggle } from "@/hooks/navState";
import UseMediaQuery from "@/hooks/UseMediaQuery";
import {
  ButtonsContainer,
  FadeLeft,
  FadeRight,
  transition1,
  twitterNav,
} from "@/lib/ani";
import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import * as Icons from "./Icons";
import ThemeToggle from "./ThemeToggle";

const Nav: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = UseMediaQuery("(max-width:767px)");
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return (
    <nav className="container mx-auto flex items-center px-4 py-8">
      {isMobile && <MobileNav />}
      {!isMobile && (
        <motion.div
          className="flex items-center gap-3 font-poppins font-bold text-lg text-neutral-600 dark:text-white"
          variants={ButtonsContainer}
          initial={"hidden"}
          animate={"visible"}
        >
          <motion.a href="/" variants={FadeRight}>
            <img src="/asset/logoipsum.svg" />
          </motion.a>
          <motion.a href="/" variants={FadeRight}>
            Home
          </motion.a>
          <motion.a href="/" variants={FadeRight}>
            Bans
          </motion.a>
          <motion.a href="/" variants={FadeRight}>
            Users
          </motion.a>
          <motion.a href="/" variants={FadeRight}>
            Admin
          </motion.a>
          <motion.a href="/" variants={FadeRight}>
            Forum
          </motion.a>
          <motion.a href="/" variants={FadeRight}>
            Rules
          </motion.a>
          <motion.a href="/" variants={FadeRight}>
            Store
          </motion.a>
        </motion.div>
      )}
      <div className="ml-auto z-10 flex gap-3 px-3 text-neutral-600 dark:text-white">
        <Button>
          <a target="_blank" rel="noreferrer" href="">
            <Icons.Discord className="w-7 h-7 sm:w-5 sm:h-5" />
          </a>
        </Button>
        <Button>
          <a target="_blank" rel="noreferrer" href="">
            <Icons.Twitter className="w-7 h-7 sm:w-5 sm:h-5" />
          </a>
        </Button>
        <Button>
          <a target="_blank" rel="noreferrer" href="">
            <Icons.instagram className="w-7 h-7 sm:w-5 sm:h-5" />
          </a>
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  );
};

function MobileNav() {
  const open = useStore(isActive);
  return (
    <div>
      <Button className="z-20" onClick={toggle}>
        <Icons.List className="h-6 w-6 text-neutral-600 dark:text-white" />
      </Button>
      <motion.div
        className="fixed z-10 w-full left-0 top-0 bottom-0 bg-neutral-200 dark:bg-neutral-700"
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        variants={twitterNav}
        transition={transition1}
      >
        <motion.div
          className="flex flex-col gap-8 px-4 py-8 mt-20 font-poppins text-5xl font-bold text-neutral-600 dark:text-white"
          variants={ButtonsContainer}
          initial={"hidden"}
          animate={open ? "visible" : "hidden"}
        >
          <motion.a href="/" variants={FadeLeft}>
            <img src="/asset/logoipsum.svg" />
          </motion.a>
          <motion.a href="/" variants={FadeLeft}>
            Home
          </motion.a>
          <motion.a href="/" variants={FadeLeft}>
            Bans
          </motion.a>
          <motion.a href="/" variants={FadeLeft}>
            Users
          </motion.a>
          <motion.a href="/" variants={FadeLeft}>
            Admin
          </motion.a>
          <motion.a href="/" variants={FadeLeft}>
            Forum
          </motion.a>
          <motion.a href="/" variants={FadeLeft}>
            Rules
          </motion.a>
          <motion.a href="/" variants={FadeLeft}>
            Store
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Nav;
