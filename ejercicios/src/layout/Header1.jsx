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

{/* 1)NavLink: Es un componente proporcionado por React Router que funciona como un enlace de navegación 
2)className={({ isActive }) => (isActive ? "active" : "")}: Esta es una función que asigna una clase CSS al enlace. La función recibe un objeto que contiene la propiedad isActive, que es un booleano que indica si la ruta del NavLink es la que está actualmente activa (es decir, si la ruta coincide con la URL del navegador).
Si isActive es true, se le asigna la clase "active".
Si isActive es false, no se asigna ninguna clase.
3)to="/": La propiedad to define a qué ruta se dirigirá el enlace cuando el usuario haga clic. En este caso, el enlace llevará al usuario a la raíz de la aplicación (/).*/}

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