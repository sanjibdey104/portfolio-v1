import Image from 'next/image';
import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import styled from 'styled-components';

const ContactSection = styled.section`
    width: 100%;
    height: 25rem;
    align-self: flex-start;
    justify-self: flex-start;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`

const ContactPointList = styled.ul`
    display: flex;
    gap: 2rem;
    justify-content: space-around;

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`

function contact() {
    return (
        <ContactSection>
            <h3>Feel free to reach out:</h3>

            <ContactPointList>
                <li>
                    <a href="https://github.com/sanjibdey104" rel="noreferrer" target="_blank">
                        <FaGithub className="github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sanjib-kumar-dey-359984130/" rel="noreferrer" target="_blank">
                        <FaLinkedinIn color='#2867B2'/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Sanjib_104" rel="noreferrer" target="_blank">
                        <FaTwitter color='#1DA1F2' />
                    </a>
                </li>
                <li>
                    <a className="mail" href="mailto:sanjibdey.dey4@gmail.com">
                        <MdContactMail />
                    </a>                
                </li>
            </ContactPointList>
        </ContactSection>
    )
}

export default contact;
