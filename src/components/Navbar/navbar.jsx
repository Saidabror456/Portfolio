import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import Hello from "../Hello/hello";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("en"); 

  const langRef = useRef(null);
  const mobileRef = useRef(null);
  const location = useLocation(); 

  useEffect(() => {
    i18n.changeLanguage("en");
  }, [i18n]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
      if (mobileRef.current && !mobileRef.current.contains(e.target)) setMobileOpen(false);
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLang(lng);
    setLangOpen(false);
    setMobileOpen(false);
  };

  const navLinks = [
    { path: "/start", label: t("home") },
    { path: "/about", label: t("about") },
    { path: "/projects", label: t("projects") },
    { path: "/contacts", label: t("contacts") },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-left"></div>

        <div className="logo">
          <h1 className="logo">
            Saidabror<span>'s</span> Portfolio
          </h1>
        </div>

        <nav className="nav-center">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-right" ref={langRef}>
          <div className="dropdown" aria-haspopup="true" aria-expanded={langOpen}>
            <button
              className="dropdown-header"
              onClick={() => setLangOpen((s) => !s)}
              aria-label="Select language"
            >
              <span className="lang-code">{activeLang.toUpperCase()}</span>
              <span className={`arrow ${langOpen ? "open" : ""}`} aria-hidden>
                ▾
              </span>
            </button>

            {langOpen && (
              <ul className="dropdown-list" role="menu" aria-label="Languages">
                <li><button onClick={() => changeLang("ru")}>Русский</button></li>
                <li><button onClick={() => changeLang("en")}>English</button></li>
                <li><button onClick={() => changeLang("uz")}>O‘zbek</button></li>
              </ul>
            )}
          </div>
        </div>
      </header>
      {(location.pathname === "/") && <Hello />}
    </>
  );
}

export default Navbar;
