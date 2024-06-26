import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import React from "react";

const ScrollAnimations = () => {
  // scrollYProgress es un valor que va de 0 a 1 dependiendo de la posición del scroll.
  const { scrollYProgress } = useScroll();

  // Con useSpring hacemos la animación dun poco mas suave. El segundo parámetro no es obligatorio.
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
  );

  return (
    <div>
      <motion.div
        style={{
          // scaleX: scrollYProgress,
          scaleX,
          // background: "blue",
          background: background,
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "5px",
        }}
      />

      <div style={{ maxWidth: "700px", margin: "auto", padding: "1.2rem" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          pellentesque est. Integer urna sapien, volutpat nec ante quis,
          fringilla tincidunt ex. Nam vel feugiat augue. Proin at ex in massa
          molestie placerat. Maecenas ac dolor elementum, viverra ipsum a,
          sollicitudin sem. Mauris rhoncus quis nisl placerat sollicitudin.
          Pellentesque porttitor sodales elit.
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimations;
