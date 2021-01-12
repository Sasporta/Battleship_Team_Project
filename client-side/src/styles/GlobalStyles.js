import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
      height: 100%;
      background: #000000;
   zoom: 90%;
    }

    html {
      font-size: 10px;
  
    }

    body {
      font-size: 1.6rem;
      font-family:sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 25px;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`;

export default GlobalStyles

// UserPixel + OpponentPixel components:

export const StandardPixel = styled.div`
  width: 10%;
  height: 10%;
  //50px
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegularSquare = styled(StandardPixel)`
  border: 1px solid #00FF41;
`;

export const MissHit = styled(StandardPixel)`
  border: 3px solid #00FF41;
  background: #00FF41;
  opacity: 0.3;
`;

export const AroundSink = styled(StandardPixel)`
  border: 3px solid #00FF41;
  background: red;
  opacity: 0.3;
`;

export const ShipHit = styled(StandardPixel)`
  border: 1px solid lightblue;
  background: rgba(255, 153, 153, 0.5);
  color: red;
  font-size: 5vh;
`;

export const ShipSink = styled(StandardPixel)`
  background: grey;
`;

export const ShipPart = styled(StandardPixel)`
  border: 3px solid blue;
  background: rgba(0, 0, 255, 0.3);
  // background: white;
`;

export const OpponentSquare = styled(RegularSquare)`

    :hover {
      background: #00ff41;
      opacity: 0.5;
    }
`;

//--------------------------------------------

// UserGrid + OpponentGrid components:

export const PlayerGrid = styled.div`
display: flex;
flex-wrap: wrap;
height: 500px;
width: 500px;
//500px
color: #003B00;
`;

export const OtherPlayerGrid = styled(PlayerGrid)`
cursor: ${({ lock_other_player_board }) => (lock_other_player_board ? 'not-allowed' : 'pointer')};
opacity: ${({ lock_other_player_board }) => (lock_other_player_board ? '0.3' : '1')};
`;

export const Wrapper = styled(PlayerGrid)`
height: 500px;
width: 800px;
  border: none;
  color: white;
  margin: 10%;
  justify-content: center;

`;

export const GridHeaders = styled.span`
text-align: center;
`;

//--------------------------------------------



export const Button = styled.div`
margin: 2%;
  // font-family: "Expletus Sans";
  text-align: left;
  font-size: 2rem;
  width: 60%;
  height: 20%;
  text-align: center;
  border-radius: 3rem;
  font-weight: 400;
  color: white;
  background: #003B00;
  border: 1px solid #00FF41;
  box-shadow: inset 0 0.1rem 1.5rem lightgrey;
  cursor: pointer;
  -webkit-user-select: none;
-ms-user-select: none;
user-select: none;

    &:focus {
      outline: none;
      box-shadow: 0px 0px yellow, -1em 0 04em white;
    }
    &:hover {
      background: #1aff1a;
    }
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LittleWrapper = styled.div`
width: 100%;
padding: 2%;
display: flex;
align-items: center;
justify-content: center;
`