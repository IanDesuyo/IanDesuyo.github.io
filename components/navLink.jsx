import { Text, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const NavLink = ({ href, path, children, ...props }) => {
  const active = path === href;

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4 }}
        style={{ display: "inline-block" }}
        key={active}
      >
        <NextLink href={href}>
          <Link
            sx={{
              ":hover": { textDecoration: "none", bg: useColorModeValue("gray.100", "gray.500") },
            }}
          >
            <Text fontWeight={active ? "bold" : "normal"} borderBottom={active ? "solid" : "none"}>
              {children}
            </Text>
          </Link>
        </NextLink>
      </motion.div>
    </AnimatePresence>
  );
};

export default NavLink;
