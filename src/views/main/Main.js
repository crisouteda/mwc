import React, {useState, useEffect} from "react"
import {useHistory} from 'react-router'
import { Dropfiles, Result } from "../../components"
import {Container} from "./styles"

export function Main() {
    const [response, setResponse] = useState("")
    const history = useHistory()
    useEffect(() => {
        if (localStorage.getItem("usertoken") === null) {
            history.push("/login")
        }
    }, [response])
    return(
        <Container>
            <Dropfiles setResponse={setResponse}/>
            <Result response = {response}/>
        </Container>  
    )
}