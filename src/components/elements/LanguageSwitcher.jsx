import "/src/styles/elements-styles/LanguageSwitcher.css";

function LanguageSwitcher() {
  return (
    <select className="LanguageSwitcher">
      <option value="en">🇺🇸</option>
      <option value="fr">🇫🇷</option>
      <option value="es">🇪🇸</option>
    </select>
  );
}

export default LanguageSwitcher;
