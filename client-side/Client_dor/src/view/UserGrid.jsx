import React, { useContext, useState } from "react"
import styled from "styled-components"
import { BsContext } from "../stateManager/stateManager"
// Last update - Dor
const Pixel = (props) => {
    let properties = props;
    // return <h1>none</h1>
    if (properties.status === 'SEA') {
        return (
            <Regularsquare>c</Regularsquare>
        )
    }
    else if (properties.status === 'MISS') {
        return <Misshit>▪️</Misshit>
    }
    else if (properties.status === 'HIT' || properties.status === 'SINK') {
        return <Shiphit>X</Shiphit>
    }
    else {
        console.log("ELSE IS: ", properties.status)
        return <Shippart></Shippart> }
}

const UserGrid = () => {
    const { ships_array, set_ships_array, grid_array, set_grid_array, grid_clicks, set_grid_clicks } = useContext(BsContext)
    const [abc_store, set_abc_store] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'])
    const [num_store, set_num_store] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const show = (x, y) => {
        if (!grid_clicks[x + y]) {
            grid_clicks[x + y] = x + y;
            console.log(grid_clicks)
            console.log(x, y);
            const PixelObj = {
                x,
                y
            }
            return PixelObj
        }
        // console.log(grid_clicks);

    }
    const pixelStatus = (x, y) => {
        let obj = grid_array[x][y]
        return obj.toString();
    }
    return (
        <Wrapper>Your Grid
            <NumWrapper>
                {num_store.map(num => <NumDiv>{num}</NumDiv>)}
            </NumWrapper>
            <AbcWrapper>
                {abc_store.map(abc => <AbcDiv>{abc}</AbcDiv>)}
            </AbcWrapper>
            <Grid>
                {grid_array.map((xArr, Xindex) => xArr.map((yArr, Yindex) => <Pixel id={Xindex} value={Yindex} key={`g${Yindex}`} onClick={() => { show(Xindex, Yindex) }} status={pixelStatus(Xindex, Yindex)}></Pixel>))}
            </Grid>
        </Wrapper>
    )
}
export default UserGrid

const StyledPixel = styled.div`
min-width: 2rem;
min-height: 2rem;
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border: 1px solid #00FF41;
if (props.status === 'SEA') { return background: blue }
`
const Grid = styled.div`
display: flex;
flex-wrap: wrap;
height: 500px;
width: 500px;
color: #003B00;

`
const Wrapper = styled(Grid)`
border: none;
color: white;
`
const AbcWrapper = styled.div`
border: 2px solid black;
min-height: 2rem;
width: 500px;
display: flex;

`
const NumWrapper = styled.div`
// border: 1px solid white;
width: 50px;
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
position: absolute;
left: 230px;
top: 345px;
`
const AbcDiv = styled.div`
flex-basis: 10%;
height: 50px;
width: 50px;
// border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;

`
const NumDiv = styled.div`
flex-basis: 10%;
height: 50px;
margin-left: 5px;
// border: 1px solid white;
display: flex;
justify-content: center;
width: 50px;

`








const Regularsquare = styled.div`
  border: 1px solid;
  border-color: #00FF41;
  width: 50px;
  height: 50px;
  :hover {
    background: #00FF41;
    opacity: 0.5;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Misshit = styled.div`
background: #00FF41;
opacity: 0.3;
border: 3px solid #00FF41;
display: flex;
  align-items: center;
  justify-content: center;
width: 50px;
height: 50px;
`;
const Invlidmove = styled.div`
  border: 1px solid;
  color: grey;
  border-color: lightblue;
  background: rgba(224, 224, 224.5);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;
const Shiphit = styled.div`
  border: 1px solid;
  color: red;
  font-size: 5vh;
  border-color: lightblue;
  background: rgba(255, 153, 153, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

const Shippart = styled.div`
  border: 3px solid blue;
//   background-color: lightgray;
width: 50px;
height: 50px;
  cursor: move;
`;

const Resetgrid = styled.button`
  border: 1px solid;
  background-color: white;
  color: blue;
  min-width: 6vh;
  min-height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Randomgrid = styled.button`
  border: 1px solid;
  background-color: white;
  color: blue;
  min-width: 6vh;
  min-height: 6vh;
  cursor: pointer;
`;
const Playbtn = styled.button`
  border: 1px solid #d6d6d6;
  padding :.2em .8em ; 
  background-color: linear-gradient(to bottom,rgba(225,250,225,1) 0,rgba(195,222,197,1) 100%);
  color:blue;
  cursor : pointer ;
  box-shadow : 0 2px 6px rgba(0,0,0,.25)
  width: 10vh;
  height:6vh;
`;
