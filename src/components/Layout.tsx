import * as React from "react"
import {
    Flex,
} from "@chakra-ui/react"

export const Layout = (props: React.PropsWithChildren) => (
    <React.Fragment>
        <Flex
            direction='column'
            align='center'
            m='0 auto'
            {...props}
        >
            {props.children}
        </Flex>
    </React.Fragment>
)
