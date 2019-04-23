import React from 'react';

import GameOverField from './GameOverField/GameOverField';
import WinField from './WinField/WinField';
import NormalField from './NormalField/NormalField';

const Field = (props) => {
    var name;

    switch(props.type) {
        case 'normal':
            name = <NormalField number={props.number}/>;
            break;
        case 'win':
            name = <WinField number={props.number}/>;
            break;
        case 'gameOver':
            name = <GameOverField number={props.number} />;
            break;
    }
    return (
        <div>
            {name}
            {props.active}
        </div>
    )
}

export default Field;