import "/src/styles/elements-styles/CallToActionButton.css";

function CallToActionButton({ className, link, children, ...rest }) {
  return (
    <a href={link} {...rest}>
      <button type="button" className={`CallToActionButton ${className}`}>
        {children}
      </button>
    </a>
  );
}

export default CallToActionButton;
