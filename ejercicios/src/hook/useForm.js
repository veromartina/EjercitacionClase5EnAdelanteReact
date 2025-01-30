// 1- tiene comenzar con use
// 2- puede utilizar otros hook ej: useState
// 3- NO retorna jsx!!
// 4- no retorna el set sino una función que haga lo que necesito

import { useState } from "react";

export const useForm = (initialValues) => {
    
  const [values, setValues] = useState(initialValues);  //initial Values(estado inicial). lo reeplazo por un objeto donde use el hook,por ej en un registro.
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });  //entre corchetes x q acceso a la clave del objeto. Q mantenga el valor q ya tenia "...values" ,en la key:"[e.target.name]" guardo el valor:"e.target.value" 
    console.log(values);
  };
  return {
    values,
    handleChange,
  };
};