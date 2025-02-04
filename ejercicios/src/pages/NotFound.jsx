import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link, replace, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
       No existe la ruta error 404
       <Button colorScheme='pink' onClick={()=> navigate(-1, replace)}>Atrás</Button>
    </div>
  )
}

export default NotFound