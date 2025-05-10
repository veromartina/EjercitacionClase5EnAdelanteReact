import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useBlog } from '../context/BlogContext';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const PostDetail = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const { getPostById } = useBlog();
  const [post, setPost] = useState(null);

  // Usamos useNavigate para crear una función de navegación
  const navigate = useNavigate();

  useEffect(() => {
    const foundPost = getPostById(parseInt(id)); // Busca la publicación por ID
    setPost(foundPost);
  }, [id, getPostById]);

  if (!post) return <Text>Publicación no encontrada.</Text>;

  return (
    <Box p={5} style={{ paddingTop: '20px', minHeight: '200px' }}>
      <Heading >{post.title}</Heading>
      <Text mt={4} >{post.content}</Text>
      <Text mt={2} fontSize="sm">Por {post.author} el {post.date}</Text>

      {/* Botón Volver atrás */}
      <Button 
        mt={4} 
        colorScheme="red" 
        onClick={() => navigate(-1)} // Función para ir a la página anterior
      >
        Volver atrás
      </Button>
    </Box>
  );
};

export default PostDetail;