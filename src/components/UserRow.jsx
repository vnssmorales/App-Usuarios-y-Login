
export const UserRow = ({ handlerRemoveUser, id, username, email}) => {

  const onRemoveUser = (id) => {
         handlerRemoveUser(id);
  }

    return (
            <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
              <button
                className="btn btn-secondary btn-sm"
                type="button"
              >update</button>
            </td>
            <td>
            <button
                className="btn btn-danger btn-sm"
                type="button"
                onClick={() => onRemoveUser(id)}
              >remove</button>
            </td>
          </tr>
    )
}