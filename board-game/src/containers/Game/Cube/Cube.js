import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cube extends Component {

    onPositionChangeHandler = () => {
        let positionMove = Math.floor(Math.random() * 6 + 1);
        console.log('wylosowana liczba to: ' + positionMove);
        this.props.onAddRoll(positionMove);

        if (positionMove + this.props.playerPos <= this.props.fieldsNumber) {
            this.props.onAddedPosition(positionMove);
        } else {
            const newPosition = this.props.fieldsNumber - (this.props.playerPos + positionMove - this.props.fieldsNumber)
            console.log('nowa pozycja' + newPosition)
            this.props.onSetPosition(newPosition);
        }
    }

    render() {
        console.log(this.props.playerPos);
        return (
            <div>
                <p>ilosc rzutów: {this.props.rollsNumber}</p>
                <p>srednia rzutów: {this.props.rollsAverage}</p>
                <p>ostatni rzut: {this.props.playerPos}</p>
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
        onAddedPosition: (move) => dispatch({ type: 'ADD_POSITION', value: move }),
        onLowerPosition: (move) => dispatch({ type: 'LOWER_POSITION', value: move }),
        onSetPosition: (move) => dispatch({ type: 'SET_POSITION', value: move }),
        onIncrementPosition: () => dispatch({ type: 'INCREMENT_POSITION' }),
        onAddRoll: (roll) => dispatch({ type: 'ADD_ROLL', value: roll })

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cube);