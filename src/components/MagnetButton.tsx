import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import mobileAndTabletCheck from "../hooks/useMobileCheck";

interface MagnetButtonProps {
  children: ReactNode;
}

export default function MagnetButton({ children }: MagnetButtonProps) {

  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const isMobile = mobileAndTabletCheck();

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x, y });
    }
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position

  return (
    <motion.div
      ref={ref}
      onMouseMove={isMobile ? undefined : mouseMove}
      onMouseLeave={isMobile ? undefined : mouseLeave}
      animate={isMobile ? undefined : { x, y }}
      transition={isMobile ? undefined : { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className=" p-2"
    >

      {children}

    </motion.div>
  )
}