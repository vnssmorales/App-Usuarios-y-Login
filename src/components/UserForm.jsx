export const UserForm = () => {

   const onInputChange = ({target}) => {
      console.log(target.value)
   }

  return (
    <form>
      <input
        className="form-control my-3 w-75"
        placeholder="Username"
        name="username"
        onChange={onInputChange}
      />

      <input
        className="form-control my-3 w-75"
        placeholder="Password"
        type="password"
        name="password"
        onChange={onInputChange}
      />

      <input
        className="form-control my-3 w-75"
        placeholder="Email"
        name="email"
        onChange={onInputChange}
      />

      <button className="btn btn-primary" type="submit">
        Crear
      </button>
    </form>
  );
};
