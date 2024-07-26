import "/src/styles/sections-styles/NavigationSection.css";
import data from "/src/assets/data.js";

function NavigationSection({ language, className, onClick = () => null }) {
  return (
    <nav className="NavigationSection">
      <ul className={className}>
        {data[language].HeaderSection.NavigationSection.map((listPoint) => (
          <li className="NavigationSection__item" key={listPoint.id}>
            <a
              href={listPoint.link}
              className="NavigationSection__link"
              onClick={onClick}
            >
              {listPoint.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationSection;
