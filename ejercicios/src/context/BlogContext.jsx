import React, { createContext, useContext, useState } from 'react';

// Contexto para manejar publicaciones
const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // Agregar una nueva publicación
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Buscar una publicación por ID
  const getPostById = (id) => posts.find(post => post.id === id);

  return (
    <BlogContext.Provider value={{ posts, addPost, getPostById }}>
      {children}
    </BlogContext.Provider>
  );
};