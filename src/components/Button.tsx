import { pushButton, transition2 } from "@/lib/ani";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface ButtonProps {
  // onClick: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode;
  onClick?: any;
  onStart?: any;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  onStart,
  className,
}) => {
  let [pressing, setPressing] = useState(false);
  return (
    <motion.button
      onClick={onClick}
      onTapStart={() => {
        setPressing(true);
        onStart;
      }}
      onTap={() => {
        setPressing(false);
      }}
      onTapCancel={() => {
        setPressing(false);
      }}
      animate={pressing ? "pressed" : "unpressed"}
      initial={false}
      variants={pushButton}
      transition={transition2}
      className={`flex items-center justify-center relative rounded-full ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
