import React from "react";
import { useFetch } from "../hooks/useFetch";
import Card from "../componets/Card";
import { Grid,Heading, Stack } from "@chakra-ui/react";

const MockapiDetails = () => {
  const { data, loading, error } = useFetch('https://678842182c874e66b7d4c8fb.mockapi.io/api/cintia/products');

  if (loading) return <p> Cargando...</p>; // Muestra un mensaje de carga
  if (error) return <p>Error: {error}</p>; // Muestra un mensaje de error

  return (
    <Stack>
      <Heading>Lista de productos Mockapi</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data?.map((product) =>(
          <Card product={product}/>
        ))}
      </Grid>
    </Stack>
    );
};

export default MockapiDetails;