import React, {Component} from 'react';

class Board extends Component {

    state = {
        fieldsNumber: 20,
        playerPosition: [1],
        winField: [20],
        gameOverField: [11],
        fields: []
    }

    render() {
        let fields = [];
        let outterFields = [];
        for(let i = 0; i < this.state.fieldsNumber; i++) {
             fields.push('normal');                          
        }

        for(let i = 0; i < this.state.winField.length; i++) {
            fields[this.state.winField[i] - 1] ='win';
        }

        for(let i = 0; i < this.state.gameOverField.length; i++) {
            fields[this.state.gameOverField[i] - 1] ='gameOver';
        }

        fields.map(el => {
            
        })

        console.log(fields);

        return (
            <div>
                Board

            </div>
        )
    }
}

export default Board;