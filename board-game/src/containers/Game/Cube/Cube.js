import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cube extends Component {

    onPositionChangeHandler = () => {
        let positionMove = Math.floor(Math.random() * 6 + 1);
        console.log('wylosowana liczba to: ' + positionMove);

        if (positionMove + this.props.playerPos <= this.props.fieldsNumber) {
            this.props.onAddedPosition(positionMove);

            // let moving = () => {
            //     if (positionMove + this.props.playerPos < this.props.fieldsNumber) {
            //     // this.props.onAddedPosition(positionMove);
            //     let i = 0;
            //     const time = setInterval(() => {
            //         i++;
            //         this.props.onIncrementPosition();
            //         if (i <= positionMove) {
            //             clearInterval(time);
            //             timeeee = setTimeout(moving, 500);
            //         }
            //     }, 500);

            //     var timeeee = setTimeout(moving, 500);

            //    for (let i = 0; i < positionMove; i++) {
            //         setTimeout(() => {
            //             this.props.onIncrementPosition();
            //         }, 1000)

            //     }
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
                <p>{this.props.playerPos}</p>
                <p>{this.props.fieldsNumber}</p>
                <button onClick={this.onPositionChangeHandler} >Roll dice</button>
            </div>
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
        onAddedPosition: (move) => dispatch({ type: 'ADD_POSITION', value: move }),
        onLowerPosition: (move) => dispatch({ type: 'LOWER_POSITION', value: move }),
        onSetPosition: (move) => dispatch({ type: 'SET_POSITION', value: move }),
        onIncrementPosition: () => dispatch({ type: 'INCREMENT_POSITION' })

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cube);