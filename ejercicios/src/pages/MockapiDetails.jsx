import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  CardBody,
  Card as CardChakra,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Spinner,  // Importar Spinner de Chakra UI
} from "@chakra-ui/react";

const MockapiDetails = () => {
  const { id } = useParams();  // obtengo el id del producto desde la URL
  const { data, isLoading, error } = useFetch(
    `https://678842182c874e66b7d4c8fb.mockapi.io/api/cintia/products/${id}` // Llamar solo al producto con el id
  );
  const navigate = useNavigate(); // Navegar hacia atrás

  if (isLoading) return (
    <Stack align="center" justify="center" minHeight="100vh">
      <Spinner size="xl" />
    </Stack>
  );
  
  if (error) return <p>Error: {error}</p>;

  return (
    <CardChakra maxW="sm" m={5}>
      {data && (
        <CardBody>
          <Image src={data.image} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{data.name}</Heading>
            <Text>{data.description}</Text>
            <Text color="blue.500" fontSize="2xl">
              $ {data.price}
            </Text>
          </Stack>
          <Button colorScheme="pink" onClick={() => navigate(-1)}>
            Volver atrás
          </Button>
          <Button variant="solid" colorScheme="blue" onClick={() => navigate('/')}>
            Volver Home
          </Button>
        </CardBody>
      )}
      <Divider />
    </CardChakra>
  );
};

export default MockapiDetails;