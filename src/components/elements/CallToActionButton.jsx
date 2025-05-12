import "/src/styles/elements-styles/CallToActionButton.css";

function CallToActionButton({
  className,
  link = null,
  children,
  onClick,
  ...rest
}) {
  return (
    <a href={link} {...rest}>
      <button
        type="button"
        className={`CallToActionButton ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </a>
  );
}

export default CallToActionButton;
