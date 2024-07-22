import "/src/styles/elements-styles/LanguageSwitcher.css";
import languageSwitcherIconDarkMode from "/src/assets/images/languageIconBlack.webp";
import languageSwitcherIconLightMode from "/src/assets/images/languageIconWhite.webp";

function LanguageSwitcher({ language, setLanguage, isDarkMode }) {
  /* function handleLanguageChange(event) {
    setLanguage(event.target.value);
  } */

  return (
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
    ></button>
  );
}

export default LanguageSwitcher;

{
  /* <select
className="LanguageSwitcher"
onChange={handleLanguageChange}
value={language}
>
<option value="en">English</option>
<option value="fr">Français</option>
</select> */
}
