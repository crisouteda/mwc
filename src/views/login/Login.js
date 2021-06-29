import React from 'react'
import {useHistory} from 'react-router-dom'
import LoginForms from './LoginForms'
import {Box, Heading, Text} from '@chakra-ui/react'

import Layout from '../../layout'

export function Login() {

    const history = useHistory()

    return(
        <>
            <Layout>
                <Box maxWidth="600px" mx="auto" pt="100px">
                    <Heading>
                        Login
                    </Heading>
                    <LoginForms/>
                    <Text>Still not a member? <Text as="span" color="blue" fontWeight="bold" cursor="pointer" onClick={() => history.push("/register")}>Register </Text></Text>
                </Box>
            </Layout>
        </>
    )
}