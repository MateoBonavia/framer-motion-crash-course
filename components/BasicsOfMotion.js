import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        className="example-button"
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          // A cualquier elemento HTML se le puede agregar "motion." para poder hacer animaciones.
          <motion.div
            // Le damos un valor inicial a la animación
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            // Le decimos que animación queremos que haga
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            // Le decimos que hacer cuando se desmonte el componente
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            // En transition podemos poner cosas como la duración, el easing, el tiempo que le damos
            //  a cada valor y de la animación (expresado en porcentaje), entre otras cosas.
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
