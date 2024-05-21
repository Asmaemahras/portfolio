import React, { useState } from 'react'
import {Container, Wrapper, Title, ToggleButton, Divider, ToggleGroup, CardContainer} from '../Projets/ProjetsStyle'

import { projects } from '../../infos/Infos'
import ProjetsCards from '../Cards/ProjetsCard'

const Projets = () => {
    const [toggle, setToggle] = useState('all');
  return (
    <Container id="projets">
        <Wrapper>
            <Title>Projets</Title>
            <ToggleGroup>
    
                 {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
            {toggle === 'web' ?
                <ToggleButton active value="web" onClick={() => setToggle('web')}>WEB </ToggleButton>
                :
                <ToggleButton value="web" onClick={() => setToggle('web')}>WEB </ToggleButton>
            }
            <Divider />
            {toggle === 'app' ?
                <ToggleButton active value="app" onClick={() => setToggle('app')}>APP'S</ToggleButton>
                :
                <ToggleButton value="app" onClick={() => setToggle('app')}>APP'S</ToggleButton>
            }
            <Divider />
            {toggle === 'ui' ?
                <ToggleButton active value="ui" onClick={() => setToggle('ui')}>UI/UX</ToggleButton>
                :
                <ToggleButton value="ui" onClick={() => setToggle('ui')}>UI/UX</ToggleButton>
            }
                 
            </ToggleGroup>
            <CardContainer>
                {toggle === 'all' && projects
                    .map((project) => (
                    <ProjetsCards project={project}/>
                    ))}
                {projects
                    .filter((item) => item.category === toggle)
                    .map((project) => (
                    <ProjetsCards project={project}/>
                    ))}
            </CardContainer>
         
            
        </Wrapper>
    </Container>
  )
}

export default Projets