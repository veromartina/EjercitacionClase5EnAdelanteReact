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
  // eslint-disable-next-line no-unused-vars
  import React from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import { products } from "../utils/products";
  import { useMemo } from "react";
  
  const ProductDetails = () => {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate()
    
  const product = useMemo(()=> products.find((p) => +id === p.id),[id])
  
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
          <Text color='blue.300' fontSize='2xl'>
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