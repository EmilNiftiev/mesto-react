import { createContext } from "react";
import avatar from "../images/profile-avatar.jpg";

export const CurrentUserContext = createContext();

export const defaultUser = {
  name: "Жак",
  about: "Исследователь",
  avatar: avatar,
};
