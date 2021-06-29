import React from 'react'
import {Box, Grid, GridItem, Text } from '@chakra-ui/react'

function Layout({children}) {
    return (
        <Grid templateColumns={{base:"100%",lg:"repeat(2, 1fr)"}} height="100vh">
            <GridItem display={{base: "none", lg: "initial"}}>
            <Box
                height="100%"
                backgroundImage={`linear-gradient( 0deg, 
                    rgb(71 121 196 / 90%), 
                    rgb(155 81 119 / 90%) ), 
                    url(https://desarrollonic.com/cwsd.php?Z3AuPTQ0Pg/NDA/d2pwZmVpK2hrYGxzIm5tc3h2eWphaTh1fHM.png)`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
            >
            </Box>
            </GridItem>
            <GridItem>
                <Box p="20px">
                    {children}
                </Box>
            </GridItem>
        </Grid>
    )
}

export default Layout
