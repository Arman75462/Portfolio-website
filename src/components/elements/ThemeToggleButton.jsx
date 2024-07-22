import { useEffect } from "react";
import "/src/styles/elements-styles/ThemeToggleButton.css";
import darkModeIcon from "/src/assets/images/darkModeIcon.webp";
import lightModeIcon from "/src/assets/images/lightModeIcon.webp";

function ThemeToggleButton({ isDarkMode, setIsDarkMode }) {
  function handleThemeToggleButtonClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  useEffect(() => {
    // Remove the previous mode class
    document.body.classList.remove("light-mode", "dark-mode");

    // Add the current mode class
    document.body.classList.add(isDarkMode ? "dark-mode" : "light-mode");
  }, [isDarkMode]);

  return (
    <button
      type="button"
      className="ThemeToggleButton"
      onClick={handleThemeToggleButtonClick}
      style={{
        backgroundImage: `url(${isDarkMode ? lightModeIcon : darkModeIcon})`,
      }}
    ></button>
  );
}

export default ThemeToggleButton;
