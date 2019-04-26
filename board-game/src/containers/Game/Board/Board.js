import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Field from '../../../components/Field/Field';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
        this.setState({ playerPosition: this.props.playerPos })
        let allFields = [];
        let outterFields = [];
        for (let i = 0; i < this.props.fieldsNumber; i++) {
            allFields.push('normal');
        }

        for (let i = 0; i < this.state.winField.length; i++) {
            allFields[this.state.winField[i] - 1] = 'win';
        }

        for (let i = 0; i < this.state.gameOverField.length; i++) {
            allFields[this.state.gameOverField[i] - 1] = 'gameOver';
        }

        for (let i = 0; i < this.state.backField.length; i++) {
            allFields[this.state.backField[i] - 1] = 'back';
        }

        allFields.map((el, index) => {
            outterFields.push(
                <Field
                    type={el}
                    key={index}
                    active={this.props.playerPos - 1 === index ? 'active' : null}
                    number={index + 1} />
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
        playerPos: state.playerPosition,
        fieldsNumber: state.fieldsNumber
    };
}

export default connect(mapStateToProps)(Board);