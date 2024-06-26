import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBasedAnimations = () => {
  // Creamos una referencia al div de la linea 19.
  const ref = useRef(null);
  // Con el hook useInView podemos saber si un componente está en la vista, por eso le pasamos la referencia al div.
  // El segundo parámetro que le podemos pasar al useInView es un objeto con opciones
  // en este caso le pasamos once: true para que solo se ejecute una vez.
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div style={{ height: "150vh" }} />
      <motion.div
        style={{ height: "100vh", background: "black" }}
        initial={{ opacity: 0 }}
        // Con el whileInView podemos darle animación a un componente cuando aparece en la vista.
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "1s background",
        }}
      />
    </>
  );
};

export default ViewBasedAnimations;
