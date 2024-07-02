import React from "react";
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { useTheme } from 'styled-components';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../Data/constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
                        <DiCssdeck size="3rem" /> 
                        <Span>Portfolio</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars onClick={() => {
                        setIsOpen(!isOpen)
                    }} />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">Inicio</NavLink>
                    <NavLink href='#experience'>Experiencia</NavLink>
                    <NavLink href='#projects'>Proyectos</NavLink>
                    <NavLink href='#skills'>Tecnologías</NavLink>
                    <NavLink href='#education'>Educación</NavLink>
                </NavItems>
                {
                    isOpen &&
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink href="#about" onClick={() => {
                        setIsOpen(!isOpen)
                        }}>About</MobileLink>
                        <MobileLink href='#skills' onClick={() => {
                        setIsOpen(!isOpen)
                        }}>Skills</MobileLink>
                        <MobileLink href='#experience' onClick={() => {
                        setIsOpen(!isOpen)
                        }}>Experience</MobileLink>
                        <MobileLink href='#projects' onClick={() => {
                        setIsOpen(!isOpen)
                        }}>Projects</MobileLink>
                        <MobileLink href='#education' onClick={() => {
                        setIsOpen(!isOpen)
                        }}>Education</MobileLink>
                        <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
                    </MobileMenu>
                }
            </NavbarContainer>
        </Nav>
      )
};

export default Navbar;