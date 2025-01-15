import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <AuthProvider>  {/*creado por nosotros en "AuthContext", contiene la info de nuestro usuario */}
        <App /> {/*es quien va a usar la info de  nuestro usuario */}
      </AuthProvider>
    </ChakraProvider>
  </StrictMode>
);