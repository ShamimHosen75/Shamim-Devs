import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import './App.css';
import Contact from "./components/Contact/Contact.js";
import Education from "./components/Education/Education.js";
import Experience from "./components/Experiences/Experience.js";
import Footer from "./components/Footer/Footer.js";
import HeroSection from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar.js";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails.js";
import Projects from "./components/Projects/Projects.js";
import Skills from "./components/Skills/Skills.js";
import { darkTheme, lightTheme } from './utilities/Themes.js';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;