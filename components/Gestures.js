import React from "react";
import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig
        // Con MotionConfig podemos definir unas configuraciones básicas para los componentes que tenga dentro.
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          className="example-button"
          // WhileHover (Mientras esté encima) y WhileTap (Mientras se esté tocando).
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9, rotate: "2.5deg" }}
        >
          Click me!
        </motion.button>

        <motion.button
          className="example-button"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
          style={{ backgroundColor: "red" }}
        >
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
