import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "../data/skills";

const tabs = [
  { id: "core", label: "Core Technologies" },
  { id: "working", label: "Working Knowledge" },
  { id: "learning", label: "Learning Path" },
];

const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState("core");
  const [isAnimatingCards, setIsAnimatingCards] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleTabChange = (tabId) => {
    setIsAnimatingCards(false);
    setActiveTab(tabId);
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="justify-items-center content-center my-auto h-screen max-w-5xl mx-auto p-4"
    >
      <h1 className="text-3xl md:text-5xl">Skills</h1>

      <div className="flex gap-4 mb-6 mt-5 mx-auto">
        {tabs.map((tab, index) => (
          <button
            key={`${tab.id}-${index}`}
            onClick={() => handleTabChange(tab.id)}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onAnimationComplete={() => {
          if (isInView) setIsAnimatingCards(true);
        }}
        className="h-[256px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-20 gap-x-7 mt-16 w-fit"
      >
        {isInView && isAnimatingCards &&
          skills[activeTab].map((skill, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <SkillCard index={index} {...skill} />
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default SkillTabs;