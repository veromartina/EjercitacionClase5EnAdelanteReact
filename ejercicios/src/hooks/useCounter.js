// Reglas:

import { useState } from "react";

// 1- tiene comenzar con use
// 2- puede utilizar otros hook ej: useState
// 3- NO retorna jsx!!
// 4- no retorna el set sino una función que haga lo que necesito

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

 
  return {
    increment,
    decrement,
    reset,
    count,
  };
};