import { useForm } from "../../hooks/useForm";


export const Login = () => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

 const {values, handleChange} = useForm({
    username: "",
    password: "",
  })
 
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