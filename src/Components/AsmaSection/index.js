import React from 'react'
import { AsmaContainer, AsmaBg, AsmaeLeftContainer, AsmaeRightContainer, AsmaInnerContainer, TextLoop, Title, Span, SubTitle} from './AsmaStyle'

import { Bio } from '../../infos/Infos'
import Typewriter from 'typewriter-effect';
import BgAnimation from '../BgAnimation';


const Asmae = () => {
  return (
    <div id='about'>
      <AsmaContainer>
        <AsmaBg>
          <BgAnimation />
        </AsmaBg>
        <AsmaInnerContainer>
          <AsmaeLeftContainer>
            <Title>HELLO, Je suis <br /> {Bio.name}</Title>
            <TextLoop>
              Je suis
              <Span>
              <Typewriter options={
                {
                  strings : Bio.roles,
                  autoStart: true,
                  loop: true,
                }
              } />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            
          </AsmaeLeftContainer>
          <AsmaeRightContainer>
           
          </AsmaeRightContainer>
        </AsmaInnerContainer>
      </AsmaContainer>
    </div>
  )
};

export default Asmae;