
/* Codigo original en clase. Me muestra dos imagenes , porque se hace click para una nueva imagen pero a la vez se recarga la pagina 
*/

import { useFetch } from "../hooks/useFetch";
import { Alert, AlertIcon, Box, Button, Image, Spinner, Stack, Text } from "@chakra-ui/react"

const List = () => {

  const { data, isLoading, error } = useFetch("https://randomfox.ca/floof/");

  return (
    <Box
    maxW="sm"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="md"
    p={4}
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
        <Box>
          <Image
          src={data.image}
          alt="Imagen aleatoria"
          borderRadius="md"
          mb={4} />
          <Text fontSize="lg" fontWeight="bold" textAlign="center">
            Aqui tienes una imagen aleatoria
          </Text>
        </Box>
      )}
      <Button mt={4}
colorScheme="blue"
width="full"
onClick={()=>window.location.reload()}
> Cambiar imagen
</Button>
    </Box>
  )
}

export default List
