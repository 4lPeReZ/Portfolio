import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Utils/Themes';
import Navbar from './Components/Navbar';
import Hero from './Components/HeroSection';
import Skills from './Components/Skills';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body>
        <Hero />
        <Skills />
      </Body>
    </ThemeProvider>
  );
}

export default App;
