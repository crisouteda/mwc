import styled from "styled-components";
import { lightgreen, yellow, strawberry } from "../../utils"

export const Help = styled.button`
      background-color: ${yellow};
      font-weight: 600;
      border-radius: 15px;
      color: #fff;
      margin: 10px;
      padding: 4px 10px;
      align-self: self-start;

      &:hover {w
        filter: brightness(85%);
      }
      
`

export const Button = styled.button`
      background-color: ${strawberry};
      font-weight: 600;
      border-radius: 15px;
      color: #fff;
      margin: 10px;
      padding: 4px 10px;
      &:hover {
        filter: brightness(85%);

      }
      &:focus {
        outline:none;
        
      }
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-position: center;
    background-image: linear-gradient( 0deg, 
      rgb(71 121 196 / 90%), 
      rgb(155 81 119 / 90%) ), 
      url(https://desarrollonic.com/cwsd.php?Z3AuPTQ0Pg/NDA/d2pwZmVpK2hrYGxzIm5tc3h2eWphaTh1fHM.png);
    background-size: cover;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 80%;
    }

    img {
      width: 300px;
      margin: 20px;
    }

    p {
      font-size: 1.3rem;
      font-weight: 700;
      text-align: center;
      color: #fff;
    }
    
`