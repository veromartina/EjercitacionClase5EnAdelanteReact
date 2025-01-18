
/* EJERCICIO REALIZADO EN CLASE */
import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState(null); // Datos obtenidos de la petición
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error


  //se crea una funcion asincrona para poder hacer la peticion(la data no esta en el momento)
  useEffect(() => {
    const fetchData = async () => {
      //
      try {
        //por ser asincrona se usa el try
        const response = await axios.get(url); // Petición GET con Axios
        setData(response.data); // Guardar los datos en el estado
        setIsLoading(false); // Terminar el estado de carga. cambio el estado
      } catch (err) {
        setError(err); //Captura el error para q lo guarde si ocurre.
        setIsLoading(false);
      } finally {
        setIsLoading(false); // Asegurarse de que la carga termine,sino tengo error.
      }
    };

    fetchData(); //ejecuto la funcion para que me haga la peticion
  }, [url]); //cuando cambie la url va a tener que ejecurase(cambiar)

  return { data, error, isLoading }; // Retornar el estado y datos. no hay funciones pero si estados
}; 
