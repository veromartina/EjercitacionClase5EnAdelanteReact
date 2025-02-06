import { Card as CardChakra, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
  const { id, name, price,image} = product
  return (
    <CardChakra maxW='sm'>
    <CardBody>
      <Image
        src={image? image : 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        alt={name}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
     
        <Text color='blue.600' fontSize='2xl'>
          $ {price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button as={Link} to={`${id}`} variant='solid' colorScheme='blue'>
         Ver más
        </Button>
        {/* <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button> */}
      </ButtonGroup>
    </CardFooter>
  </CardChakra>
  )
}

export default Card