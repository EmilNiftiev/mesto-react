import React from "react";

function ImagePopup(props) {
  const { card, onClose } = props;
  return (
    <div
      className={`pop-up pop-up_dark-background pop-up_type_full-screen-image ${
        card ? "pop-up_opened" : ""
      }`}
    >
      <div className="pop-up__image-container">
        <figure className="pop-up__figure">
          <img
            src={card ? card.link : "#"}
            alt={card ? card.name : ""}
            className="pop-up__scale-image"
          />
          <figcaption className="pop-up__image-description">
            {card ? card.name : ""}
          </figcaption>
        </figure>
        <button
          className="pop-up__close-button"
          aria-label="Закрыть окно"
          title="Закрыть окно"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
