import React from "react";

import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Nav, NavLink, NavBarContainer, GitHubButton, Span, NavLogo, NavItems, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './StyleNavbar'
import { Bio } from '../../infos/Infos';



const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const theme = useTheme()

    return (
        <Nav>
            <NavBarContainer>
                <NavLogo to='/'>
                
                     <Span>ASMAEMAHRAS</Span>
               
            </NavLogo>
                <MobileIcon>
                    <FaBars onClick={() => {
                        setOpen(!open)
                    }} />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href='#skills'>Skills</NavLink>
                    <NavLink href='#experience'>Experience</NavLink>
                    <NavLink href='#projets'>Projets</NavLink>
                    <NavLink href='#formation'>Formation</NavLink>
                    
                    
                </NavItems>
                <ButtonContainer>
                    <GitHubButton href={Bio.github} >Github Profile</GitHubButton>
                </ButtonContainer>
                {
          open &&
          <MobileMenu isOpen={open}>
            <MobileLink href="#about" onClick={() => {
              setOpen(!open)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setOpen(!open)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setOpen(!open)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setOpen(!open)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setOpen(!open)
            }}>Education</MobileLink>
                 <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
            </NavBarContainer> 

        </Nav>
    )
}

export default Navbar;