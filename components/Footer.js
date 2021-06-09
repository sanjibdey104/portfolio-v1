import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
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
