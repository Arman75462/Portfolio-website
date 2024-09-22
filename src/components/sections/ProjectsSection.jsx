import { useState } from "react";
import "/src/styles/sections-styles/ProjectsSection.css";
import BoxArrowUpRightIcon from "/src/components/elements/BoxArrowUpRightIcon.jsx";
import data from "/src/assets/data.js";

function ProjectsSection({ language }) {
  const [loadMoreProjects, setLoadMoreProjects] = useState(false);

  function handleloadMoreProjectsClick() {
    setLoadMoreProjects((prevValue) => !prevValue);
  }

  function getCallToActionButtonText(numberOfProjects) {
    let actionText;

    if (language === "en") {
      if (loadMoreProjects) {
        actionText = "Hide loaded projects";
      } else {
        actionText = "Load more projects";
      }
    } else if (language === "fr") {
      if (loadMoreProjects) {
        actionText = "Masquer les projets chargés";
      } else {
        actionText = "Charger plus de projets";
      }
    }

    return `${actionText} (${numberOfProjects})`;
  }

  return (
    <main className="ProjectsSection" id="ProjectsSection">
      <h2 className="ProjectsSection__title section__title">
        {data[language].ProjectsSection.title}
      </h2>
      {data[language].ProjectsSection.projectsList.map((project) => (
        <article
          className="ProjectsSection__project"
          data-aos={project.id % 2 === 0 ? "fade-left" : "fade-right"}
          data-aos-anchor-placement="top-center"
          key={project.id}
        >
          <div className="project__info">
            <h3 className="project__title section__subtitle">
              {project.title}
            </h3>
            <p className="project__description">{project.description}</p>

            <a href={project.websiteLink} className="project__link">
              {data[language].ProjectsSection.projectLinkTextProjectsLists}
              <BoxArrowUpRightIcon style={{ fill: "var(--text-color)" }} />
            </a>
          </div>

          <img
            src={project.imageSource}
            alt={project.imageAlt}
            className="project__image"
            loading="lazy"
          />
        </article>
      ))}

      {loadMoreProjects
        ? data[language].ProjectsSection.loadMoreProjectsList.map((project) => (
            <article
              className="ProjectsSection__project"
              data-aos={project.id % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-anchor-placement="top-center"
              key={project.id}
            >
              <div className="project__info">
                <h3 className="project__title section__subtitle">
                  {project.title}
                </h3>
                <p className="project__description">{project.description}</p>

                <a href={project.websiteLink} className="project__link">
                  {data[language].ProjectsSection.projectLinkTextProjectsLists}
                  <BoxArrowUpRightIcon style={{ fill: "var(--text-color)" }} />
                </a>
              </div>

              <img
                src={project.imageSource}
                alt={project.imageAlt}
                className="project__image"
                loading="lazy"
              />
            </article>
          ))
        : null}

      <button
        type="button"
        className="ProjectsSection__load-more-projects-button"
        onClick={handleloadMoreProjectsClick}
      >
        {getCallToActionButtonText(
          data[language].ProjectsSection.loadMoreProjectsList.length
        )}
      </button>
    </main>
  );
}

export default ProjectsSection;
