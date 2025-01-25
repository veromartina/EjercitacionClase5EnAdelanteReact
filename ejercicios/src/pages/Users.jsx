import { Link } from "react-router-dom";
import { users } from "../utils/users";

export const Users = () => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} style={{ display: "flex" }}>
          <p>{user.name}</p>
          <Link to={`${user.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
};