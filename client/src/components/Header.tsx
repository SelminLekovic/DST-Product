import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import headerLogo from "@/assets/HeaderLogo.png";
import GreenButton from "./GreenButton";

type LinkProps = {
  href: string;
  text: string;
  className?: string;
};

const Link: React.FC<LinkProps> = ({ href, text, className }) => {
  return (
    <a
      href={href}
      className={`text-white text-[20px]  md:text-[40px] font-normal hover:text-[#B3D138] transition-all duration-300 ${
        className || ""
      }`}
    >
      {text}
    </a>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-5 md:top-0 z-50 w-full">
      {/* Main header container */}
      <div className="flex justify-between items-center bg-[#114677] rounded-[105px] md:rounded-none h-[55px] py-[10px] px-5 max-w-4xl mx-auto">
        <img src={headerLogo} alt="Header Logo" className="h-full" />
        {/* Desktop navigation */}
        <div className=" md:hidden flex gap-4 items-center ">
          <Link href="https://google.com" text="About" />
          <Link href="/services" text="Services" />
          <Link href="/contact" text="Our Work" />
        </div>
        <div className="md:hidden flex ">
          <GreenButton text="Contact" targetId="contactUs" />
        </div>
        {/* Mobile burger menu button */}
        <div className="hidden md:block">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu with slide animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex bg-[#114677] h-screen mx-auto max-w-4xl px-5 py-3"
          >
            <div className="flex flex-col gap-3 w-full items-center justify-start mt-[25%]  ">
              <Link href="https://google.com" text="Rreth Nesh" />
              <Link href="/services" text="Sherbimet" />
              <Link href="/contact" text="Projektet" />
              <GreenButton text="Kontakti" targetId="contactUs" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
export { Link };
