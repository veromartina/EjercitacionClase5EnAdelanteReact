import { useParams } from "react-router-dom";
import { users } from "../utils/users";


export const UsersDetails = () => {
  const { id } = useParams(); //se utiliza para traer los parametros
  const user = users.find((e) => id === e.id);
console.log(user)
  return (
    <div>
      <h2>{user?.id}</h2> {/* Muestra el id del usuario */}
      <h2>Nombre: {user.name}</h2> {/* Muestra el nombre del usuario */}
      <p>Email: {user.email}</p> {/* Muestra el email del usuario */}
    </div>
  );
};
