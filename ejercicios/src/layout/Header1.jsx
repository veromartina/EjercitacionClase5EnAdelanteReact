/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

export const Header1 = () => {
  return (
    <div className="header">
      <h1>22va REACT</h1>
      {/* <a href='/login'>Login</a> referencia , de esta manera me recarga la pagina y despues me muestra la pagina */}

      <nav>
        {/* <Link to='/' >Home</Link>
      <Link to='/login' >Login</Link> */}
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        > {/*propiedad "isActive" */}
          Home
        </NavLink> {/*etiqueta q me trae el paquete. "to"es como el "href" referencia donde me lleva  */}
      
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/users"
        >
          users
        </NavLink>
      </nav>
    </div>
  );
};