import { motion } from "framer-motion";
import { useState } from "react";

export function Example() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [degrees, setDegrees] = useState(0);

  // Toggle animation state to re-trigger the animation
  const refreshAnimation = () => {
    setIsAnimating(false); // Reset animation state
    setTimeout(() => setIsAnimating(true), 10); // Trigger animation with a slight delay
  };

  const [animate, setAnimate] = useState({ scale: 1, rotate: 0 });

  // Increment the rotation by 45 degrees
  const add45 = () => setDegrees((prevDegrees) => prevDegrees + 45);

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
          backgroundColor: "#333", // Background for better visibility
          position: "relative",
        }}
      >
        {/* Refresh Button */}
        <button
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
        </button>

        {/* Animated Element */}
        <motion.div
          key={isAnimating ? "animate" : "reset"} // Force re-render with a new key
          style={{
            width: 150,
            height: 150,
            borderRadius: 30,
            backgroundColor: "#fff",
            boxShadow: "0px -300px 80px 100px rgba(255, 255, 255, .3)", // Initial shadow
          }}
          initial={{ backgroundColor: "#fff" }} // Initial state
          animate={{
            backgroundColor: "#08f", // Animate to new color
            boxShadow: "0px 0px 80px 30px #fff", // Animate shadow
          }}
          transition={{ duration: 2 }} // Smooth 2-second animation
        />
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
