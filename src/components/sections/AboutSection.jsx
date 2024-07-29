import "/src/styles/sections-styles/AboutSection.css";
import CallToActionButton from "/src/components/elements/CallToActionButton.jsx";
import data from "/src/assets/data.js";

function AboutSection({ language }) {
  return (
    <section className="AboutSection" id="AboutSection" data-aos="fade-down">
      {/*  Just a flex container */}
      <div>
        <h2 className="AboutSection__title section__title">
          {data[language].AboutSection.title}
        </h2>
        <p className="AboutSection__personal-introduction">
          {data[language].AboutSection.personalIntroduction}
        </p>
      </div>

      <div className="AboutSection__buttons">
        <CallToActionButton text="Contact" link="#ContactSection" />

        <CallToActionButton
          className="AboutSection__cta--cv"
          text="CV ➚"
          link={data[language].AboutSection.résuméLink}
        />
      </div>
    </section>
  );
}

export default AboutSection;
