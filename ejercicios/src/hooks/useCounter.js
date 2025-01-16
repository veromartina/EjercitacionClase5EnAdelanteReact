// useCounter.js es una funcion, no es un componente
//diferencias entre un hooks y un componente:el componente me retorna jsx y el hook me retorna un objeto con las funciones que necesito

// Reglas:

import { useState } from "react";

// 1- tiene comenzar con use
// 2- puede utilizar otros hook ej: useState
// 3- NO retorna jsx!! retorna las funciones 
// 4- no retorna el set sino una función que haga lo que necesito.

export const useCounter = () => {
  const [count, setCount] = useState(0);
//exporto el hooks

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
//funciones basicas del contador

  return {
    increment,
    decrement,
    reset,
    count,
  };
};  
{/*me retorma las funciones  */}