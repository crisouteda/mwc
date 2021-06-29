import React from 'react'
import {Container,MSE} from './styles'
import resultImg from '../../assets/icons/stadistics.svg'

export function Result({response}) {
    return (
        <Container>
            <div>
                <h1>Mean squared error</h1>
                <img src={resultImg} />
                {!isNaN(parseFloat(response).toFixed(2)) && 
                    <>
                        <h1>Here is your result!</h1>
                        <MSE>{parseFloat(response).toFixed(2)}</MSE>
                    </>
                }
            </div>
        </Container>
    )
}