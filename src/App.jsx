import './App.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import SkillTabs from "../components/Skills";
import ScrollNav from "../components/ScroolNav";
import RevealSection from "../components/RevealSection";
import { BiLogoGmail } from "react-icons/bi";
import AboutMe from "../components/AboutMe";
import ProjectsSection from "../components/Projects";
function App() {
  return (
    <div className="flex flex-col h-full w-full md:flex-row items-center">
      <RevealSection>
        <AboutMe/>
      </RevealSection>
      <ProjectsSection/>
    </div>
  )
}

export default App