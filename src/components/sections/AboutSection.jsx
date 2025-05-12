import "/src/styles/sections-styles/AboutSection.css";
import CallToActionButton from "/src/components/elements/CallToActionButton.jsx";
import BoxArrowUpRightIcon from "/src/components/elements/BoxArrowUpRightIcon.jsx";
import data from "/src/assets/data.js";

function AboutSection({ language }) {
  function handleOpenPdf() {
    const pdfUrl = data[language].AboutSection.résuméLink;
    window.open(pdfUrl, "_blank");
  }

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
          onClick={handleOpenPdf}
        >
          CV
          {/* Open PDF in new tab icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.25em"
            width="1.25em"
            viewBox="0 -960 960 960"
            fill="var(--button-text-color)"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
          </svg>
        </CallToActionButton>
      </div>
    </section>
  );
}

export default AboutSection;
