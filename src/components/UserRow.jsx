
export const UserRow = ({ handlerUserSelectedForm, handlerRemoveUser, id, username, email}) => {

    return (
            <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
              <button
                className="btn btn-secondary btn-sm"
                type="button"
                onClick={() => handlerUserSelectedForm({
                  id,
                  username,
                  email
                })}
              >update</button>
            </td>
            <td>
            <button
                className="btn btn-danger btn-sm"
                type="button"
                onClick={() => handlerRemoveUser(id)}
              >remove</button>
            </td>
          </tr>
    )
}