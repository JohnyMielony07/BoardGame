import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin: .5em auto;
    background-color: #30635F;
    padding: .2em 1em;;
    color: white;
    font-size: 1.4em;
    border: none;
    border-radius: .3em;
    `;

const GameOverModal = (props) => {
    return (
        <div>
            <p>Game Over</p>
            <p>Next time roll carefully</p>
            <p>Average rolling: {props.average}</p>
            <p>Rolling number: {props.number}</p>
            <Button onClick={props.click}>Restart</Button>
        </div>
    )
}

export default GameOverModal;