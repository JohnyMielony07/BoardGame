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

const WinModal = (props) => {
    return (
        <div>
            <p>Congratulations</p>
            <p>You win!</p>            
            <p>Average rolling: {props.average}</p>
            <p>Rolling number: {props.number}</p>
            <Button onClick={props.click}>Restart</Button>
        </div>
    )
}

export default WinModal;