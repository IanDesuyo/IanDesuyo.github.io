import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { rotate: -45, scale: 0 },
  enter: { rotate: 0, scale: 1 },
  exit: { rotate: 45, scale: 0 },
};

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4 }}
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue("blackAlpha", "orange")}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeButton;
