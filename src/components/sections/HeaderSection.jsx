import "/src/styles/sections-styles/HeaderSection.css";
import ThemeToggleButton from "/src/components/elements/ThemeToggleButton.jsx";
import HamburgerMenu from "/src/components/elements/HamburgerMenu.jsx";
import LanguageSwitcher from "/src/components/elements/LanguageSwitcher";

function HeaderSection() {
  return (
    <header className="HeaderSection">
      <p className="HeaderSection__initials">AG</p>
      <nav className="HeaderSsection__nav">
        <ul className="nav__list">
          <li className="nav__item nav__item1">
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about-me" className="nav__link">
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">
              Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>

        <ThemeToggleButton />

        <HamburgerMenu />

        <LanguageSwitcher />
      </nav>
    </header>
  );
}

export default HeaderSection;
