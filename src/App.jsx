import { useState } from "react";
import "/src/App.css";
import HeaderSection from "/src/components/sections/HeaderSection.jsx";
import HeroSection from "/src/components/sections/HeroSection.jsx";
import AboutSection from "/src/components/sections/AboutSection.jsx";
import SkillsSection from "/src/components/sections/SkillsSection.jsx";
import ProjectsSection from "/src/components/sections/ProjectsSection.jsx";
import ContactSection from "/src/components/sections/ContactSection.jsx";

function App() {
  const [language, setLanguage] = useState("en");
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="App">
      <HeaderSection
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <SkillsSection language={language} />
      <ProjectsSection language={language} />
      <ContactSection language={language} />
    </div>
  );
}

export default App;
