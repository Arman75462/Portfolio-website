import "/src/styles/sections-styles/NavigationSection.css";

function NavigationSection() {
  return (
    <nav className="NavigationSection">
      <ul className="NavigationSection__list">
        <li className="NavigationSection__item ">
          <a href="#" className="NavigationSection__link">
            Home
          </a>
        </li>
        <li className="NavigationSection__item">
          <a href="#about-me" className="NavigationSection__link">
            About me
          </a>
        </li>
        <li className="NavigationSection__item">
          <a href="#skills" className="NavigationSection__link">
            Skills
          </a>
        </li>
        <li className="NavigationSection__item">
          <a href="#projects" className="NavigationSection__link">
            Projects
          </a>
        </li>
        <li className="NavigationSection__item">
          <a href="#contact" className="NavigationSection__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationSection;
