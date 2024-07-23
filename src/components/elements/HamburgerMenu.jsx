import { useEffect } from "react";
import "/src/styles/elements-styles/HamburgerMenu.css";

function HamburgerMenu({ menuOpen, handleHamburgerMenuClick }) {
  // Make the scrollbar disappear when the menu is open.
  // If it's closed, scrollbar should be visbile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [menuOpen]);

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
