// import React, { useState, useEffect } from "react";
import React, { useState} from "react";
import styled from "styled-components";
import initialState from "./initialState";
import { v4 as uuid } from 'uuid';

const StyledGameBoard = styled.div`
    border: black 1px solid;
    display: flex;
    width: 600px;
    height: 600px;
    flex-wrap: wrap;
`

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

const GameBoard = () => {
    
    const [ boardArray, setBoardArray ] = useState(initialState);

    // useEffect(() => {
    //     setMovable();
    // }, [boardArray])

    // const setMovable = () => {
    //     // for(let i = 0; i < boardArray.length; i++){
    //     //     if(boardArray[i + 4].currentValue )
    //     // }
    //     console.log('Start')
    //     for(let i = 0; i < boardArray.length; i++){

    //         const up = boardArray[i].up;
    //         const down = boardArray[i].down;
    //         const left = boardArray[i].left;
    //         const right = boardArray[i].right;

    //         if(boardArray[i].up > -1){
    //             if(!boardArray[up].currentValue){
    //                 console.log('THIS WORRRRRRKKKKKSSSS');
    //             }
    //         }else{
    //             // console.log('nope');
    //         }
    //         if(boardArray[i].down > -1){
    //             // console.log('222222')
    //             if(!boardArray[down].currentValue){
    //                 console.log('THIS WORRRRRRKKKKKSSSS');
    //             }
    //         }else{
    //             // console.log('nope');
    //         }
    //         if(boardArray[i].left > -1){
    //             // console.log('3333333')
    //             if(!boardArray[left].currentValue){
    //                 console.log('THIS WORRRRRRKKKKKSSSS');
    //             }
    //         }else{
    //             // console.log('nope');
    //         }
    //         if(boardArray[i].right > -1){
    //             // console.log('44444');
    //             if(!boardArray[right].currentValue){
    //                 console.log('THIS WORRRRRRKKKKKSSSS');
    //             }
    //         }else{
    //             // console.log('nope');
    //         }
    //     }
        
    // }

    const shuffelGameBoard = () => {
        const randNumArray = [];

        while(randNumArray.length < 16){
            const rand = Math.floor(Math.random() * 16);
            if(randNumArray.includes(rand)){
                continue;
            }else{
                randNumArray.push(rand)
            }
        }
        
        const newBoardArray = [];
        for(let i = 0; i < randNumArray.length; i++){
            if(randNumArray[i] === 15){
                newBoardArray.push({
                    ...boardArray[i],
                    currentValue: ''
                })
            }else{
                newBoardArray.push({
                    ...boardArray[i],
                    currentValue: randNumArray[i]
                })
            }
        }
        setBoardArray(newBoardArray);
    }

    const handleClick = e => {
        // const pieceClicked = parseInt(e.target.textContent, 10);
    }


    return (
        <>
        <h1>Slider Puzzle</h1>
        <StyledGameBoard>
            {boardArray.map(item => {
               return <GameSquare handleClick={handleClick} key={uuid()} squareObj={item}/>
            })}
        </StyledGameBoard>
        <button onClick={shuffelGameBoard}>Start Game(this is for testing)</button>
        </>
    )
}

export default GameBoard;