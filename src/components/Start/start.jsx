import './start.css';
import hello from '../../assets/hello.png'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
function Start() {
   const { t, i18n } = useTranslation();
  
    const changeLang = (lng) => {
      i18n.changeLanguage(lng);
      setActiveLang(lng);
      setOpen(false);
    };
  return (
    <section className="start-section">
      <div className="start-overlay"></div>
      <div className="start-content">
        <h1>
          {t('hello')} <img src={hello} alt="" />, {t('me')} <span className="highlight">Junior Frontend Developer</span>
        </h1>
        <p className="subtitle">
           {t('inf')}
        </p>
        <div className="buttons">
          <NavLink to="/projects" className="btn primary">
            {t("but1")}
          </NavLink>
          <a href="https://t.me/Said_Abror_00" className="btn secondary">{t('but2')}</a>
        </div>
      </div>
    </section>
  );
}

export default Start;
