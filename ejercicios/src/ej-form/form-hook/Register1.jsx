import { useForm } from "../../hooks/useForm";

export const Register = () => {
  const { values, handleChange } = useForm({
    name: "",
    lastname: "",
    password: "",
    repeat_password: ""
  });
  return (
    <form>
      <label htmlFor="name">name</label>
      <input
        type="text"
        value={values.name}
        id="name"
        name="name"
        onChange={handleChange}
        placeholder="Ingrese su usuario"
      />
      <label htmlFor="lastname">lastname</label>
      <input
        type="text"
        value={values.lastname}
        id="lastname"
        name="lastname"
        onChange={handleChange}
        placeholder="Ingrese su usuario"
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        value={values.password}
        id="password"
        name="password"
        onChange={handleChange}
        placeholder="Ingrese su contraseña"
      />
      <label htmlFor="repeat_password">repeat password</label>
      <input
        type="repeat_password"
        value={values.repeat_password}
        id="repeat_password"
        name="repeat_password"
        onChange={handleChange}
        placeholder="Ingrese su contraseña"
      />
    </form>
  );
};