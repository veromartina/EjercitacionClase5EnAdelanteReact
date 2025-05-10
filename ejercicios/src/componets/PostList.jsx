//Este componente será el encargado de mostrar la lista de publicaciones en la página de inicio. A partir de la lista de publicaciones que gestionamos con Context API, renderizamos el título y el extracto, y un enlace a la página de detalles de la publicación.

import React from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const PostList = () => {
  const { posts } = useBlog(); // Obtiene las publicaciones del contexto

  return (
    <Box p={5}>
      <Heading mb={4}>Lista de Publicaciones</Heading>
      {posts.length === 0 ? (
        <Text>No hay publicaciones disponibles.</Text>
      ) : (
        posts.map((post) => (
          <Box key={post.id} mb={4} p={4} borderWidth={1} borderRadius="md">
            <Heading size="md">{post.title}</Heading>
            <Text>{post.excerpt}</Text>
            <Link to={`/post/${post.id}`}>
              <Button mt={2} colorScheme="teal">Leer más</Button>
            </Link>
          </Box>
        ))
      )}
    </Box>
  );
};

export default PostList;