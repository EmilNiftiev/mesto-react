import React from "react";

function Card(props) {
  const { card, onCardClick } = props;

  function handleCardClick() {
    onCardClick(props.card);
  }

  return (
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={handleCardClick}
      />
      <button
        className="card__trash-button"
        type="button"
        aria-label="удалить карточку"
      ></button>
      <div className="card__option">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-group">
          <button
            className="card__like-button"
            type="button"
            aria-label="поставить или убрать лайк"
          ></button>
          <h3 className="card__like-counter">{card.likes.length}</h3>
        </div>
      </div>
    </li>
  );
}

export default Card;
