import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navbar from './Navbar';


const StyledHeader = styled.header`
    width: 100%;
    height: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Navbar />
        </StyledHeader>
    )
}

export default Header;