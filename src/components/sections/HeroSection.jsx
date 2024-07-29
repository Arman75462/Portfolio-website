import "/src/styles/sections-styles/HeroSection.css";
import data from "/src/assets/data.js";
import CallToActionButton from "/src/components/elements/CallToActionButton.jsx";

function HeroSection({ language }) {
  return (
    <section className="HeroSection" id="HeroSection" data-aos="zoom-out">
      <div className="HeroSection__parallax"></div>
      {/* Just a flex container  */}
      <div className="HeroSection__content">
        <h1 className="HeroSection__title">
          <div className="HeroSection__name">
            {data[language].HeroSection.h1.name}
          </div>
          <div className="HeroSection__career">
            {data[language].HeroSection.h1.career}
          </div>
        </h1>

        <CallToActionButton
          className="HeroSection__cta"
          text="Contact"
          link="#ContactSection"
        />
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
