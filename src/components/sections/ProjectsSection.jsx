import { useState } from "react";
import "/src/styles/sections-styles/ProjectsSection.css";
import websiteLinkIconLightMode from "/src/assets/images/websiteLinkIconLightMode.webp";
import websiteLinkIconDarkMode from "/src/assets/images/websiteLinkIconDarkMode.webp";
import CallToActionButton from "/src/components/elements/CallToActionButton.jsx";
import data from "/src/assets/data.js";

function ProjectsSection({ language, isDarkMode }) {
  const [loadMoreProjects, setLoadMoreProjects] = useState(false);

  function handleloadMoreProjectsClick() {
    setLoadMoreProjects((prevValue) => !prevValue);
  }

  return (
    <main className="ProjectsSection" id="ProjectsSection">
      <h2 className="ProjectsSection__title section__title">
        {data[language].ProjectsSection.title}
      </h2>
      {data[language].ProjectsSection.projectsList.map((project) => (
        <article className="ProjectsSection__project" key={project.id}>
          <div className="project__info">
            <h3 className="project__title">{project.title}</h3>
            <p className="project__description">{project.description}</p>

            <a href={project.websiteLink} className="project__link">
              View Project
              <img
                src={
                  isDarkMode
                    ? websiteLinkIconDarkMode
                    : websiteLinkIconLightMode
                }
                alt="website link icon"
                className="project__link-image"
              />
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
            <article className="ProjectsSection__project" key={project.id}>
              <div className="project__info">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>

                <a href={project.websiteLink} className="project__link">
                  View Project
                  <img
                    src={
                      isDarkMode
                        ? websiteLinkIconDarkMode
                        : websiteLinkIconLightMode
                    }
                    alt="website link icon"
                    className="project__link-image"
                  />
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

      <CallToActionButton
        text={`${loadMoreProjects ? "Hide loaded" : "Load more"} projects (${
          data[language].ProjectsSection.loadMoreProjectsList.length
        })`}
        className="ProjectsSection__load-more-projects-button"
        onClick={handleloadMoreProjectsClick}
      />
    </main>
  );
}

export default ProjectsSection;
