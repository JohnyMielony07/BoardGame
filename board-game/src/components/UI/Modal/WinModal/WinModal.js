import React from 'react';

const WinModal = (props) => {
    return (
        <div>
            <p>Congratulations</p>
            <p>You win!</p>
            <button onClick={props.click}>Restart</button>
        </div>
    )
}

export default WinModal;