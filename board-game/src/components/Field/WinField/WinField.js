import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Modal from '../../UI/Modal/Modal';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
    height: 100%;
    background-color: #0E5706;
    `;

    const Number = styled.p`
    width: 100%;
    padding: .4em 0;
    background-color: #053900;
    color: white;
    font-size: 1.2em;
    font-weight: 500;
    `;

    const Name = styled.p`
    font-size: 1.7em;
    color: white;
    `;

class WinField extends Component {
    render() {
        let modal = null

        if (this.props.active) {
            modal = <Modal modalType='win' click={() => { this.props.onSetPosition() }} />;
        }

        return (
            <Wrapper>
                {modal}     
                <Number>{this.props.number}</Number>
                <Name>Finish</Name>
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
        onSetPosition: () => dispatch({ type: 'SET_POSITION', value: 1 }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WinField);