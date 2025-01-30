import { Link } from "react-router-dom";
import { users } from "../utils/users";

export const Users = () => {
  return (
    
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} style={{ display: "flex" }}>
          <p>{user.name}</p>
          <Link to={`${user.id}`}> Ver detalles</Link> {/* sin la "/"delante para que concatene el id, sino le pongo me lleva a la pagina inicial*/}
        </div>
      ))}
    </div>
  );
}