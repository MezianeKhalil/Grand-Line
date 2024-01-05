import { ReactNode } from "react"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        heading: `'Poppins', sans-serif`,
        body: `'Poppins', sans-serif`,
    },
})

export const withUi = (component: () => ReactNode) => () => {
    return <ChakraProvider theme={theme}>{component()}</ChakraProvider>
}
