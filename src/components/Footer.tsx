import React from "react";
import Button from "./Button";

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto px-4 py-8">
      <div className="outline outline-1 outline-neutral-800 dark:outline-white"></div>
      <div className="flex sm:flex-col justify-between gap-2 ">
        <div className="font-poppins sm:text-center text-neutral-800 dark:text-purple-300 text-xl sm:text-base uppercase mt-6">
          <span className="font-bold">Ember theme demo ©</span>2021
          <span>&nbsp;All Rights Reserved.</span>
        </div>
        <ul className="flex text-neutral-800 dark:text-purple-300 text-xl  sm:text-base sm:mx-auto">
          <Button>
            <a className="font-poppins font-bold p-2" href="/">
              Contact
            </a>
          </Button>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
