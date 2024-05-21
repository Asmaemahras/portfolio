import React from 'react'

import {Card, Top, Body, Entr, Date, Role, Description, Span, ItemWrapper, Skills, Skill } from '../Cards/CardsStyle'


const ExperienceCard = ({ experience }) => {
  return (
    <Card>
        <Top>
            <Body>
                <Role>{experience.role}</Role>
                <Entr>{experience.company}</Entr>
                <Date>{experience.date}</Date>
            </Body>
        </Top>
        <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
        
        
    </Card>
  )
}

export default ExperienceCard