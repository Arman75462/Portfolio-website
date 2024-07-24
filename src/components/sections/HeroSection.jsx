import "/src/styles/sections-styles/HeroSection.css";
import data from "/src/assets/data.js";
import CallToActionButton from "/src/components/elements/CallToActionButton.jsx";

function HeroSection({ language }) {
  return (
    <section className="HeroSection" id="HeroSection">
      {/* Just a flex container  */}
      <div>
        <h1 className="HeroSection__title">
          <div className="HeroSection__name">
            {data[language].HeroSection.h1.name}
          </div>
          <div className="HeroSection__career">
            {data[language].HeroSection.h1.career}
          </div>
        </h1>
        <a href="#contact">
          <CallToActionButton className="HeroSection__cta" />
        </a>
      </div>

      <img
        src={data[language].HeroSection.armanImageSource}
        alt={data[language].HeroSection.armanImageAlt}
        className="HeroSection__image"
      />
    </section>
  );
}

export default HeroSection;
