import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

// const StyledLogo = styled.h3`

//     font-size: calc(0.85rem, 2vw);
//     cursor: pointer;
//     margin-right: auto;
//     padding: 0.5rem;

//     color: ${({ theme }) => theme.textColor};
//     border: 2px solid ${({theme}) => theme.textColor};
//     border-bottom-right-radius: 50%;

//     display: grid;
//     place-content: center;
// `


const StyledLogo = styled.h3`

    font-size: 1rem;
    cursor: pointer;
    margin-right: auto;
    padding: 0.5rem;

    color: ${({ theme }) => theme.textColor};
    border-bottom-right-radius: 50%;

    display: grid;
    place-content: center;
    position: relative;

    &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    border-left: 2px solid black;
    border-top: 2px solid black;
    }

    &::after {
        content: "";
        width: 1rem;
        height: 1rem;
        position: absolute;
        right: 0;
        bottom: 0;
        display: block;
        border-right: 2px solid black;
        border-bottom: 2px solid black;
    }
`


const Logo = () => {
    return (
        <Link href="/">
            <StyledLogo>SKD</StyledLogo>
        </Link>
    )
}

export default Logo;