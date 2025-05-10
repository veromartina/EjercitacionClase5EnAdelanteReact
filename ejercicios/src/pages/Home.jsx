import React from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Home = () => {
  const { posts } = useBlog();

  return (
    <Box p={5}>
      <Heading mb={4}>Blog</Heading>
      {posts.length === 0 ? (
        <Text>No hay publicaciones aún.</Text>
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

export default Home;