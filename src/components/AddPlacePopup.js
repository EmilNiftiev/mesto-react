import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace } = props;
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="new-image"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Создать"
      children={
        <>
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            className="pop-up__input pop-up__input_type_card-name"
            placeholder="Название"
            name="card-name"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="pop-up__input-error" id="card-name-error"></span>
          <input
            value={link}
            onChange={handleLinkChange}
            type="url"
            className="pop-up__input pop-up__input_type_image-link"
            placeholder="Ссылка на картинку"
            name="image-link"
            required
          />
          <span className="pop-up__input-error" id="image-link-error"></span>
        </>
      }
    />
  );
}

export default AddPlacePopup;
