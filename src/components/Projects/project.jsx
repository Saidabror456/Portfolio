import { useTranslation } from "react-i18next";
import "./project.css";
import Timeline from "../Timeline/Timeline";

function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <Timeline />
      <section className="projects" id="projects">
        <h2 className="section-title">{t("projects")}</h2>
        <div className="projects-grid">

          {/* Landing Page */}
          <div className="project-card">
            <span className="badge">{t("inDev")}</span>
            <h3>{t("landing")}</h3>
            <p>React + CSS</p>
            <a href="#" className="disabled" rel="noreferrer">GitHub</a>
          </div>

          {/* Store */}
          <div className="project-card">
            <span className="badge">{t("inDev")}</span>
            <h3>{t("store")}</h3>
            <p>{t("soon")}</p>
            <a href="#" className="disabled" rel="noreferrer">GitHub</a>
          </div>

          {/* Weather Project */}
          <div className="project-card ready">
            <span className="ready-badge">✅ Ready</span>
            <h3>Weather App</h3>
            <p>React + OpenWeather API</p>
            <a href="https://weather-rust-one.vercel.app/" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

export default Projects;
