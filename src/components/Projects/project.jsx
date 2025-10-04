import { useTranslation } from "react-i18next";
import './project.css';
import Timeline from "../Timeline/Timeline";
function Projects() {
  const { t } = useTranslation();

  return (
    <>
    <Timeline/>
    <section className="projects" id="projects">
      <h2 className="section-title">{t("projects")}</h2>
      <div className="projects-grid">

        <div className="project-card">
          <span className="badge">{t("inDev")}</span>
          <h3>{t("landing")}</h3>
          <p>React + CSS.</p>
          <a href="https://github.com/username/project1" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <div className="project-card">
          <span className="badge">{t("inDev")}</span>
          <h3>{t("store")}</h3>
          <p>{t("soon")}</p>
          <a href="https://github.com/username/project2" target="_blank" rel="noreferrer">GitHub</a>
        </div>

      </div>
    </section>
    </>
  );
}

export default Projects;
