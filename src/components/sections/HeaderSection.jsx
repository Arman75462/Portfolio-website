import { useState, useEffect } from "react";
import "/src/styles/sections-styles/HeaderSection.css";
import ThemeToggleButton from "/src/components/elements/ThemeToggleButton.jsx";
import HamburgerMenu from "/src/components/elements/HamburgerMenu.jsx";
import LanguageSwitcher from "/src/components/elements/LanguageSwitcher.jsx";
import NavigationSection from "/src/components/sections/NavigationSection.jsx";

function HeaderSection({ isDarkMode, setIsDarkMode, language, setLanguage }) {
  const [menuOpen, setIsMenuOpen] = useState(false);
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth > 1000);
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 50);

  // Store the width of the window for knowing when to add hamburger menu and when not to.
  useEffect(() => {
    function handleResize() {
      setIsScreenLarge(window.innerWidth > 1000);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Store the amount the client scrolled each time scrollY changes in value for knowing when to display detachable header and when not to.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleHamburgerMenuClick() {
    setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  return (
    <header
      className={
        isScrolled ? "HeaderSection__detachable" : "HeaderSection__sticked"
      }
    >
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
