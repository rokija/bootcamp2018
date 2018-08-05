import axios from "axios";
import sha256 from "sha256";
import { API } from "../constants";

export const login = ({ email, password }) => {
  return dispatch => {
    return axios
      .post(`${API.BASE}${API.LOGIN}`, {
        email,
        hashedPassword: sha256(password)
      })
      .then(() => true)
      .catch(() => false);
  };
};
