import { useState } from "react";
import "/src/styles/elements-styles/LanguageSwitcher.css";
import languageSwitcherIconDarkMode from "/src/assets/images/languageIconBlack.webp";
import languageSwitcherIconLightMode from "/src/assets/images/languageIconWhite.webp";

function LanguageSwitcher({ language, setLanguage, isDarkMode }) {
  const [isLanguageOptionsOpen, setIsLanguageOptionsOpen] = useState(false);

  function handleLanguageSwitcherOptionClick(languageDesired) {
    setLanguage(languageDesired);
    setIsLanguageOptionsOpen(
      (prevIsLanguageOptionsOpen) => !prevIsLanguageOptionsOpen
    );
  }

  console.log(language);

  return (
    <div className="LanguageSwitcher-container">
      <button
        type="button"
        className="LanguageSwitcher"
        style={{
          backgroundImage: `url(${
            isDarkMode
              ? languageSwitcherIconLightMode
              : languageSwitcherIconDarkMode
          })`,
        }}
        onClick={() =>
          setIsLanguageOptionsOpen(
            (prevIsLanguageOptionsOpen) => !prevIsLanguageOptionsOpen
          )
        }
      ></button>

      {isLanguageOptionsOpen ? (
        <ul className="LanguageSwitcher__options-container">
          <button
            onClick={() => handleLanguageSwitcherOptionClick("fr")}
            className="LanguageSwitcher__option"
          >
            Français
          </button>
          <button
            onClick={() => handleLanguageSwitcherOptionClick("en")}
            className="LanguageSwitcher__option"
          >
            English
          </button>
        </ul>
      ) : null}
    </div>
  );
}

export default LanguageSwitcher;
