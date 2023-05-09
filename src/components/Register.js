import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister({ email, password });
  }

  return (
    <div className="auth">
      <h3 className="auth__title">Регистрация</h3>
      <form className="auth__form" onSubmit={handleSubmit}>
        <fieldset className="auth__fieldset">
          <input
            className="auth__input"
            type="email"
            name="email"
            value={email}
            placeholder="Введите Ваш email"
            onChange={handleChangeEmail}
            required
          />
          <input
            className="auth__input"
            type="password"
            name="password"
            value={password}
            placeholder="Придумайте пароль"
            minLength={8}
            maxLength={50}
            onChange={handleChangePassword}
            required
          />
        </fieldset>
        <button className="auth__submit">Зарегистрироваться</button>
      </form>
      <Link to="/sign-in" className="auth__link">
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}

export default Register;
