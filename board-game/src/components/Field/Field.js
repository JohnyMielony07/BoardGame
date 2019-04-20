import React from 'react';

import GameOverField from './GameOverField/GameOverField';

const Field = (props) => {
    var name;

    switch(props.type) {
        case 'normal':
            name = 'normal';
            break;
        case 'win':
            name = 'Finish';
            break;
        case 'gameOver':
            name = <GameOverField />;
            break;
    }
    return (
        <div>
            {name}
        </div>
    )
}

export default Field;