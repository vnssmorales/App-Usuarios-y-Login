import { useReducer } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [
    {
        id: 1,
        userName: 'Pablo',
        password: '12345',
        email: "pablo@correo.com"
    },
 ];
export const UsersApp = () => {

    //user es la lista de usuarios y se modificara mediante el dispatch
    const [users, dispatch] = useReducer(usersReducer, initialUsers);

 const handlerAddUser = (user) => {
    //console.log(user);
    dispatch({
        type: 'addUser',
        payload: user,
    })
 }

 const handlerRemoveUser = (id) => {
  //console.log(id);
  dispatch({
    type: 'removeUser',
    payload: id,
  })
 }

  return (
    <div className="container my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          <UserForm handlerAddUser ={handlerAddUser} />
        </div>
        <div className="col">
          <UsersList 
          handlerRemoveUser= {handlerRemoveUser}
          users={users} /> 
        </div>
      </div>
    </div>
  );
};
