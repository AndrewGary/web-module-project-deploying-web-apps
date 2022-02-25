import React from "react";
import styled from "styled-components";

const StyledGameSquare = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(25% - 2px);
    height: calc(25% -2px);
    border: red 1px solid;
    font-size: 4rem;
    font-weight: bold;
`

const GameSquare = (props) => {

    const { handleClick } = props;

    return (
        <StyledGameSquare onClick={handleClick}>
            {props.squareObj.currentValue}
        </StyledGameSquare>
    )

}

export default GameSquare;