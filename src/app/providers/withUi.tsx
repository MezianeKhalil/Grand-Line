import { ReactNode } from "react"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import '@fontsource-variable/inter'

const theme = extendTheme({
    fonts: {
        heading: `'Inter Variable', sans-serif`,
        body: `'Inter Variable', sans-serif`,
    },
})

export const withUi = (component: () => ReactNode) => () => {
    return <ChakraProvider theme={theme}>{component()}</ChakraProvider>
}
