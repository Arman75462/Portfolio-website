import { useState, useEffect } from "react";
import "/src/styles/sections-styles/HeaderSection.css";
import ThemeToggleButton from "/src/components/elements/ThemeToggleButton.jsx";
import HamburgerMenu from "/src/components/elements/HamburgerMenu.jsx";
import LanguageSwitcher from "/src/components/elements/LanguageSwitcher.jsx";
import NavigationSection from "/src/components/sections/NavigationSection.jsx";

function HeaderSection({ isDarkMode, setIsDarkMode, language, setLanguage }) {
  const [menuOpen, setIsMenuOpen] = useState(false);
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth > 1000);

  useEffect(() => {
    function handleResize() {
      setIsScreenLarge(window.innerWidth > 1000);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleHamburgerMenuClick() {
    setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  return (
    <header className="HeaderSection">
      <p className="HeaderSection__initials">A.G.</p>

      {isScreenLarge ? (
        <NavigationSection
          language={language}
          setIsMenuOpen={setIsMenuOpen}
          className="NavigationSection__list-big"
        />
      ) : (
        menuOpen && (
          <NavigationSection
            language={language}
            onClick={() => setIsMenuOpen(false)}
            className="NavigationSection__list-small"
          />
        )
      )}

      <div className="HeaderSection__controls">
        <ThemeToggleButton
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />

        <LanguageSwitcher
          language={language}
          setLanguage={setLanguage}
          isDarkMode={isDarkMode}
        />

        {!isScreenLarge ? (
          <HamburgerMenu
            menuOpen={menuOpen}
            handleHamburgerMenuClick={handleHamburgerMenuClick}
          />
        ) : null}
      </div>
    </header>
  );
}

export default HeaderSection;
