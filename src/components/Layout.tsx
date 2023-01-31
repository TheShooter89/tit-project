import * as React from "react"
import {
    Box,
    Flex,
    Grid,
    GridItem,
} from "@chakra-ui/react"

import TopBar from "./TopBar";
import Footer from "./Footer";

const HEADER_HEIGHT_VH = '9vh';
const MAIN_HEIGHT_VH = '85vh';
const FOOTER_HEIGHT_VH = '6vh';

const placeholder_text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc massa, tempus non mauris at, bibendum eleifend lorem. Nullam dignissim gravida est ut suscipit. Suspendisse aliquam urna ante, auctor suscipit turpis interdum ut. Sed nisi est, lobortis sed diam id, eleifend accumsan turpis. Ut tristique dolor risus, id sagittis enim sagittis sed. Morbi tempor pellentesque nisl vitae porttitor. Nam luctus lacus augue. Nullam consectetur augue at sodales vehicula. Nullam felis massa, condimentum non neque eu, aliquam hendrerit erat. Nullam aliquet iaculis quam a semper. In orci quam, volutpat vitae fermentum in, faucibus ac ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

    Aenean tristique nulla placerat est sodales ullamcorper. Nunc viverra nunc nec fringilla mollis. Nulla vulputate molestie orci. Nam vel elementum neque. Vestibulum accumsan blandit enim, sit amet auctor nibh fringilla non. Nullam pellentesque risus ut magna pharetra, vitae vulputate eros venenatis. Donec egestas nibh et cursus vestibulum. Cras elementum leo non ex ultricies, sed sollicitudin neque consequat. Curabitur eleifend orci in quam efficitur, molestie porttitor enim molestie. Proin pellentesque dictum dui, et feugiat risus facilisis ut. Nunc non tortor semper lectus placerat molestie. Nulla eget ultricies justo. Pellentesque consequat mauris non metus dictum, nec hendrerit turpis interdum. Donec consectetur suscipit nibh, nec pellentesque tortor vestibulum ac. Cras faucibus pharetra ipsum et condimentum.

    Fusce suscipit nisi nibh, sed mollis lorem lacinia sed. Aenean commodo neque sed dui sodales ultrices. Pellentesque interdum purus eros, ut lacinia massa auctor egestas. Etiam interdum neque non lacus dapibus, efficitur condimentum eros placerat. Pellentesque sagittis, ligula ac tempus maximus, tortor velit blandit tellus, ut suscipit justo dolor mollis augue. Maecenas eget dolor suscipit, mollis eros quis, dignissim erat. Nullam ipsum nunc, pretium sed porttitor ac, convallis in mauris. Suspendisse leo turpis, tempus nec ligula eu, iaculis semper diam. Nullam suscipit consequat dui vitae fermentum.

    Proin mattis neque in convallis imperdiet. Nulla euismod ante id lacus pretium, eget luctus lorem maximus. Integer imperdiet risus varius, placerat ipsum sit amet, fringilla eros. Nunc feugiat nunc aliquam tortor faucibus, sit amet tempus metus vestibulum. Sed ut porttitor dolor, id dignissim dui. Nam sit amet feugiat ligula. Suspendisse potenti. Cras facilisis enim at facilisis finibus. Morbi porta vel neque eu pellentesque. Duis nec leo lacus. Quisque bibendum erat quis urna condimentum eleifend. In id fermentum odio, a aliquam nisi. Curabitur aliquet urna quam, ut tempor ipsum rhoncus vel. Donec pellentesque eu erat et semper.
    `;

const Layout = (props: React.PropsWithChildren) => (
    <React.Fragment>
        <Box
            textAlign='center'
            fontSize='x1'
            p={0}
            m={0}
        >
            <Flex
                flexDir='column'
            >
                <Box
                    h={HEADER_HEIGHT_VH}
                >
                    headerr
                </Box>

                <Box
                    h={MAIN_HEIGHT_VH}
                    overflow='scroll'
                >
                    {placeholder_text}
                </Box>

                <Box
                    h={FOOTER_HEIGHT_VH}
                >
                    footer
                </Box>
            </Flex>
        </Box>
    </React.Fragment>
)

export default Layout;
