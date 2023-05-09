import React from "react";
import icon_auth_ok from "../images/icon_auth_ok.svg";
import icon_auth_fail from "../images/icon_auth_fail.svg";

function InfoTooltip(props) {
  const { name, isSignIn, isOpen, onClose } = props;
  const icon = isSignIn ? icon_auth_ok : icon_auth_fail;
  const message = isSignIn
    ? "Вы успешно зарегистрировались!"
    : "Что-то пошло не так! Попробуйте ещё раз.";

  return (
    <div
      className={`pop-up pop-up_type_${name} ${isOpen ? "pop-up_opened" : ""}`}
    >
      <div className="pop-up__container pop-up__container_type_tooltip">
        <button
          className="pop-up__close-button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <img className="pop-up__tooltip-img" src={icon} />
        <h3 className="pop-up__title">{message}</h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
