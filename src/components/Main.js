import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const {
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick,
    onCardLike,
    onCardDelete,
    cards,
  } = props;

  // Подписываемся на контекст
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <a
          href="#top"
          target="_self"
          className="profile__cover"
          onClick={onEditAvatar}
        >
          <img
            src={currentUser.avatar}
            alt="Аватар профиля"
            className="profile__avatar"
          />
        </a>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            className="profile__edit-button"
            aria-label="редактировать профиль"
            onClick={onEditProfile}
          ></button>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="добавить фотографию"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards-area">
        <ul className="cards">
          {cards.map((card) => (
            <Card
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
