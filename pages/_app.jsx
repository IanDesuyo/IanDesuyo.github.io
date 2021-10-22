import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { AnimatePresence } from "framer-motion";
import "./main.css";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Navbar path={router.asPath} />

      <Box minH="100vh">
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default MyApp;
