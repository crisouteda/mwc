import styled from "styled-components";
import { IsPhone } from "../../utils";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;

  section {
    width: 50%;
    height: 100vh;
  }

  @media (max-width: ${IsPhone}) {
    flex-direction: column;

    section {
      width: 100%;
    }
  }
  `;
  
  // position: fixed;
  // bottom: 100px;
  // width: 300px;
  // text-align: center;
  // left: calc(50% - 150px);