import React from 'react';
import styled from 'styled-components';

import GameOverField from './GameOverField/GameOverField';
import WinField from './WinField/WinField';
import NormalField from './NormalField/NormalField';
import BackField from './BackField/BackField';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 8.5em;
    height: 11em;
    border: .1em solid #30635F;
    margin: .4em;
    border-radius: .3em;
    overflow: hidden;
    position: relative;

    @media (max-width: 730px) {
        width: 7em;
        height: 10em;
    }
    `;

const Pawn = styled.div`
    display: ${({ active }) => active ? 'block' : 'none'};
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 45%;
    width: 5em;
    height: 5em;
    z-index: 1;

    img {
        width: 100%;
    }
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
            <Pawn active={props.active} ><img src="./pawn.png" /></Pawn>
        </Wrapper>
    )
}

export default Field;