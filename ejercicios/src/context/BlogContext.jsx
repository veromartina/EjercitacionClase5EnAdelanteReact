import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
        id: 1,
        title: "post 1",
        description:"lorem ipsum",
        autor: "cintia"
    }, {
        id: 2,
        title: "post ",
        description:"lorem ipsum",
        autor: "Meli"
    }
  ]);

  const addPost = (newPost) =>{
    setPosts(...posts, newPost)
  }

  return <BlogContext.Provider value={{posts, addPost}}>{children}</BlogContext.Provider>;
};

export const useBlog = ()=> useContext(BlogContext)