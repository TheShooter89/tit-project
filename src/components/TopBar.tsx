import * as React from "react"
import {
    Grid, GridItem,
} from "@chakra-ui/react"

const TopBar = (props: React.PropsWithChildren) => (
    <React.Fragment>
        <Grid
            h='100vh'
            templateColumns='repeat(3, 0fr)'
            gap={0}
            {...props}
        >
            <GridItem w='100%' bg='blue.500'></GridItem>

            <GridItem w='100%' bg='blue.500'></GridItem>

            <GridItem w='100%' bg='blue.500'></GridItem>
        </Grid>
    </React.Fragment >
)

export default TopBar;
