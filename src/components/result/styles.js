import styled from "styled-components";
import { gray } from "../../utils"

export const MSE = styled.p`
    color: ${gray};
    font-weight: 600;
    font-size: 3.3rem;
    margin: 1px 0;
`


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    padding: 40px;
    color: ${gray};

    p {
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 20px 0;
    }


    img {
        margin: 10px;
        width: 200px;
        margin: 0 auto;
    }

`