import React from 'react';
import styled from 'styled-components';

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

const Modal = (props) => {
    let modalContent = null;
    switch (props.modalType) {
        case 'gameOver':
            modalContent = <GameOverModal click={props.click} />
            break;
        case 'win':
            modalContent = <WinModal click={props.click} />
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

export default Modal;