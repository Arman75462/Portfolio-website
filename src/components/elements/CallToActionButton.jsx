import "/src/styles/elements-styles/CallToActionButton.css";

function CallToActionButton({ className, link, children, ...rest }) {
  return (
    <a href={link}>
      <button
        type="button"
        className={`CallToActionButton ${className}`}
        {...rest}
      >
        {children}
      </button>
    </a>
  );
}

export default CallToActionButton;
