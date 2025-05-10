import React from 'react'
import { Outlet } from 'react-router-dom' 
//Outlet:componente que me permite renderizar el contenido hijo (lo que usaba antes como children) 

const Account = () => {
  return (
    <div>
      Mi cuenta
      <Outlet/>  {/*renderiza todo lo que va entre la etiqueta de apertura y cierre de route (en Routes.jsx)(en este ejemplo queda fija cuenta y se renderiza carrito  y/perfil) oultet es dimnamico , cambia segun la ruta que ponga (carrito o perfil) */}
          </div>
  )
}

export default Account
