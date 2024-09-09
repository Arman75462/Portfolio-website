import "/src/styles/sections-styles/SkillsSection.css";
import data from "/src/assets/data.js";

function SkillsSection({ language }) {
  return (
    <section className="SkillsSection" id="SkillsSection">
      <h2 className="SkillsSection__title section__title">
        {data[language].SkillsSection.title}
      </h2>

      <h3 className="SkillsSection__subtitle section__subtitle">
        {data[language].SkillsSection.skillsCard.frontEndTools.title}
      </h3>
      <article
        className="SkillsSection__skills-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        {data[language].SkillsSection.skillsCard.frontEndTools.skills.map(
          (skill) => (
            <div key={skill.id} className="skill-container">
              <img
                loading="lazy"
                src={skill.imageSource}
                alt={skill.imageAlt}
                className="skill__icon"
              />
              <p className="skill__name">{skill.name}</p>
              <p className="skill-number">{skill.id}</p>
            </div>
          )
        )}
      </article>

      <h3 className="SkillsSection__subtitle section__subtitle">
        {data[language].SkillsSection.skillsCard.devTools.title}
      </h3>
      <article
        className="SkillsSection__skills-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        {data[language].SkillsSection.skillsCard.devTools.skills.map(
          (skill) => (
            <div key={skill.id} className="skill-container">
              <img
                loading="lazy"
                src={skill.imageSource}
                alt={skill.imageAlt}
                className="skill__icon"
              />
              <p className="skill__name">{skill.name}</p>
              <p className="skill-number">{skill.id}</p>
            </div>
          )
        )}
      </article>

      <h3 className="SkillsSection__subtitle section__subtitle">
        {data[language].SkillsSection.skillsCard.backEndTools.title}
      </h3>
      <article
        className="SkillsSection__skills-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        {data[language].SkillsSection.skillsCard.backEndTools.skills.map(
          (skill) => (
            <div key={skill.id} className="skill-container">
              <img
                loading="lazy"
                src={skill.imageSource}
                alt={skill.imageAlt}
                className="skill__icon"
              />
              <p className="skill__name">{skill.name}</p>
              <p className="skill-number">{skill.id}</p>
            </div>
          )
        )}
      </article>
    </section>
  );
}

export default SkillsSection;
