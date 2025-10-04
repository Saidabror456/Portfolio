import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/logo";
import "./navbar.css";
function Navbar() {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("uz");
  const langRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setLangOpen(false);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLang(lng);
    setLangOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      {/* === DESKTOP NAVBAR === */}
      <header className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-left">
          <button
            className="burger"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
          >
            <span className={`bar bar1 ${mobileOpen ? "active" : ""}`}></span>
          </button>

          <NavLink to="/" className="brand" aria-label="Homepage">
            <Logo />
            <div className="brand-text">
              <span className="brand-title">MyPortfolio</span>
              <span className="brand-sub">Frontend Developer</span>
            </div>
          </NavLink>
        </div>

        <nav className="nav-center">
          <ul className="nav-links">
            <li>
              <NavLink to="/start" className="nav-link">{t("home")}</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">{t("about")}</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link">{t("projects")}</NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className="nav-link">{t("contacts")}</NavLink>
            </li>
          </ul>
        </nav>

        <div className="navbar-right" ref={langRef}>
          <div
            className="dropdown"
            aria-haspopup="true"
            aria-expanded={langOpen}
          >
            <button
              className="dropdown-header"
              onClick={() => setLangOpen((s) => !s)}
              aria-label="Select language"
            >
              <span className="flag small-flag">
                {activeLang === "ru"}
                {activeLang === "en"}
                {activeLang === "uz"}
              </span>
              <span className="lang-code">{activeLang.toUpperCase()}</span>
              <span className={`arrow ${langOpen ? "open" : ""}`} aria-hidden>
                ▾
              </span>
            </button>

            {langOpen && (
              <ul className="dropdown-list" role="menu" aria-label="Languages">
                <li>
                  <button onClick={() => changeLang("ru")}> Русский</button>
                </li>
                <li>
                  <button onClick={() => changeLang("en")}> English</button>
                </li>
                <li>
                  <button onClick={() => changeLang("uz")}> O‘zbek</button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>

      
<aside
  ref={mobileRef}
  className={`mobile-menu ${mobileOpen ? "open" : ""}`}
  inert={!mobileOpen}
  role="dialog"
  aria-label="Mobile Menu"
>



        <div className="mobile-inner">
          <div className="mobile-top">
            <NavLink to="/" className="brand-mobile" onClick={() => setMobileOpen(false)}>
              <Logo />
            </NavLink>
            <button
              className="mobile-close"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav">
            <NavLink to="/start" onClick={() => setMobileOpen(false)}>{t("home")}</NavLink>
            <NavLink to="/about" onClick={() => setMobileOpen(false)}>{t("about")}</NavLink>
            <NavLink to="/projects" onClick={() => setMobileOpen(false)}>{t("projects")}</NavLink>
            <NavLink to="/contacts" onClick={() => setMobileOpen(false)}>{t("contacts")}</NavLink>
          </nav>

          <div className="mobile-langs">
            <button onClick={() => { changeLang("ru"); setMobileOpen(false); }}> Рус</button>
            <button onClick={() => { changeLang("en"); setMobileOpen(false); }}> Eng</button>
            <button onClick={() => { changeLang("uz"); setMobileOpen(false); }}> Uz</button>
          </div>

          <div className="mobile-footer">
            <small>© {new Date().getFullYear()} — MyPortfolio</small>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
