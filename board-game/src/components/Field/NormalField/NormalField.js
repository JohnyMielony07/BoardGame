import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
    height: 100%;
    
    
    `;

    const Number = styled.p`
    width: 100%;
    padding: .4em 0;
    background-color: #30635F;
    color: white;
    font-size: 1.2em;
    font-weight: 500;

    @media (max-width: 730px) {        
        font-size: 1.1em;        
    }
    `;

const NormalField = (props) => {
    return (
        <Wrapper>            
            <Number>{props.number}</Number>
        </Wrapper>
    )
}

export default NormalField;