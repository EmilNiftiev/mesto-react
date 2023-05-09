import React from "react";
import headerLogo from "../images/header-logo.svg";
import { Routes, Route, Link, useLocation } from "react-router-dom";

function Header(props) {
  const { loggedIn, email, logOut } = props;
  const location = useLocation();
  const linkText = location.pathname === "/sign-in" ? "Регистрация" : "Войти";
  const buttonText = loggedIn ? "Выйти" : linkText;
  return (
    <header className="header">
      <img src={headerLogo} className="header__logo" alt="Логотип Место" />
      <div className="header__links">
        {loggedIn && <p className="header__email">{email}</p>}
        <Routes>
          <Route
            path="/react-mesto-auth"
            element={
              <Link to="/sign-in" className="header__link header__button">
                Войти
              </Link>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Link to="/sign-in" className="header__link header__button">
                Войти
              </Link>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Link to="/sign-up" className="header__link header__button">
                Регистрация
              </Link>
            }
          />
        </Routes>
        {loggedIn && (
          <button className="header__link header__button" onClick={logOut}>
            {buttonText}
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
