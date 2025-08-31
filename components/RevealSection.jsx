// components/RevealSection.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RevealSection = ({ children, delay = 0.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -80, filter: "blur(8px)" }}
      animate={
        isInView
          ? { opacity: 1, x: 0, filter: "blur(0px)" }
          : { opacity: 0, x: -80, filter: "blur(8px)" }
      }
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
