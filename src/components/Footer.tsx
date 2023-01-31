import * as React from "react"
import {
    Heading,
    Grid,
    GridItem,
    Flex,
} from "@chakra-ui/react"

const Footer = (props: React.PropsWithChildren) => (
    <React.Fragment>
        <Flex
            as='footer'
            pos='fixed'
            w='100%'
            h='100%'
            maxH='9vh'
            {...props}
        >
            <Grid
                h='100%'
                templateColumns='repeat(3, 0fr)'
                gap={0}
            >
                <GridItem w='100%' bg='blue.500'></GridItem>

                <GridItem w='100%' bg='blue.500'>
                    <Heading>I'm a FOOTER!</Heading>
                </GridItem>

                <GridItem w='100%' bg='blue.500'></GridItem>
            </Grid>
        </Flex>
    </React.Fragment>
)

export default Footer;
