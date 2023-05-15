import { useReducer } from "react";
import Swal from "sweetalert2";
import { loginReducer } from "../reducers/loginReducer";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false,
  user: undefined,
};

export const useAuth = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);

  const handlerLogin = ({ username, password }) => {
    if (username === "admin" && password === "12345") {
      const user = { username: "admin" };
      dispatch({
        type: "login",
        payload: user,
      });
      sessionStorage.setItem(
        "login",
        JSON.stringify({
          //en sesionStorage no se pueden guardar objetos, solo string
          isAuth: true,
          user,
        })
      );
    } else {
      Swal.fire("Error de login", "Username y password inválidos", "error");
    }
  };

  const handlerLogout = () => {
    dispatch({
      type: "logout",
    });
    sessionStorage.removeItem("login");
  };
  return {
    login,
    handlerLogin,
    handlerLogout,
  };
};