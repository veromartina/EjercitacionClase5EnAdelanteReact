
import { useParams } from "react-router-dom";
import { users } from "../utils/users";

export const UsersDetails = () => {
  const { id } = useParams();
 
 const user = users.find((e)=> id === e.id )
 console.log(user)
  return (
    <div>
      <h1>{user?.id}</h1>
      <h2>Nombre: {user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};