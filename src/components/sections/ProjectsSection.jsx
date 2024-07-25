import "/src/styles/sections-styles/ProjectsSection.css";
import data from "/src/assets/data.js";

function ProjectsSection({ language }) {
  return (
    <main className="ProjectsSection" id="ProjectsSection">
      <h2 className="ProjectsSection__title section__title">
        {data[language].ProjectsSection.title}
      </h2>
    </main>
  );
}

export default ProjectsSection;
