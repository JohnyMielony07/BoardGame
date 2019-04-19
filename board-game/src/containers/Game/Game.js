import React, {Component} from 'react';

import Board from './Board/Board';

class Game extends Component {
    render() {
        return (
            <div>
                Game Setion
                <Board />
            </div>
        )
    }
}

export default Game;