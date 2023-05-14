import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [
  {
    id: 1,
    userName: "Pablo",
    password: "12345",
    email: "pablo@correo.com",
  },
];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  //user es la lista de usuarios y se modificara mediante el dispatch
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);

  const handlerAddUser = (user) => {
    //console.log(user);
    dispatch({
      type: user.id === 0 ? "addUser" : "updateUser",
      payload: user,
    });

    Swal.fire(
      user.id === 0 ? "Usuario creado" : "Usuario actualizado",
      user.id === 0
        ? "El usuario ha sido creado con éxito"
        : "El usuario ha sido actualizado con éxito",
      "success"
    );
    handlerCloseForm();
  };

  const handlerRemoveUser = (id) => {
    //console.log(id);

    Swal.fire({
      title: "Está seguro que desa eliminar?",
      text: "El usuario será eliminado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "removeUser",
          payload: id,
        });
        Swal.fire(
          "Usuario eliminado!",
          "El usuario ha sido eliminado con éxito",
          "success"
        );
      }
    });
  };

  const handlerUserSelectedForm = (user) => {
    //  console.log(user)
    setVisibleForm(true);
    setUserSelected({ ...user });
  };

  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setUserSelected(initialUserForm);
  };

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,

    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
  };
};
