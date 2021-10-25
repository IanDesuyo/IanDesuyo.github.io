import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { AnimatePresence } from "framer-motion";
import "./main.css";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps, router }) => {
  const handleRouteChange = url => {
    setTimeout(() => {
      // wait until transition is done
      window.gtag("config", "[Tracking ID]", {
        page_path: url,
      });
    }, 1000);
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider>
      <Navbar path={router.asPath} />

      <Box minH="95vh">
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default MyApp;
