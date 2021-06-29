import React, {useState, useEffect} from "react"
import { Dropfiles, Result } from "../../components"
import {Container} from "./styles"

export function Main() {
    const [response, setResponse] = useState("")
    useEffect(() => {
        console.log("en Main", response)
    }, [response])
    return(
        <Container>
            <Dropfiles setResponse={setResponse}/>
            <Result response = {response}/>
        </Container>  
    )
}