import "/src/styles/elements-styles/CallToActionButton.css";

function CallToActionButton({ className, text, link = "" }) {
  return (
    <a href={link}>
      <button type="button" className={`CallToActionButton ${className}`}>
        {text}
      </button>
    </a>
  );
}

export default CallToActionButton;
