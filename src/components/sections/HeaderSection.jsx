import "/src/styles/sections-styles/HeaderSection.css";
import ThemeToggleButton from "/src/components/elements/ThemeToggleButton.jsx";
import HamburgerMenu from "/src/components/elements/HamburgerMenu.jsx";
import LanguageSwitcher from "/src/components/elements/LanguageSwitcher";

function HeaderSection({
  isDarkMode,
  setIsDarkMode,
  language,
  handleLanguageChange,
}) {
  return (
    <header className="HeaderSection">
      <p className="HeaderSection__initials">AG</p>
      <nav className="HeaderSection__nav">
        <ul className="nav__list">
          <li className="nav__item nav__item1">
            <a
              href="#"
              className="nav__link"
              data-lang-en="Home"
              data-lang-fr="Accueil"
            ></a>
          </li>
          <li className="nav__item">
            <a
              href="#about-me"
              className="nav__link"
              data-lang-en="About me"
              data-lang-fr="À propos"
            ></a>
          </li>
          <li className="nav__item">
            <a
              href="#skills"
              className="nav__link"
              data-lang-en="Skills"
              data-lang-fr="Compétences"
            ></a>
          </li>
          <li className="nav__item">
            <a
              href="#projects"
              className="nav__link"
              data-lang-en="Projects"
              data-lang-fr="Projets"
            ></a>
          </li>
          <li className="nav__item">
            <a
              href="#contact"
              className="nav__link"
              data-lang-en="Contact"
              data-lang-fr="Contact"
            ></a>
          </li>
        </ul>
      </nav>

      <ThemeToggleButton
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <HamburgerMenu />

      <LanguageSwitcher
        language={language}
        handleLanguageChange={handleLanguageChange}
      />
    </header>
  );
}

export default HeaderSection;
