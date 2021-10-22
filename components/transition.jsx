import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Transition = ({ children }) => {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
    >
      {children}
    </motion.main>
  );
};

export default Transition;
