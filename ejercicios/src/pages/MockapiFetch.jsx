import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Grid, Stack, Heading } from "@chakra-ui/react"; 
import Card from "../componets/Card"

const MockapiFetch = () => {
  const { data, loading, error } = useFetch('https://678842182c874e66b7d4c8fb.mockapi.io/api/cintia/products');

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Stack>
      <Heading>Lista de productos Mockapi</Heading>
      <Grid templateColumns="repeat(3,1fr)" gap={6}>
        { data?.map((product)=>(
          <Card product={product}/>)
        )}
      </Grid>
    </Stack>
  
  );
};

export default MockapiFetch;