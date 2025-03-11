import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Provider } from "@components/ui/provider";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
