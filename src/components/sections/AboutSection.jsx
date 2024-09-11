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
              d="M10.5 3a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V4.707L4.854 9.354a.5.5 0 1 1-.708-.708L9.293 4H5.5a.5.5 0 0 1 0-1h5zM3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.5a.5.5 0 0 1 1 0V13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h6.5a.5.5 0 0 1 0 1H3z"
            />
          </svg>
        </CallToActionButton>
      </div>
    </section>
  );
}

export default AboutSection;
