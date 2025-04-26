import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

// Variants no estilo da doc do Framer Motion
const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const ScrollNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <aside className="hidden lg:flex fixed top-1/4 left-5 flex-col gap-4 z-50">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className="text-gray-600 hover:text-black text-left"
          >
            {section.label}
          </button>
        ))}
      </aside>

      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-white rounded-full shadow-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-12 left-0 w-56 bg-white shadow-lg rounded-md p-4 space-y-2 origin-top"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id)}
                  className="block w-full text-left text-gray-700 hover:text-black"
                >
                  {section.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ScrollNav;
