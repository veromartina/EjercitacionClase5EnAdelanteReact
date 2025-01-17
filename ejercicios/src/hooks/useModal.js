//Crear un custom hook (useModal) que gestione el estado de un modal (abierto o cerrado).

import { useState } from "react";

// export const useModal = ({initialState=false}) => {
export const useModal = () => {
  // const [isOpen, setIsOpen] = useState(initialState)  //1)estado inicial por defecto
  // const [isOpen, setIsOpen] = useState(initialState||false)//2) condicional , sino me pasan nada de estado inicial entonces es false

  const [isOpen, setIsOpen] = useState(false); // un estado donde guardo el valor de lo que quiero usar . para saber si el modal esta abierto o cerrado.3)el estado inicial es falso 
  
  //creo las funciones abrir,cerrar, desplegar
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((prev) => !prev); //lo negamos, si es falso  pasa a true y viseversa

  //se puede retornar un objeto o un array . lo mas facil es un objeto para despues volver a usarlo. isOpen:devuelve el estado. y devuelve las funciones
  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};