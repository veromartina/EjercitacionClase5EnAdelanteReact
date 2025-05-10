import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState(null); // Datos obtenidos de la petición
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url); // Petición GET con Axios
        setData(response.data); // Guardar los datos en el estado
        setIsLoading(false); // Terminar el estado de carga
      } catch (err) {
        setError(err); // Guardar el error si ocurre
        setIsLoading(false);
      } finally {
        setIsLoading(false); // Asegurarse de que la carga termine
      }
    };

    fetchData();
  }, [url]); // Ejecutar el efecto cuando la URL cambie

  return { data, error, isLoading }; // Retornar el estado y datos
};