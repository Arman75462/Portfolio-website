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
          download
        >
          CV
          {/*  Download button image */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.25em"
            viewBox="0 -960 960 960"
            width="1.25em"
            fill="var(--button-text-color)"
          >
            <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
          </svg>
        </CallToActionButton>
      </div>
    </section>
  );
}

export default AboutSection;
