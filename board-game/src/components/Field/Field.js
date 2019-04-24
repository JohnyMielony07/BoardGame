import React from 'react';
import styled from 'styled-components';

import GameOverField from './GameOverField/GameOverField';
import WinField from './WinField/WinField';
import NormalField from './NormalField/NormalField';
import BackField from './BackField/BackField';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 10em;
    height: 13em;
    border: .1em solid #30635F;
    margin: .4em;
    border-radius: .3em;
    overflow: hidden;
    position: relative; 
    `;

const Pawn = styled.div`
    display: ${({ active }) => active ? 'block' : 'none'};
    position: absolute;
    transform: translate(50%, 100%);
    width: 5em;
    height: 5em;
    background-color: green;
    
    `;

const Field = (props) => {
    var name;

    switch (props.type) {
        case 'normal':
            name = <NormalField name={props.name} number={props.number} />;
            break;
        case 'win':
            name = <WinField name={props.name} number={props.number} active={props.active} />;
            break;
        case 'gameOver':
            name = <GameOverField name={props.name} number={props.number} active={props.active} />;
            break;
        case 'back':
            name = <BackField name={props.name} number={props.number} active={props.active} />;
            break;
    }
    return (
        <Wrapper>
            {name}
            <Pawn active={props.active} />

        </Wrapper>
    )
}

export default Field;