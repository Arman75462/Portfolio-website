import { useState } from "react";
import "/src/styles/sections-styles/HeaderSection.css";
import ThemeToggleButton from "/src/components/elements/ThemeToggleButton.jsx";
import HamburgerMenu from "/src/components/elements/HamburgerMenu.jsx";
import LanguageSwitcher from "/src/components/elements/LanguageSwitcher.jsx";
import NavigationSection from "/src/components/sections/NavigationSection.jsx";

function HeaderSection({ language, setLanguage }) {
  const [menuOpen, setIsMenuOpen] = useState(false);

  function handleHamburgerMenuClick() {
    setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  return (
    <header className="HeaderSection">
      <p className="HeaderSection__initials">AG</p>

      {menuOpen ? <NavigationSection /> : null}

      <ThemeToggleButton />

      <HamburgerMenu
        menuOpen={menuOpen}
        handleHamburgerMenuClick={handleHamburgerMenuClick}
      />

      <LanguageSwitcher language={language} setLanguage={setLanguage} />
    </header>
  );
}

export default HeaderSection;
