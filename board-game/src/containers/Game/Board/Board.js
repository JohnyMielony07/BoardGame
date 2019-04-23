import React, {Component} from 'react';
import styled from 'styled-components';

import Field from '../../../components/Field/Field';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    `;

class Board extends Component {

    state = {
        fieldsNumber: 20,
        playerPosition: 1,
        winField: [20],
        gameOverField: [11],
        fields: []
    }

    render() {
        let fields = [];
        var outterFields = [];
        for(let i = 0; i < this.state.fieldsNumber; i++) {
             fields.push('normal');                          
        }

        for(let i = 0; i < this.state.winField.length; i++) {
            fields[this.state.winField[i] - 1] ='win';
        }

        for(let i = 0; i < this.state.gameOverField.length; i++) {
            fields[this.state.gameOverField[i] - 1] ='gameOver';
        }

        fields.map((el, index) => {
            outterFields.push(
                <Field
                type={el}
                key={index}                
                active={this.state.playerPosition-1 === index ? '--active' : null}
                number={index + 1}
                />
            )
        })
        

        console.log(fields);

        return (
            <Wrapper>
                {outterFields}
            </Wrapper>
        )
    }
}

export default Board;