
import './App.css'
import { VStack } from '@chakra-ui/react'
//import { Form } from './componets/Form'
import { LoginForm } from './componets/LoginForm'
import { Register } from './pages/Register'
import { Route, Routes } from "react-router-dom"
import Header from './layout/Header'
import Home from './pages/Home'

function App() {
 
  return (
    
      <VStack>  {/*siempre va a tener un contenedor  */}
    <Header/>
        <Routes> {/*genero un arbol de ruta */}
          {/* la barra sola me lleva al inicio(muestra el inicio), el element me indica la ruta */}
          <Route path="/" element={<Home/>} />  
          <Route path="/register" element={<Register/>} />   {/*al ser paginas ya no las guardo en carpetas "components" sino en "pages", pero siguen siendo componentes */}
          <Route path="/login" element={<LoginForm/>} /> 
        </Routes>
       {/* <LoginForm />*/}
         {/*   <Register/> */}
      </VStack>
    
  )
}

export default App
