import React from "react";
import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const { isOpen, onClose } = props;
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать проофиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
      children={
        <>
          <input
            value={name}
            onChange={handleChangeName}
            type="text"
            className="pop-up__input pop-up__input_type_name"
            placeholder="Введите Ваше имя"
            name="name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="pop-up__input-error" id="name-error"></span>
          <input
            value={description}
            onChange={handleChangeDescription}
            type="text"
            className="pop-up__input pop-up__input_type_job"
            placeholder="Ваш род деятельности"
            name="job"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="pop-up__input-error" id="job-error"></span>
        </>
      }
    />
  );
}

export default EditProfilePopup;
