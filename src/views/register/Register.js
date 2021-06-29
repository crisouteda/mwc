import React from 'react'
import RegisterForms from './RegisterForms'
import {Box, Heading} from '@chakra-ui/react'
import Layout from '../../layout'

export function Register() {
    return(
        <>
         <Layout>
            <Box maxWidth="600px" mx="auto" pt="100px">
                <Heading>
                    Register
                </Heading>
                <RegisterForms/>
            </Box>
        </Layout>
        </>
    )
}