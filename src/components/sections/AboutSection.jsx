import "/src/styles/sections-styles/AboutSection.css";
import CallToActionButton from "/src/components/elements/CallToActionButton.jsx";
import BoxArrowUpRightIcon from "/src/components/elements/BoxArrowUpRightIcon.jsx";
import data from "/src/assets/data.js";

function AboutSection({ language }) {
  return (
    <section
      className="AboutSection"
      id="AboutSection"
      data-aos="fade-down"
      data-aos-anchor-placement="center-bottom"
    >
      {/*  Just a flex container */}
      <div>
        <h2 className="AboutSection__title section__title">
          {data[language].AboutSection.title}
        </h2>
        <p className="AboutSection__personal-introduction AboutSection__personal-introduction--p1">
          {data[language].AboutSection.personalIntroductionP1}
        </p>
        <p className="AboutSection__personal-introduction AboutSection__personal-introduction--p2">
          {data[language].AboutSection.personalIntroductionP2}
        </p>
        <p className="AboutSection__personal-introduction AboutSection__personal-introduction--p3">
          {data[language].AboutSection.personalIntroductionP3}
        </p>
      </div>

      <div className="AboutSection__buttons">
        <CallToActionButton link="#ContactSection">Contact</CallToActionButton>

        <CallToActionButton
          className="AboutSection__cta--cv"
          link={data[language].AboutSection.résuméLink}
          style={{ display: "flex", alignItems: "center", gap: "0.75em" }}
        >
          CV
          <BoxArrowUpRightIcon style={{ fill: "var(--button-text-color)" }} />
        </CallToActionButton>
      </div>
    </section>
  );
}

export default AboutSection;
