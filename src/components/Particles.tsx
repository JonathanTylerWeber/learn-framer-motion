import { motion } from "framer-motion";
import { useState, useCallback, useRef, useEffect, useMemo } from "react";

interface Particle {
  id: number;
  color: string;
  size: number;
  offsetX: number;
  offsetY: number;
  duration: number;
}

interface ParticleBackgroundProps {
  hovered: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ hovered }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [maxDistances, setMaxDistances] = useState({ x: 150, y: 150 });
  const maxParticleSize = 80;
  const buffer = 10;

  const [particleData, setParticleData] = useState<Particle[]>([]);

  const calculateMaxDistances = useCallback(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const calculatedMaxX = width / 2 - buffer;
      const calculatedMaxY = height / 2 - buffer;
      setMaxDistances({
        x: calculatedMaxX > 0 ? calculatedMaxX : 0,
        y: calculatedMaxY > 0 ? calculatedMaxY : 0,
      });
    }
  }, [buffer]);

  useEffect(() => {
    calculateMaxDistances();

    window.addEventListener("resize", calculateMaxDistances);
    return () => window.removeEventListener("resize", calculateMaxDistances);
  }, [calculateMaxDistances]);

  const particlesConfig = useMemo(
    () => ({
      count: 12,
      colors: ["bg-lime-400", "bg-teal-400", "bg-indigo-400"],
      minSize: 30,
      maxSize: maxParticleSize,
      maxX: maxDistances.x - 100,
      maxY: maxDistances.y - 100,
    }),
    [maxParticleSize, maxDistances]
  );

  const generateInitialParticleData = useCallback((): Particle[] => {
    return Array.from({ length: particlesConfig.count }).map((_, index) => {
      const randomColor =
        particlesConfig.colors[
          Math.floor(Math.random() * particlesConfig.colors.length)
        ];
      const randomSize =
        Math.floor(
          Math.random() *
            (particlesConfig.maxSize - particlesConfig.minSize + 1)
        ) + particlesConfig.minSize;
      const randomDuration = 1 + Math.random();

      const offsetX =
        Math.random() * 2 * particlesConfig.maxX - particlesConfig.maxX;
      const offsetY =
        Math.random() * 2 * particlesConfig.maxY - particlesConfig.maxY;

      return {
        id: index,
        color: randomColor,
        size: randomSize,
        offsetX,
        offsetY,
        duration: randomDuration,
      };
    });
  }, [particlesConfig]);

  const regenerateParticlePositions = useCallback((): Particle[] => {
    return particleData.map((particle) => ({
      ...particle,
      offsetX: Math.random() * 2 * particlesConfig.maxX - particlesConfig.maxX,
      offsetY: Math.random() * 2 * particlesConfig.maxY - particlesConfig.maxY,
    }));
  }, [particleData, particlesConfig.maxX, particlesConfig.maxY]);

  useEffect(() => {
    setParticleData(generateInitialParticleData());
  }, [generateInitialParticleData]);

  const prevHoveredRef = useRef<boolean>(hovered);

  useEffect(() => {
    if (prevHoveredRef.current && !hovered) {
      setParticleData(regenerateParticlePositions());
    }
    prevHoveredRef.current = hovered;
  }, [hovered, regenerateParticlePositions]);

  const particleElements = particleData.map((particle) => (
    <motion.div
      key={particle.id}
      className={`absolute ${particle.color} rounded-full blur-2xl`}
      style={{
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        top: "70%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        transformOrigin: "center",
      }}
      initial={{ x: 0, y: 0 }}
      animate={{
        x: hovered ? -particle.size / 2 : particle.offsetX,
        y: hovered ? 0 : particle.offsetY,
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        x: {
          duration: particle.duration,
          ease: "easeInOut",
        },
        y: {
          duration: particle.duration,
          ease: "easeInOut",
        },
        opacity: {
          duration: particle.duration * 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
    />
  ));

  return (
    <div className="absolute w-full h-full z-0 mb-32" ref={containerRef}>
      {particleElements}
    </div>
  );
};

export default ParticleBackground;
