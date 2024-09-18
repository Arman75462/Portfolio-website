import "/src/styles/sections-styles/AboutSection.css";
import CallToActionButton from "/src/components/elements/CallToActionButton.jsx";
import data from "/src/assets/data.js";

function AboutSection({ language, isDarkMode }) {
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill={isDarkMode ? "#0a0a0a" : "#f5f5f5"}
            className="bi bi-box-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
            />
            <path
              fillRule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
            />
          </svg>
        </CallToActionButton>
      </div>
    </section>
  );
}

export default AboutSection;
