import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Store from "./data/Store";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#E00420",
      200: "#DFE2E4",
      300: "#B6BBBE",
      400: "#9DA5A8",
      500: "#737A80",
      600: "#31343A",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Store>
        <App />
      </Store>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
