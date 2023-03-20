import * as React from "react"
import {
    Flex,
    Heading,
} from "@chakra-ui/react"

// for ratios, inspired by Fibonacci
// Spiral, see: https://upload.wikimedia.org/wikipedia/commons/1/15/Fibonacci_Squares.svg
// header: 3
// body: 29
// footer: 2

const TopBar = (props: React.PropsWithChildren) => (
    <React.Fragment>
        <Flex
            as='header'
            w='100%'
            h='100%'
            bgColor='#F2E227'
            {...props}
        >
            <Heading>I'm an Heading!</Heading>
        </Flex>
    </React.Fragment >
)

export default TopBar;
