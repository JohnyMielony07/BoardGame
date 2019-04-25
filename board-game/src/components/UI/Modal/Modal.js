import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import GameOverModal from './GameOverModal/GameOverModal';
import WinModal from './WinModal/WinModal';

const Backdrop = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    `;

const ModalWrapper = styled.div`
    position: absolute;
    background-color: white;
    width: 20em;
    height: 10em;
    `;

class Modal extends Component {

    render() {
        let modalContent = null;
        switch (this.props.modalType) {
            case 'gameOver':
                modalContent = <GameOverModal
                    click={this.props.click}
                    number={this.props.rollsNumber}
                    average={this.props.rollsAverage} />
                break;
            case 'win':
                modalContent = <WinModal
                    click={this.props.click}
                    number={this.props.rollsNumber}
                    average={this.props.rollsAverage} />
                break;
        }
        return (
            <Backdrop>
                <ModalWrapper>
                    {modalContent}
                </ModalWrapper>

            </Backdrop>
        )
    }

}

const mapStateToProps = state => {
    return {
        rollsNumber: state.rollsNumber,
        rollsAverage: state.rollsAverage
    };
}

export default connect(mapStateToProps)(Modal);