import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Field from '../../../components/Field/Field';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    `;

class Board extends Component {

    state = {
        fieldsNumber: 20,
        playerPosition: this.props.playerPos,
        winField: [20],
        backField: [19],
        gameOverField: [12],
        fields: []
    }

    shouldComponentUpdate(nextProps) {
        return this.state.playerPosition !== nextProps.playerPos
    }

    render() {
        this.setState({playerPosition: this.props.playerPos})
        let fields = [];
        var outterFields = [];
        for (let i = 0; i < this.state.fieldsNumber; i++) {
            fields.push('normal');
        }

        for (let i = 0; i < this.state.winField.length; i++) {
            fields[this.state.winField[i] - 1] = 'win';
        }

        for (let i = 0; i < this.state.gameOverField.length; i++) {
            fields[this.state.gameOverField[i] - 1] = 'gameOver';
        }

        for (let i = 0; i < this.state.backField.length; i++) {
            fields[this.state.backField[i] - 1] = 'back';
        }

        fields.map((el, index) => {
            outterFields.push(
                <Field
                    type={el}
                    key={index}
                    active={this.state.playerPosition - 1 === index ? 'active' : null}
                    number={index + 1}
                />
            )
        })
        

        return (
            <Wrapper>
                {outterFields}
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        playerPos: state.playerPosition
    };
}

export default connect(mapStateToProps)(Board);