import {
    Card as CardChakra,
    CardBody,
    Heading,
    Stack,
    Text,
    CardFooter,
    Button,
  } from "@chakra-ui/react";
  import React from "react";
  import { NavLink } from "react-router-dom";
  
  const Card = ({post}) => {
    return (
      <CardChakra maxW='sm'>
        <CardBody>
        
          <Stack mt="6" spacing="3">
            <Heading size="md">{post.title}</Heading>
  
            <Text color="blue.600" fontSize="2xl">
             {post.description}
            </Text>
            <Text color="blue.600" fontSize="2xl">
             {post.autor}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button as={NavLink} to={`posts/${post.id}`} variant='solid' colorScheme='blue'>Ver detalles</Button>
        </CardFooter>
      </CardChakra>
    );
  };
  
  export default Card;