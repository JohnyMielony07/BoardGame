import React from 'react';

const GameOverModal = (props) => {
    return (
        <div>
            <p>Game Over</p>
            <p>Next time roll carefully</p>
            <button onClick={props.click}>Restart</button>
        </div>
    )
}

export default GameOverModal;