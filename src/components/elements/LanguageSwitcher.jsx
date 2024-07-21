import "/src/styles/elements-styles/LanguageSwitcher.css";

function LanguageSwitcher({ language, setLanguage }) {
  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <select
      className="LanguageSwitcher"
      onChange={handleLanguageChange}
      value={language}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}

export default LanguageSwitcher;
