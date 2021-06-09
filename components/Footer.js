import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    margin-top: 2rem;
    display: grid;
    place-content: center;
`

function Footer() {
    return (
        <StyledFooter>
            &copy; 2021, Sanjib Kumar Dey
        </StyledFooter>
    )
}

export default Footer;
