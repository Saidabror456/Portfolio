import { useTranslation } from 'react-i18next';
import './timeline.css';
function Timeline() {
     const { t, i18n } = useTranslation();
  
    const changeLang = (lng) => {
      i18n.changeLanguage(lng);
      setActiveLang(lng);
      setOpen(false);
    };
  return (
    <section className="timeline" id="timeline">
      <h2 className="section-title">{t('way')}</h2>
      <div className="timeline-container">
        
        <div className="timeline-item left">
          <div className="content">
            <h3>{t('june')}</h3>
            <p>{t('start')}.</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <h3>{t('january')}</h3>
            <p>{t('norm')}</p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="content">
            <h3>{t('theend')}</h3>
            <p>{t('finish')}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Timeline;
