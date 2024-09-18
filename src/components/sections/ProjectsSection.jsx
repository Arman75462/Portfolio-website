import { useState } from "react";
import "/src/styles/sections-styles/ProjectsSection.css";
import data from "/src/assets/data.js";

function ProjectsSection({ language, isDarkMode }) {
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill={isDarkMode ? "#f5f5f5" : "#0a0a0a"}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill={isDarkMode ? "#f5f5f5" : "#0a0a0a"}
                    className="bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V4.707L4.854 9.354a.5.5 0 1 1-.708-.708L9.293 4H5.5a.5.5 0 0 1 0-1h5zM3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.5a.5.5 0 0 1 1 0V13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h6.5a.5.5 0 0 1 0 1H3z"
                    />
                  </svg>
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
