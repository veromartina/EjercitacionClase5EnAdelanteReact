import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom"; //importar useParams y useNavigate
import {
  Button,
  CardBody,
  Card as CardChakra,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";


const MockapiDetails = () => {
  const { id } = useParams();  // obtengo el id del producto desde la URL
  const { data, isLoading, error } = useFetch(
    `https://678842182c874e66b7d4c8fb.mockapi.io/api/cintia/products/${id}` // Llamar solo al producto con el id
  );
  const navigate = useNavigate(); // Navegar hacia atrás

  if (isLoading) return <p> Cargando...</p>;
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
        </CardBody>
      )}
      <Divider />
    </CardChakra>
  );
};

export default MockapiDetails;