import { useState } from "react";
import "/src/styles/elements-styles/HamburgerMenu.css";

function HamburgerMenu() {
  const [menuOpen, setIsMenuOpen] = useState(false);

  function handleHamburgerMenuClick() {
    setIsMenuOpen(!menuOpen);
  }

  return (
    <button
      className={`HamburgerMenu ${menuOpen ? "active" : ""}`}
      onClick={handleHamburgerMenuClick}
    >
      <div className="HamburgerMenu__icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}

export default HamburgerMenu;
