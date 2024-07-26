import "/src/styles/elements-styles/CallToActionButton.css";

function CallToActionButton({
  className,
  text,
  link = null,
  onClick = () => null,
}) {
  return (
    <a href={link}>
      <button
        type="button"
        className={`CallToActionButton ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </a>
  );
}

export default CallToActionButton;
