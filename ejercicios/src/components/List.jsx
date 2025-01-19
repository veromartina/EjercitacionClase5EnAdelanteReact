/*CON INPUT PARA BUSCAR PAGINA */

import { Button, ButtonGroup, Heading, Image, Stack, Text, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination";

const List = () => {
  const { currentPage, nextPage, prevPage, totalPages, setTotal, setCurretPage} = usePagination();
  const [inputPage, setInputPage] = useState(""); // Estado para el input de la página
  const { data, isLoading, error } = useFetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);

  // Actualizar el total de páginas cuando se obtienen los datos
  useEffect(() => {
    if (data?.info?.pages) {
      setTotal(data.info.pages);
    }
  }, [data, setTotal]);

  const handlePageChange = () => {
    const page = parseInt(inputPage);
    if (page > 0 && page <= totalPages) {
      setInputPage("");
      // Cambiar a la página ingresada
      setCurretPage(page);
    } else {
      alert("Número de página no válido");
    }
  };

  if (isLoading) return <p>Cargando personajes...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Heading>Rick and Morty</Heading>
      {data?.results.map((character) => (
        <Stack key={character.id}>
          <Image src={character.image} alt={character.name} borderRadius="50%" width="100px" />
          <Text>{character.name}</Text>
        </Stack>
      ))}
      <ButtonGroup variant="outline" spacing="6">
        <Button
          colorScheme="blue"
          onClick={prevPage}
          isDisabled={currentPage === 1} // Deshabilitar cuando estamos en la primera página
        >
          Anterior
        </Button>
        
        <Text>{`Página ${currentPage} de ${totalPages}`}</Text>
        
        <Button
          colorScheme="blue"
          onClick={nextPage}
          isDisabled={currentPage === totalPages} // Deshabilitar cuando estamos en la última página
        >
          Siguiente
        </Button>
      </ButtonGroup>

      {/* Input para buscar una página específica */}
      <Stack spacing={4} direction="row" align="center" mt={4}>
        <Text>Ir a la página:</Text>
        <Input
          type="number"
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
          max={totalPages}
          min={1}
          placeholder="Número de página"
        />
        <Button colorScheme="green" onClick={handlePageChange}>
          Ir
        </Button>
      </Stack>
    </>
  );
};

export default List;




/* CON NRO DE PAGINAS Y SIN INPUT PARA BUSCAR PAGINA ESPECIFICA

import { Button, ButtonGroup, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination";
import { useEffect } from "react";

const List = () => {
  const { currentPage, nextPage, prevPage, totalPages, setTotal } = usePagination();
  const { data, isLoading, error } = useFetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);

  // Actualizamos el total de páginas cada vez que se obtienen datos
  useEffect(() => {
    if (data?.info?.pages) {
      setTotal(data.info.pages);
    }
  }, [data, setTotal]);

  if (isLoading) return <p>Cargando personajes...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Heading>Rick and Morty</Heading>
      {data?.results.map((character) => (
        <Stack key={character.id}>
          <Image src={character.image} alt={character.name} borderRadius="50%" width="100px" />
          <Text>{character.name}</Text>
        </Stack>
      ))}
      <ButtonGroup variant="outline" spacing="6">
        <Button
          colorScheme="blue"
          onClick={prevPage}
          isDisabled={currentPage === 1} // Deshabilitar cuando estamos en la primera página
        >
          Anterior
        </Button>
        <Text>{`Página ${currentPage} de ${totalPages}`}</Text>
        <Button
          colorScheme="blue"
          onClick={nextPage}
          isDisabled={currentPage === totalPages} // Deshabilitar cuando estamos en la última página
        >
          Siguiente
        </Button>
      </ButtonGroup>
    </>
  );
};

export default List;



/* SIN NUMERO DE PAGINAS

import { Button, ButtonGroup, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination"


const List = () => {
  const {currentPage, nextPage, prevPage, totalPages} = usePagination()
    const { data, isLoading, error} = useFetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)

    if (isLoading) return <p>Cargando personajes..</p>;
    if (error) return <p>Error: {error.message}</p>;


  return (
<>
      <Heading> Rick and Morty </Heading>
      {
        data?.results.map((c)=> 
          (<Stack key={c.id}>
            <Image src={c.image} alt={c.name} borderRadius="50%" width="100px"/>
            <Text>{c.name}</Text>
            </Stack>
        ))
      }
      <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme= "blue" 
        onClick={prevPage}
        isDisabled={currentPage === 1}>-
        </Button>
        <Button colorScheme= "blue" 
        onClick={nextPage}
        isDisabled={currentPage === totalPages}>+
        </Button>
      </ButtonGroup>
   </>
  );
};

export default List
*/