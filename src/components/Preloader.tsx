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

const overlayVariants = {
  hidden: { y: "0%", borderRadius: "0%" },
  visible: { y: "-100%", borderRadius: "100%" },
  exit: { y: "0%", borderRadius: "0%" },
};

const Preloader = () => {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-gray-800 z-50 flex justify-center items-center "
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 2, ease: "backOut", delay: 2.5 }}
      >

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
            stroke="rgb(94 234 212)"
            strokeWidth="68"
          >
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M200 1130 l0 -935 233 233 232 232 233 -233 233 -233 234 236 235 235 235 -235 235 -236 0 936 0 935 -468 -468 -467 -467 -468 467 -467 468 0 -935z"
            />
          </g>
        </motion.svg>

      </motion.div>
    </>
  )
}

export default Preloader