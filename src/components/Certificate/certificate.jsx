import React, { useState } from "react";
import "./certificate.css";
import sertificate from "../../assets/sertificate.png";
import sertificate2 from "../../assets/sertificate2.png";
import { useTranslation } from "react-i18next";
function Certificate() {
  const [selectedImage, setSelectedImage] = useState(null);
     const {t,i18n} = useTranslation()
        
            const changeLanguage = (lng) => {
              i18n.changeLanguage(lng);
            }
  const openModal = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = "hidden"; // чтобы не скроллилось при открытии
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  return (
    <section className="certificates-section">
      <div className="certificates-container">
        <h1 className="cert-title">My Certificates</h1>
        <p className="cert-subtitle">
          Achievements & Certifications I've earned during my learning journey.
        </p>

        <div className="cert-grid">
          <div className="cert-card" onClick={() => openModal(sertificate)}>
            <img src={sertificate} alt="Certificate 1" />
            <h3>{t('certificate2')}</h3>
          </div>

          <div className="cert-card" onClick={() => openModal(sertificate2)}>
            <img src={sertificate2} alt="Certificate 2" />
           <h3>{t('certificate')}</h3>
          </div>
        </div>
      </div>

      {/* Modal (открывается при клике) */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full certificate" className="modal-image" />
            <button className="close-btn" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificate;
