/* eslint-disable no-undef */
import { Button } from '@chakra-ui/react'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

// const NoExiste
const NotFound = () => {

  return (
    <div>
       No existe la ruta error 404
       <Button colorScheme='pink' as={Link} to="/" >Ir a home</Button>  {/*uso "button" de chackra con propiedades del "Link" del "Dom", para que funcione como un link que me lleva al "home" */}
    </div> 
  )
}

export default NotFound