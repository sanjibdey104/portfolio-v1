import React, { useState } from 'react'
import styled from 'styled-components';

const WorkComponent = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    gap: 2rem;
    padding: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    .company-list {
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @media (max-width: 768px) {
            width: 100%;
            flex-direction: row;
        }

        li {
            cursor: pointer;
            font-weight: 500;

            &.active {
                color: ${({theme}) => theme.accentColor};
            }
        }
    }

    .job-desc {
        width: 75%;
        display: flex;
        flex-direction: column;

        @media (max-width: 768px) {
            width: 100%;
        }

        .position {
            margin-bottom: 0.5rem;
            span {
                font-size: 1.2rem;
                font-weight: 500;
            }
        }

        .duration {
            font-size: 0.9rem;
            margin-bottom: 2rem;
        }

        #company {
            color: ${({theme}) => theme.accentColor};
        }

        ul {
            li {
                font-family: 'Lora';
                margin-bottom: 1rem;
                position: relative;
                padding-left: 1.5rem;

                &:before {
                    content: '▹';
                    display: inline;
                    position: absolute;
                    left: 0;
                    color: ${({theme}) => theme.accentColor};
                    font-size: 1.3rem;
                    line-height: 1;
                }
            }
        }
    }
`

const Work = ({works}) => {

    const [indexValue, setIndexValue] = useState(0);
    const companies = works.map(work => work.company);
    const {company, position, duration, responsibilities} = works[indexValue];

    return (
        <WorkComponent>
            <ul className="company-list">
            {companies.map((company, index) => {
                let id = Math.random();
                return (
                    <li key={id} 
                    onClick={() => setIndexValue(index)}
                    className={(index === indexValue) ? 'active' : ''}
                    >
                    {company}
                    </li>
                )
            })}
            </ul>

            <div className="job-desc">
                <div className="position">
                    <span>{position}</span> @ <span id="company">{company}</span>
                </div>
                <p className="duration">{duration}</p>
                <ul>
                    {responsibilities.map(res => {
                        let unikey = Math.random();
                        return <li key={unikey}>{res}</li>
                    })}
                </ul>
            </div>
        </WorkComponent>
    )
}

export default Work
