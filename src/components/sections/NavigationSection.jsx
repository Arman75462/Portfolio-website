import "/src/styles/sections-styles/NavigationSection.css";
import data from "/src/assets/data.js";

function NavigationSection({ language, className }) {
  return (
    <nav className="NavigationSection">
      <ul className={className}>
        {data[language].HeaderSection.NavigationSection.map((listPoint) => (
          <li className="NavigationSection__item" key={listPoint.id}>
            <a href={listPoint.link} className="NavigationSection__link">
              {listPoint.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationSection;
