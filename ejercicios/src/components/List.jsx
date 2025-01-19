import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch"


const List = () => {
    const { data, isLoading, error} = useFetch("https://rickandmortyapi.com/api/character")


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
   </>
  )
};

export default List
