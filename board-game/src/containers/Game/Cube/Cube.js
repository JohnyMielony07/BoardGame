import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cube extends Component {

    onPositionChangeHandler = () => {
        let positionMove = Math.floor(Math.random() * 6 + 1);
        this.props.onAddRoll(positionMove);

        if (positionMove + this.props.playerPos <= this.props.fieldsNumber) {
            this.props.onSetPosition(positionMove + this.props.playerPos);
        } else {
            const newPosition = this.props.fieldsNumber - (this.props.playerPos + positionMove - this.props.fieldsNumber);
            this.props.onSetPosition(newPosition);
        }
    }

    render() {
        console.log(this.props.playerPos);
        return (
            <div>
                <button onClick={this.onPositionChangeHandler} >Roll dice</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playerPos: state.playerPosition,
        fieldsNumber: state.fieldsNumber,
        rollsNumber: state.rollsNumber,
        rollsAverage: state.rollsAverage
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSetPosition: (move) => dispatch({ type: 'SET_POSITION', value: move }),
        onAddRoll: (roll) => dispatch({ type: 'ADD_ROLL', value: roll })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cube);