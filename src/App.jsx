import './App.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import SkillTabs from "../components/Skills";
import ScrollNav from "../components/ScroolNav";
import RevealSection from "../components/RevealSection";
import { BiLogoGmail } from "react-icons/bi";
import Experience from "../components/Experience";
import ProjectsSection from "../components/Projects";
function App() {
  return (
    <div className="h-full w-full absolute top-0 grid grid-cols-1">
      <ScrollNav/>
      <RevealSection delay={0.5}>
      <div id="about" className="m-auto justify-center flex flex-wrap max-w-[1000px] h-screen items-center px-6 py-12 gap-6">
          <div className="flex-1 m-auto">
            <h1 className="select-none m-auto w-fit text-3xl md:mx-0 md:text-5xl font-bold text-gray-800 mb-5">
              Lucas D. Borges Borba
            </h1>
            <p className="select-none text-[20px] text-center md:text-justify md:text-2xl font-bold text-gray-800 mb-4  min-w-[360px]">
              Full Stack Developer
            </p>
            <p className="select-none text-3xl text-center md:text-justify text-gray-600">
              Conheça mais sobre minha experiência como desenvolvedor e os projetos que desenvolvi
            </p>
            <div className="mt-9 flex flex-row gap-7 m-auto md:mx-0 w-min">
              <a href={'https://www.linkedin.com/in/lucas-borba1'} target="_blank" rel="noopener noreferrer">
                <BsLinkedin size={35} />
              </a> 
              <a href={'https://github.com/lucasborba111/'} target="_blank" rel="noopener noreferrer">
                <BsGithub size={35} />
              </a>
              <a href={'https://github.com/lucasborba111/'} target="_blank" rel="noopener noreferrer">
                <BiLogoGmail size={35} />
              </a>
            </div>
          </div>
        </div>  
      </RevealSection>  
      <RevealSection delay={0.5}>
        <Experience/>
      </RevealSection>
      <RevealSection delay={0.5}>
        <SkillTabs/>
      </RevealSection>
      <RevealSection>
        <ProjectsSection/>
      </RevealSection>
    </div>
  )
}

export default App
