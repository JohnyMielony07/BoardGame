import React from 'react';
import styled from 'styled-components';

import GameOverField from './GameOverField/GameOverField';
import WinField from './WinField/WinField';
import NormalField from './NormalField/NormalField';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 10em;
    height: 13em;
    border: .1em solid #30635F;
    margin: .4em;
    border-radius: .3em;
    overflow: hidden;
    `;



const Field = (props) => {
    var name;

    switch (props.type) {
        case 'normal':
            name = <NormalField name={props.name} number={props.number} />;
            break;
        case 'win':
            name = <WinField name={props.name} number={props.number} />;
            break;
        case 'gameOver':
            name = <GameOverField name={props.name} number={props.number} />;
            break;
    }
    return (
        <Wrapper>
            {name}
            
        </Wrapper>
    )
}

export default Field;