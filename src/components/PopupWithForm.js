import React from "react";

function PopupWithForm(props) {
  const { name, title, children, isOpen, onClose, buttonText, onSubmit } =
    props;

  return (
    <div
      className={`pop-up pop-up_type_${name} ${isOpen ? "pop-up_opened" : ""}`}
    >
      <div className="pop-up__container">
        <h3 className="pop-up__title">{title}</h3>
        <form className="pop-up__form" name={name} onSubmit={onSubmit}>
          {children}
          <button
            className="pop-up__save-button pop-up__save-button_type_edit-profile"
            type="submit"
            title="Сохранить результат и выйти"
          >
            {buttonText}
          </button>
        </form>
        <button
          className="pop-up__close-button"
          aria-label="Закрыть форму"
          title="Закрыть форму без сохранения"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
