import React from "react";
import { useFetch } from "../hooks/useFetch";
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
import { Navigate } from "react-router-dom";

const MockapiDetails = () => {
  const { data, isLoading, error } = useFetch(
    "https://678842182c874e66b7d4c8fb.mockapi.io/api/cintia/products"
  );

  if (isLoading) return <p> Cargando...</p>; // Muestra un mensaje de carga
  if (error) return <p>Error: {error}</p>; // Muestra un mensaje de error

  return (
    <CardChakra maxW="sm" m={5}>
      {data && (
        <CardBody>
          <Image src={data.image} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{data.name}</Heading>
            <Text>{data.description}</Text>
            <Text color="blue.500" fontSize="2xl">
              {" "}
              $ {data.price}
            </Text>
          </Stack>
          <Button colorScheme="pink" onClick={() => Navigate(-1)}>
            volver atras
          </Button>
        </CardBody>
      )}
      <Divider />
    </CardChakra>
  );
};

export default MockapiDetails;
