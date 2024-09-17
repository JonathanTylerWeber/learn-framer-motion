import { RootState } from '../store';
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const overlayVariants = {
  hidden: { y: "-5%", borderRadius: "0%" },
  visible: { y: "-100%", borderRadius: "100%" },
  exit: { y: "-5%", borderRadius: "0%" },
};

const PageTransitionOverlay = () => {

  const text = useSelector((state: RootState) => state.page.text);

  return (
    <motion.div
      className="fixed inset-0 bg-gray-800 z-40 h-[110vh]"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 1.25, ease: "anticipate" }}
    >
      <p className="text-white text-6xl flex justify-center items-center font-bold mt-96">{text}</p>
    </motion.div>
  );
};

export default PageTransitionOverlay;
