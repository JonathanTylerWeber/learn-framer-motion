import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  return (
    <div className="m-10">
      <p className="text-white">About</p>

      <motion.svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="225.000000pt"
        height="225.000000pt"
        viewBox="0 0 225.000000 225.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
          fill="none"
          stroke="#fff"
          strokeWidth="68"
        >
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M200 1130 l0 -935 233 233 232 232 233 -233 233 -233 234 236 235
            235 235 -235 235 -236 0 936 0 935 -468 -468 -467 -467 -468 467 -467 468 0
            -935z m480 395 c345 -344 431 -425 452 -425 21 0 108 81 455 425 235 234 431
            425 436 425 4 0 7 -369 7 -820 0 -619 -3 -820 -12 -820 -6 0 -98 85 -203 190
            -140 139 -198 190 -215 190 -18 0 -81 -56 -240 -215 -118 -118 -220 -215 -225
            -215 -5 0 -106 97 -225 215 -180 178 -222 215 -245 215 -24 0 -62 -33 -219
            -190 -105 -105 -194 -190 -198 -190 -5 0 -8 369 -8 820 0 451 3 820 7 820 4 0
            199 -191 433 -425z"
          />
        </g>
      </motion.svg>
    </div>
  );
};

export default About;
