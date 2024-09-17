import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 100; // Increase rotation range for more dramatic effect
// const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 500, damping: 1 });
  const ySpring = useSpring(y, { stiffness: 500, damping: 1 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;

    const rX = (mouseY - 0.5) * ROTATION_RANGE * -1; // More dramatic X rotation
    const rY = (mouseX - 0.5) * ROTATION_RANGE; // More dramatic Y rotation

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        width: '50px', // Set width and height for a square card
        height: '50px',
        backgroundColor: 'white', // White background for the card
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)', // Optional: shadow for better effect
      }}
      className="relative"
    >
      <div
        style={{
          transform: "translateZ(100px)", // Adjust for a more pronounced effect
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 grid place-content-center rounded-xl"
      >
      </div>
    </motion.div>
  );
};

export default TiltCard;
