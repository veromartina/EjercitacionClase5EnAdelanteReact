import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Box p={4} bg="teal.500" color="white" display="flex" justifyContent="space-between">
      <Link to="/">
        <Button colorScheme="teal" variant="link">Inicio</Button>
      </Link>
      <Link to="/create">
        <Button colorScheme="teal">Crear Publicación</Button>
      </Link>
    </Box>
  );
};

export default NavBar;