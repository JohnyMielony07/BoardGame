import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
    height: 100%;
    background-color: #6B3308;
    `;

const Number = styled.p`
    width: 100%;
    padding: .4em 0;
    background-color: #461E00;
    color: white;
    font-size: 1.2em;
    font-weight: 500;
    `;

const Name = styled.p`
    font-size: 1.7em;
    color: white;
    `;

class BackField extends Component {

    render() {
        if (this.props.active) {
            setTimeout(() => this.props.onSetPosition(11), 500)
        }
        return (
            <Wrapper>
                <Number>{this.props.number}</Number>
                <Name>Go to 11 field</Name>
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

const mapDispatchToProps = dispatch => {
    return {
        onSetPosition: (move) => dispatch({ type: 'SET_POSITION', value: move })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BackField);