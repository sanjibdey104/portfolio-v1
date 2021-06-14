import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.85rem;

    p {
        font-family: 'Montserrat', monospace;
    }
`

function Footer() {
    return (
        <StyledFooter>
            <p>&copy; 2021, Sanjib Kumar Dey</p>
            <p>build with Next JS</p>
        </StyledFooter>
    )
}

export default Footer;
