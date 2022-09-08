import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Landing from './landing'
import Voting from './voting'
import './styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  
  let component
  if (typeof window !== "undefined") {
    switch (window.location.pathname) {
      case "/":
        component = <Landing />
        break
      case "/voting":
        component = <Voting />
        break
    }
  }

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
