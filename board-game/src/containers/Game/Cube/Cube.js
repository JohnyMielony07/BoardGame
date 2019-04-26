import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Modal from '../../../components/UI/Modal/Modal';

const Button = styled.button`
    margin: .5em auto;
    background-color: #05423D;
    padding: .3em 2em;;
    color: white;
    font-size: 1.7em;
    border: none;
    border-radius: .3em;
    `;

class Cube extends Component {
    state = {
        modalShow: false,
        modal: null
    }

    onPositionChangeHandler = () => {
        let positionMove = Math.floor(Math.random() * 6 + 1);
        this.props.onAddRoll(positionMove);

        this.setState({
            modalShow: true, modal: (<Modal modalType='roll' diceRoll={positionMove} />)
        })

        if (positionMove + this.props.playerPos <= this.props.fieldsNumber) {
            this.props.onSetPosition(positionMove + this.props.playerPos);
        } else {
            const newPosition = this.props.fieldsNumber - (this.props.playerPos + positionMove - this.props.fieldsNumber);
            this.props.onSetPosition(newPosition);
        }
    }

    componentDidUpdate() {
        if (this.state.modalShow) {

            this.turnOffModal = setTimeout(() => {
                this.setState(() => ({ modalShow: false }))
            }, 500);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.turnOffModal);
    }

    render() {
        let modal = null;
        if (this.state.modalShow) {
            modal = this.state.modal;
        }

        return (
            <div>
                <Button onClick={this.onPositionChangeHandler} >Roll dice</Button>
                {modal}
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