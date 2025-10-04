import { useTranslation } from "react-i18next";
import "./footer.css";
function Footer() {
     const { t, i18n } = useTranslation();
    
      const changeLang = (lng) => {
        i18n.changeLanguage(lng);
        setActiveLang(lng);
        setOpen(false);
      };
  return (
    <footer className="footer glass">
      <div className="footer-content">
        <h3>
          {t('footer')}
        </h3>
        <p>
      {t('endfooter')}
        </p>
        <div className="socials">
          <a href="https://github.com/Saidabror456" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://t.me/Said_Abror_00" target="_blank" rel="noreferrer">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="https://vk.com/keep_2204" target="_blank" rel="noreferrer">
            <i className="fab fa-vk"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
