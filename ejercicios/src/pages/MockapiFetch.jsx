import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Grid, Stack, Heading, Spinner } from "@chakra-ui/react";
import Card from "../componets/Card";

const MockapiFetch = () => {
  const { data, isLoading, error } = useFetch('https://678842182c874e66b7d4c8fb.mockapi.io/api/cintia/products');

  if (isLoading) return (
    <Stack align="center" justify="center" minHeight="100vh">
      <Spinner size="xl" />
    </Stack>
  );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Stack>
      <Heading>Lista de productos Mockapi</Heading>
      <Grid templateColumns="repeat(3,1fr)" gap={6}>
        {data?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Grid>
    </Stack>
  );
};

export default MockapiFetch;