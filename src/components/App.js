import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <PopupWithForm
          name="edit-profile"
          title="Редактировать проофиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
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
        <PopupWithForm
          name="new-image"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
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
                type="url"
                className="pop-up__input pop-up__input_type_image-link"
                placeholder="Ссылка на картинку"
                name="image-link"
                required
              />
              <span
                className="pop-up__input-error"
                id="image-link-error"
              ></span>
            </>
          }
        />

        <PopupWithForm
          name="new-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
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

        <PopupWithForm
          name="delete-confirm"
          title="Вы уверены?"
          onClose={closeAllPopups}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Footer />
      </div>
    </div>
  );
}

export default App;
