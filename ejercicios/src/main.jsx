import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
//import { BrowserRouter } from "react-router-dom";

import { BlogProvider } from './context/BlogContext';

createRoot(document.getElementById("root")).render(
  <BlogProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BlogProvider>
 
);