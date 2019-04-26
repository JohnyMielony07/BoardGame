import React from 'react';
import styled from 'styled-components';

import Modal from '../../UI/Modal/Modal';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
    height: 100%;
    background-color: #69080C;    
    `;

const Number = styled.p`
    width: 100%;
    padding: .4em 0;
    background-color: #450003;
    color: white;
    font-size: 1.2em;
    font-weight: 500;

    @media (max-width: 730px) {        
        font-size: 1.1em;
    }
    `;

const Name = styled.p`
    font-size: 1.6em;
    margin: .4em .1em;
    color: white;

    @media (max-width: 730px) {        
        font-size: 1.4em;        
    }
    `;

const GameOverField = (props) => {
    let modal = null

    if (props.active) {
        modal = <Modal modalType='gameOver' />;
    }

    return (
        <Wrapper>
            {modal}
            <Number>{props.number}</Number>
            <Name>Game Over</Name>
        </Wrapper>
    )
}

export default GameOverField;