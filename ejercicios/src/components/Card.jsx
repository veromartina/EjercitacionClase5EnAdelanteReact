import { useState, useEffect } from "react";
import { Box, Button, Image, Spinner, Stack, Text } from "@chakra-ui/react";

const Card = () => {
  const [imageUrl, setImageUrl] = useState(null); // Estado para almacenar la URL de la imagen
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga de la imagen

  // Función para obtener la imagen de la API
  const fetchImage = async () => {
    setIsLoading(true); // Establecer que estamos cargando la imagen
    try {
      const response = await fetch("https://randomfox.ca/floof/");
      const data = await response.json();
      console.log("Datos de la API recibidos:", data); // Verificar que la respuesta sea correcta
      setImageUrl(data.image); // Establecer la URL de la imagen
      setIsLoading(false); // Cambiar el estado cuando la imagen se haya cargado
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      setIsLoading(false); // Asegurarse de que no quede cargando indefinidamente
    }
  };

  // Cargar la imagen al montar el componente
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Box maxW="sm" borderRadius="lg" overflow="hidden" boxShadow="md" p={4} h="350px">
      {/* Mostrar el spinner mientras se carga la imagen */}
      {isLoading ? (
        <Stack align="center" spacing={4}>
          <Spinner size="lg" />
          <Text>Cargando nueva imagen...</Text>
        </Stack>
      ) : (
        // Mostrar la imagen si está disponible
        imageUrl && (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              src={imageUrl}
              alt="Imagen aleatoria de zorro"
              width="200px"
              height="200px"
              objectFit="cover"
            />
            <Text fontSize="lg" textAlign="center" pt="30px">
              Aquí tienes una imagen aleatoria de zorros
            </Text>
          </Box>
        )
      )}

      {/* Botón para cambiar la imagen */}
      <Button mt={4} colorScheme="blue" width="full" onClick={fetchImage}>
        Cambiar imagen
      </Button>
    </Box>
  );
};

export default Card;





/*  ***FUNCIONA PERO NO MUESTRA EL SPINNER CUANDO SE HACE CLICK EN EL BOTON DE CAMBIAR LA IMAGEN ***

import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Alert, AlertIcon, Box, Button, Image, Spinner, Stack, Text } from "@chakra-ui/react"

const Card = () => {

  //const { data, isLoading, error } = useFetch("https://randomfox.ca/floof/");

   // Estado para forzar la actualización de la imagen.
   const [reloadKey, setReloadKey] = useState(0); //Este estado se incrementa cada vez que haces clic en el botón. Esto permite que el hook useFetch vea un cambio en el parámetro reloadKey y haga una nueva petición.

   // Al hacer clic en el botón, incrementar el reloadKey
   const handleRefresh = () => {
     setReloadKey((prevKey) => prevKey + 1);
   };
 
   // Pasamos el reloadKey al hook useFetch para que se vuelva a ejecutar la petición
   const { data, isLoading, error } = useFetch(`https://randomfox.ca/floof/?${reloadKey}`);  //Al concatenar ?${reloadKey} a la URL de la API, estás asegurando que, aunque la URL base sea la misma, el valor de reloadKey se cambia y esto genera un efecto de "nueva solicitud" cada vez que el valor cambie. Esto evita que se haga una recarga de la página y, al mismo tiempo, garantiza que obtengas una nueva imagen sin duplicaciones.

  return (
    <Box
    maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      h="350px"  // Contenedor fijo en altura
    >
      {isLoading && (
        <Stack align="center" spacing={4}>
          <Spinner size="lg" />
          <Text>Cargando nueva imagen</Text>
        </Stack>
      )}
      {error && (
        <Alert status= "error">
          <AlertIcon />
          Ocurrio un error al intentar cargar la imagen: {error.message}
        </Alert>
      )}
      {data && (
        <Box display="flex"
        flexDirection="column"
        >  {/* Asegura que la imagen se ajuste dentro del contenedor sin distorsionarse*
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
           src={data.image}
           alt="Imagen aleatoria"
           width="200px"
           height="200px" // Tamaño fijo de la imagen
           objectFit="cover"/> {/* Asegura que la imagen cubra el contenedor sin deformarse 
           </Box>
          <Text fontSize="lg"
          textAlign="center"
          pt="30px">
            Aqui tienes una imagen aleatoria de zorros
          </Text>
        </Box>
      )}
      <Button mt={4}
colorScheme="blue"
width="full"
onClick={handleRefresh}
> Cambiar imagen
</Button>
    </Box>
  )
}

export default Card


*/