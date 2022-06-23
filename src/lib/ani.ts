import { Variants } from "framer-motion";

export const FadeContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.8,
    },
  },
};

export const ButtonsContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.15,
    },
  },
};

export const FastFadeContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const FadeTop: Variants = {
  hidden: {
    y: -40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const FadeLeft: Variants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const FadeRight: Variants = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const FadeBottom: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const PanelFade: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
  },
};

export const twitterNav: Variants = {
  hidden: { x: "-100%" },
  visible: {
    x: "0",
  },
};
export const scaleLeft: Variants = {
  hidden: { x: "300px" },
  visible: { x: "0px" },
};

export const Image: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 15,
    },
  },
};

export const pushButton: Variants = {
  unpressed: {
    scale: [null, 0.85, 1],
    opacity: 1,
  },
  pressed: {
    scale: 0.85,
    opacity: 0.7,
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0.5,
    },
  },
};

export const dropIn: Variants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const transition1 = {
  type: "spring",
  damping: 25,
  stiffness: 200,
};

export const transition2 = {
  type: "spring",
  duration: 0.3,
  bounce: 0.5,
};
