import "/src/App.css";
import HeaderSection from "/src/components/sections/HeaderSection.jsx";
import HeroSection from "/src/components/sections/HeroSection.jsx";
import AboutSection from "/src/components/sections/AboutSection.jsx";
import SkillsSection from "/src/components/sections/SkillsSection.jsx";
import ProjectsSection from "/src/components/sections/ProjectsSection.jsx";
import ContactSection from "/src/components/sections/ContactSection.jsx";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
