import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  const [cursorPosition, setCursorPosition] = useState({ x: -1000, y: -1000 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out-quad",
      once: true,
    });
  }, []);

  // Function to detect if the device is mobile
  const detectMobileDevice = () => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouchDevice);
  };

  useEffect(() => {
    detectMobileDevice(); // Check for mobile device on mount
    window.addEventListener("resize", detectMobileDevice); // Re-check on window resize

    return () => {
      window.removeEventListener("resize", detectMobileDevice); // Clean up listener
    };
  }, []);

  function handleMove(e) {
    if (!isMobile) {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }
  }

  return (
    <div className="App" onMouseMove={handleMove}>
      {/* CUSTOM CURSOR */}
      {!isMobile && (
        <>
          <div
            className="cursor-dot"
            style={{ left: cursorPosition.x, top: cursorPosition.y }}
          ></div>
          <div
            className="cursor-outline"
            style={{ left: cursorPosition.x, top: cursorPosition.y }}
          ></div>
        </>
      )}

      <HeaderSection
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <HeroSection language={language} />
      <AboutSection language={language} />
      <SkillsSection language={language} />
      <ProjectsSection language={language} isDarkMode={isDarkMode} />
      <ContactSection language={language} />
    </div>
  );
}

export default App;
