import {
  Card as CardChakra,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
//import { products } from "../utils/products";
import { useMemo } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate()
  
const product = useMemo(()=> product.find((p) => +id === p.id),[id])

  const {name, description,price}= product
  return (
    <CardChakra maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size='md'>{name}</Heading>
     <Text>{description}</Text>
        <Text color='blue.600' fontSize='2xl'>
          $ {price} 
          </Text>
        
        </Stack>
        <Button colorScheme='pink' onClick={()=>navigate(-1)}>Atrás</Button>
      </CardBody>
      <Divider />
    </CardChakra>
  );
};

export default ProductDetails;


{/* Explicación de useMemo en este caso:
La función pasada a useMemo:
Dentro del useMemo, tienes la función product.find((p) => +id === p.id). Aquí, la función busca un producto en un array de productos (aunque no se muestra en el código, se asume que product es un arreglo de productos). La búsqueda compara el id de cada producto con el id que se pasa desde los parámetros de la URL (useParams).

Las dependencias:
El segundo argumento que se pasa a useMemo es el array [id]. Esto significa que useMemo solo volverá a ejecutar la búsqueda de producto si el valor de id cambia. Si el id permanece igual entre renderizados, useMemo devolverá el valor previamente memorizado y no volverá a ejecutar la búsqueda de productos.

¿Por qué usar useMemo aquí?:
Si product es un array grande, hacer una búsqueda con .find() en cada renderizado podría ser costoso en términos de rendimiento. Al usar useMemo, el cálculo de la variable product solo se ejecutará cuando el id cambie. De esta manera, si el id no cambia, React reutiliza el resultado anterior y no hace la búsqueda de nuevo.

En resumen:
El hook useMemo aquí se asegura de que el cálculo de product solo se realice cuando el id cambie, evitando renders innecesarios y mejorando el rendimiento en situaciones donde la búsqueda o el cálculo puede ser costoso. */}