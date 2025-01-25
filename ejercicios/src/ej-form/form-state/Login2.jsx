import { useState } from "react";

export const Login = () => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [values, setValues] = useState ({
    username: "",
    password: "",
  })
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };
 

 
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        value={values.username}
        id="username"
        name="username"
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
    </form>
  );
};