import React from 'react'
import LoginForms from './LoginForms'
import {Box, Heading} from '@chakra-ui/react'
import Layout from '../../layout'

export function Login() {
    return(
        <>
            <Layout>
                <Box maxWidth="600px" mx="auto" pt="100px">
                    <Heading>
                        Login
                    </Heading>
                    <LoginForms/>
                </Box>
            </Layout>
        </>
    )
}