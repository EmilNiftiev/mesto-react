import React, { useContext, useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar } = props;
  const currentUser = useContext(CurrentUserContext);
  const avatarRef = useRef(currentUser.avatar);

  //   удаляем предыдущую ссылку
  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="new-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
      children={
        <>
          <input
            ref={avatarRef}
            type="url"
            className="pop-up__input pop-up__input_type_avatar-link"
            placeholder="Ссылка на фотографию"
            name="avatar"
            required
          />
          <span className="pop-up__input-error" id="avatar-error"></span>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
