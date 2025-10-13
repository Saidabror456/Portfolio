import { useTranslation } from 'react-i18next';
import './about.css';
import Skills from '../Skills/Skills';
import Certificate from '../Certificate/certificate';
function About() {
   const { t, i18n } = useTranslation();
  
    const changeLang = (lng) => {
      i18n.changeLanguage(lng);
      setActiveLang(lng);
      setOpen(false);
    };
  return (
    <>
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">{t('about')}</h2>
        <p className="about-text">
           {t('hello')}! {t('me')} <span className="highlight">Junior Frontend Developer</span>{t('highlight')}<strong>HTML</strong> <strong>React</strong>, 
          <strong> JavaScript</strong>{t('css')} <strong>CSS</strong>
        </p>

        <div className="about-cards">
          <div className="card">
            <h3> {t('target')}</h3>
            <p>{t('targets')}</p>
          </div>
          <div className="card">
            <h3> {t('skill')}</h3>
            <ul>
              <li>React, JavaScript</li>
              <li>HTML5, CSS3</li>
              <li> GitHub</li>
              <li> {t('skills')}</li>
            </ul>
          </div>
          <div className="card">
            <h3> {t('interest')}</h3>
            <p>{t('interests')}</p>
          </div>
        </div>
      </div>
    </section>
    <Skills/>
    <Certificate/>
    </>
  );
}

export default About;
