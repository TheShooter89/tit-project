import * as React from "react"
import {
    Flex,
} from "@chakra-ui/react"

import TopBar from "./TopBar";
import Footer from "./Footer";

export const Layout = (props: React.PropsWithChildren) => (
    <React.Fragment>
        <Flex
            direction='column'
            align='center'
            m='0 auto'
            {...props}
        >
            <TopBar />
            {props.children}
            <Footer />
        </Flex>
    </React.Fragment>
)
