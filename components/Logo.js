import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h3`

    font-size: calc(0.85rem, 2vw);
    cursor: pointer;
    margin-right: auto;
    padding: 0.5rem;

    color: ${({ theme }) => theme.textColor};
    border: 2px solid ${({theme}) => theme.textColor};
    border-bottom-right-radius: 50%;

    display: grid;
    place-content: center;
`

const Logo = () => {
    return (
        <Link href="/">
            <StyledLogo>SKD</StyledLogo>
        </Link>
    )
}

export default Logo;