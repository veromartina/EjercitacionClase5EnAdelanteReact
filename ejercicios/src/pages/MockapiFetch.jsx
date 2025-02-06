import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Button, Card as ChakraCard, CardBody, Divider, Heading, Stack, Text, Image } from "@chakra-ui/react"; 
import { Navigate } from "react-router-dom";

const MockapiFetch = () => {
  const { data, loading, error } = useFetch('https://678842182c874e66b7d4c8fb.mockapi.io/api/cintia/products');

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ChakraCard maxW="sm" m={5}>  {/* Uso Card con el alias ChakraCard */}
      {data && (
        <CardBody>
          <Image src={data.image} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{data.name}</Heading>
            <Text>{data.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              $ {data.price}
            </Text>
          </Stack>
          <Button colorScheme="pink" onClick={() => Navigate(-1)}>Regresar</Button>
        </CardBody>
      )}
      <Divider />
    </ChakraCard>
  );
};

export default MockapiFetch;