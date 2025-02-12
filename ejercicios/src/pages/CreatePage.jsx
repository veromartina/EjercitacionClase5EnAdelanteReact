import React, { useState } from 'react';
import { useBlog } from '../context/BlogContext';
import { Box, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';  

const CreatePage = () => {
  const { addPost } = useBlog();
  const navigate = useNavigate();  // Usar el hook useNavigate 
  const [form, setForm] = useState({
    title: '',
    content: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      ...form,
      date: new Date().toLocaleDateString(),
      excerpt: form.content.slice(0, 100),
    };
    addPost(newPost);
    navigate('/');  // Usar navigate para redirigir
  };

  return (
    <Box p={5}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Título</FormLabel>
          <Input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Contenido</FormLabel>
          <Textarea
            name="content"
            value={form.content}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
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

export default CreatePage;