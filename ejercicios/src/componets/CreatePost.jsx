//Este componente proporciona un formulario para que el usuario pueda agregar una nueva publicación al blog. Utilizamos el estado local para manejar los datos del formulario y luego lo guardamos usando el contexto addPost.
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { Box, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const CreatePost = () => {
  const { addPost } = useBlog();
  const history = useHistory();
  
  const [form, setForm] = useState({
    title: '',
    content: '',
    author: '',
  });

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.content || !form.author) {
      alert('Todos los campos son obligatorios');
      return;
    }

    // Crear una nueva publicación
    const newPost = {
      id: Date.now(),  // Utilizamos el timestamp como ID único
      title: form.title,
      content: form.content,
      author: form.author,
      date: new Date().toLocaleDateString(),
      excerpt: form.content.slice(0, 100),  // Extracto del contenido
    };

    // Agregar la publicación al contexto
    addPost(newPost);

    // Redirigir al usuario a la página de inicio
    history.push('/');
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Crear Nueva Publicación</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={4}>
          <FormLabel>Título</FormLabel>
          <Input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel>Contenido</FormLabel>
          <Textarea
            name="content"
            value={form.content}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel>Autor</FormLabel>
          <Input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
          />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">Crear Publicación</Button>
      </form>
    </Box>
  );
};

export default CreatePost;