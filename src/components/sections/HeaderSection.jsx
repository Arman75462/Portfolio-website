import { useState } from "react";
import "/src/styles/sections-styles/HeaderSection.css";
import ThemeToggleButton from "/src/components/elements/ThemeToggleButton.jsx";
import HamburgerMenu from "/src/components/elements/HamburgerMenu.jsx";
import LanguageSwitcher from "/src/components/elements/LanguageSwitcher.jsx";
import NavigationSection from "/src/components/sections/NavigationSection.jsx";

function HeaderSection({ language, setLanguage }) {
  const [menuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleHamburgerMenuClick() {
    setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  return (
    <>
      <header className="HeaderSection">
        <p className="HeaderSection__initials">A.G.</p>

        <div className="HeaderSection__controls">
          <ThemeToggleButton
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />

          <LanguageSwitcher
            setLanguage={setLanguage}
            isDarkMode={isDarkMode}
            language={language}
          />
          <HamburgerMenu
            menuOpen={menuOpen}
            handleHamburgerMenuClick={handleHamburgerMenuClick}
          />
        </div>
      </header>
      {menuOpen ? <NavigationSection language={language} /> : null}
    </>
  );
}

export default HeaderSection;
