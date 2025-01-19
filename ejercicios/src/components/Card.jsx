
/* Codigo original en clase. Me muestra dos imagenes , porque se hace click para una nueva imagen pero a la vez se recarga la pagina 
*/
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
        display="direction-column"
        >  {/* Asegura que la imagen se ajuste dentro del contenedor sin distorsionarse*/}
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
           src={data.image}
           alt="Imagen aleatoria"
           width="200px"
           height="200px" // Tamaño fijo de la imagen
           objectFit="cover"/> {/*// Asegura que la imagen cubra el contenedor sin deformarse */}
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
