//si el usuario no esta logeado se redirige a login 
import React from 'react'
import { Navigate, Outlet, redirect } from 'react-router-dom';
const user = true //quiero mostrar que el usuario esta autenticado

const ProtectedRoute = () => {
    if(!user){
        return <Navigate to="/home" replace/>;
        //return redirect("/login");
    }   {/*  redirect:funcion de react(como parametro:a donde dirigirse), si existe usuario me lleva a login(en este caso a home(inicio))*/}
  return (
    <Outlet/>   
  )
}; {/* si no hay usuario  que retorne outlet*/}

export default ProtectedRoute
