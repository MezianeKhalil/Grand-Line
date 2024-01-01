import { ReactNode } from "react";

import { ChakraProvider } from "@chakra-ui/react";

export const withUi = (component: () => ReactNode) => () => {
  return <ChakraProvider>{component()}</ChakraProvider>;
};
