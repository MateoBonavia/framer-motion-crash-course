import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  // Utilizamos este hook que nos da motion para poder controlar la animación.
  const controls = useAnimationControls();

  const handleClick = () => {
    // Se puede controlar la animación con el método start y pasándole el nombre de la variante que queremos que haga.
    controls.start("flip");

    // Si no definimos ninguna variable, podemos definir la animación directamente aca.
    // controls.start({
    //  rotate: "360deg",
    // })
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button className="example-button" onClick={handleClick}>
        Flip it!
      </button>
      <motion.div
        style={{ width: 150, height: 150, backgroundColor: "black" }}
        // Aca podemos definir variantes para luego utilizar la que queramos.
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        // En el animate de abajo en lugar de decirle que animación hacer, le asignamos controls para luego poder
        // controlarla con el hook que importamos arriba.
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
