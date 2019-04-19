import React from 'react';

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
            name = 'Be careful';
            break;
    }
    return (
        <div>
            {name}
        </div>
    )
}

export default Field;