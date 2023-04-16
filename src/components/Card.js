import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const { card, onCardClick, onCardLike, onCardDelete } = props;
  // Подписываемся на контекст
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__like-button ${
    isLiked && "card__like-button_active"
  }`;

  const cardTrashButtonClassName = `card__trash-button ${
    isOwn ? "card__trash-button_visible" : ""
  }`;

  function handleCardClick() {
    onCardClick(props.card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={handleCardClick}
      />
      {/* В разметке используем переменную для условного рендеринга */}
      {isOwn && (
        <button
          className={cardTrashButtonClassName}
          type="button"
          aria-label="удалить карточку"
          onClick={handleCardDelete}
        />
      )}
      <div className="card__option">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-group">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="поставить или убрать лайк"
            onClick={handleLikeClick}
          ></button>
          <h3 className="card__like-counter">{card.likes.length}</h3>
        </div>
      </div>
    </li>
  );
}

export default Card;
