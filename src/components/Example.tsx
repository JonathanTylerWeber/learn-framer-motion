import { motion } from "framer-motion";
import { useState } from "react";

export function Example() {
  // const [isAnimating, setIsAnimating] = useState(false);

  // const refreshAnimation = () => {
  //   setIsAnimating(false);
  //   setTimeout(() => setIsAnimating(true), 10);
  // };

  const [animate, setAnimate] = useState({ scale: 1, rotate: 0 });

  const childVariants = {
    initial: { x: 50, opacity: 0, backgroundColor: "#fa2" },
    start: { x: 0, opacity: 1 },
    tapState: { backgroundColor: "#f00" },
  };

  return (
    <>
      {/* Main Container */}
      <div
        style={{
          width: "100%",
          height: "100vh", // Full viewport height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white", // Background for better visibility
          position: "relative",
        }}
      >
        {/* Refresh Button */}
        {/* <button
          onClick={refreshAnimation}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Refresh
        </button> */}

        {/* Animated Element */}
        {/* <motion.div
          // key={isAnimating ? "animate" : "reset"}
          variants={{
            initial: { opacity: 0 },
            start: { opacity: 1 },
            hoverState: { scale: 1.05 },
          }}
          initial="initial"
          animate="start"
          whileHover="hoverState"
          whileTap="tapState"
          transition={{ delayChildren: 0.2, staggerChildren: 0.2 }}
        >
          <motion.div variants={childVariants} />
          <motion.div variants={childVariants} />
          <motion.div variants={childVariants} />
        </motion.div> */}

        <motion.div
          variants={{
            initial: { skewX: -10, opacity: 0 },
            start: { skewX: 0, opacity: 1 },
            hoverState: { scale: 1.05 },
          }}
          initial="initial"
          animate="start"
          whileHover="hoverState"
          whileTap="tapState"
          transition={{ delayChildren: 0.2, staggerChildren: 0.2 }}
        >
          <motion.div variants={childVariants} />
          <motion.div variants={childVariants} />
          <motion.div variants={childVariants} />
        </motion.div>
      </div>

      {/* Rotating Element */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <motion.div
          style={{
            width: 150,
            height: 150,
            borderRadius: 30,
            backgroundColor: "#fff",
            color: "#999",
            fontSize: "40px",
            display: "flex",
            placeItems: "center",
            placeContent: "center",
          }}
          animate={animate}
          onTapStart={() => setAnimate({ scale: 1.25, rotate: 90 })}
          onTap={() => setAnimate({ scale: 1, rotate: 0 })}
        >
          {/* {Math.round(degrees)} */}
        </motion.div>
      </div>
    </>
  );
}
