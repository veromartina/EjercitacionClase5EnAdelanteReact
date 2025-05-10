import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { Box, Heading, Text } from '@chakra-ui/react';

const PostPage = () => {
  const { id } = useParams();
  const { getPostById } = useBlog();
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(getPostById(parseInt(id)));
  }, [id, getPostById]);

  if (!post) return <Text>Publicación no encontrada.</Text>;

  return (
    <Box p={5}>
      <Heading>{post.title}</Heading>
      <Text mt={4}>{post.content}</Text>
      <Text mt={2} fontSize="sm">Por {post.author} el {post.date}</Text>
    </Box>
  );
};

export default PostPage;