import React from 'react';

const WinModal = (props) => {
    return (
        <div>
            <p>Congratulations</p>
            <p>You win!</p>            
            <p>Average rolling: {props.average}</p>
            <p>Rolling number: {props.number}</p>
            <button onClick={props.click}>Restart</button>
        </div>
    )
}

export default WinModal;