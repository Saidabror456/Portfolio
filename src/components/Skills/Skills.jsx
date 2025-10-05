import { useTranslation } from "react-i18next";
import "./skill.css";
import Timeline from "../Timeline/Timeline";
function Skills() {
     const { t, i18n } = useTranslation();
  
    const changeLang = (lng) => {
      i18n.changeLanguage(lng);
      setActiveLang(lng);
      setOpen(false);
    };
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "96%" },
    { name: "JavaScript", level: "92%" },
    { name: "React", level: "90%" },
    { name: "GitHub", level: "35%" },
    {name:"Node.js", level:"89%"}
  ];

  return (
    <>
    <section id="skills" className="skills-section">
      <h2>{t('skill')}</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <span>{skill.name}</span>
            <div className="progress-bar">
              <div style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Skills;
