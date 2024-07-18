import { useState } from "react";
import "/src/styles/elements-styles/ThemeToggleButton.css";
import darkModeIcon from "/src/assets/images/darkModeIcon.webp";
import lightModeIcon from "/src/assets/images/lightModeIcon.webp";

function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleThemeToggleButtonClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <button
      type="button"
      className="ThemeToggleButton"
      onClick={handleThemeToggleButtonClick}
      style={{
        backgroundImage: `url(${isDarkMode ? darkModeIcon : lightModeIcon})`,
      }}
    ></button>
  );
}

export default ThemeToggleButton;
