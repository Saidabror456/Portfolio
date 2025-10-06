import { useTranslation } from 'react-i18next';
import './hello.css'
function Hello(){
         const { t, i18n } = useTranslation();
      
        const changeLang = (lng) => {
          i18n.changeLanguage(lng);
          setActiveLang(lng);
          setOpen(false);
        };
    return(
        <>
        <div className="hello">
            <h1>{t('hello1')}</h1>
            <p>{t('click')}</p>
        </div>
        </>
    )
}
export default Hello;