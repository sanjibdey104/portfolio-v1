import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h2`
    cursor: pointer;
    font-size: 2.5rem;
    background-color: ${({theme}) => theme.backgroundColor};
    color: ${({ theme }) => theme.primary};
    margin-right: auto;

    display: grid;
    place-content: center;

    border-radius: 50%;
    height: 3.2rem;
    width: 3.2rem;
    position: relative;
    overflow: hidden;
    box-shadow: var(--box-shadow);

    &::after {
        content: "";
        height: 0.9rem;
        width: 0.9rem;
        border-radius: 50%;
        background-color: ${({theme}) => theme.primary};

        position: absolute;
        top: 0;
        right: 0;
    }

`

const Logo = () => {
    return (
        <Link href="/">
            <StyledLogo>S</StyledLogo>
        </Link>
    )
}

export default Logo;