import "/src/styles/sections-styles/SkillsSection.css";
import data from "/src/assets/data.js";

function SkillsSection({ language }) {
  return (
    <section className="SkillsSection" id="SkillsSection">
      <h2 className="SkillsSection__title section__title">
        {data[language].SkillsSection.title}
      </h2>
    </section>
  );
}

export default SkillsSection;
