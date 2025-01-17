/* eslint-disable react/prop-types */

import { useToggle } from "../hooks/useToggle";

export const Accordion = ({ title, children }) => {
    const  {
        isOpen,
        toggle,
      } = useToggle()  //objeto, traigo las funciones
  return (
    <div>
      <header>
        <h2>{title} <button onClick={toggle}>{isOpen?"-":"+"}</button></h2>   </header>
         {/*boton para desplegar las opciones.condicional:cuando este abierto va a tener un mas o viseversa. {title}:es la prop que viene de app.jsx*/}

     <main>{isOpen && children}</main>
    </div>
  )
};


      {/* 3 formas de mostrar children (main)(cuando mostrarlo o no): 
     1) {isOpen && <main>{children}</main>} si "isOpen"(si esta abierto) que me muestre "children"
     2) <main>{isOpen && children}</main> si 
     3) {isOpen?<main>{children}</main>: <main></main>}*/}
