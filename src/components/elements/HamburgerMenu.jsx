import "/src/styles/elements-styles/HamburgerMenu.css";

function HamburgerMenu({ menuOpen, handleHamburgerMenuClick }) {
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
