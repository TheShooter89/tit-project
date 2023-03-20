import * as React from "react"
import {
    ChakraProvider,
    theme,
} from "@chakra-ui/react"

import Layout from './components/Layout';

export const App = () => (
    <ChakraProvider theme={theme}>
        <Layout />
    </ChakraProvider>
)
