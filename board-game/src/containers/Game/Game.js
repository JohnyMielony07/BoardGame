import React, {Component} from 'react';

import Board from './Board/Board';
import Cube from './Cube/Cube';

class Game extends Component {
    render() {
        return (
            <div>
                <Cube />
                <Board />
            </div>
        )
    }
}

export default Game;