import { FooterContainer, FooterWrapper, Nav, NavLink, Copyright } from './FooterStyledComponent';

function Footer() {
    return (
      <FooterContainer>
        <FooterWrapper>
          <Nav>
            <NavLink href="#about">Inicio</NavLink>
            <NavLink href='#experience'>Experiencia</NavLink>
            <NavLink href='#projects'>Proyectos</NavLink>
            <NavLink href='#skills'>Tecnologías</NavLink>
            <NavLink href='#education'>Educación</NavLink>
          </Nav>
          <Copyright>
            2023 - 4lPeReZ
          </Copyright>
  
        </FooterWrapper>
      </FooterContainer>
    );
  }
  
  export default Footer;