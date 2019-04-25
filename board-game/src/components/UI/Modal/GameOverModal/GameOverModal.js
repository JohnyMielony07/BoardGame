import React from 'react';

const GameOverModal = (props) => {
    return (
        <div>
            <p>Game Over</p>
            <p>Next time roll carefully</p>
            <p>Average rolling: {props.average}</p>
            <p>Rolling number: {props.number}</p>
            <button onClick={props.click}>Restart</button>
        </div>
    )
}

export default GameOverModal;