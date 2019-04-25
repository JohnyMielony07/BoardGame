import React from 'react';
import styled from 'styled-components';

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

const WinField = (props) => {
    let modal = null

    if (props.active) {
        modal = <Modal modalType='win' />;
    }

    return (
        <Wrapper>
            {modal}
            <Number>{props.number}</Number>
            <Name>Finish</Name>
        </Wrapper>
    )
}

export default WinField;