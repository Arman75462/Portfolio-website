import "/src/styles/sections-styles/ContactSection.css";
import data from "/src/assets/data.js";

function ContactSection({ language }) {
  return (
    <footer className="ContactSection" id="ContactSection">
      <h2 className="ContactSection__title section__title">
        {data[language].ContactSection.title}
      </h2>
    </footer>
  );
}

export default ContactSection;
