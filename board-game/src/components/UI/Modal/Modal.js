import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    width: 40em;
    height: 25em;
    top: 50%;
    left: 50%;
    `;

const Modal = () => {
    return (
        <Wrapper>
            You loose
        </Wrapper>
    )
}

export default Modal;