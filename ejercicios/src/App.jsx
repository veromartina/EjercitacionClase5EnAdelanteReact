
import './App.css'
//import { div } from '@chakra-ui/react'
//import { Form } from './componets/Form'
import { LoginForm } from './componets/LoginForm'
import { Register } from './pages/Register'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import { Header1 } from './layout/Header1'
import { UsersDetails } from './pages/UsersDetails'
import { Users } from "./pages/Users"



 function App() {
  //SPA antes haciamos todo en app
  //<Routes/> genera un arbol de rutas y a partir de este nos permite reemplazar la vista de cada componente/pagina que coincida con la url del navegador
  //<Route/>representa una ruta en el arbol y necesitamos si osi el  path(url del navegador)y el element(componente/pagina)
 
  return (
    <div className="app">   {/*siempre va a tener un contenedor  */}
       
    <Header1/>
        <Routes> {/*genero un arbol de ruta */}
          {/* la barra sola me lleva al inicio(muestra el inicio), el element me indica la ruta */}
          <Route path="/" element={<Home/>} />  
          <Route path="/register" element={<Register/>} />   {/*al ser paginas ya no las guardo en carpetas "components" sino en "pages", pero siguen siendo componentes */}
          <Route path="/login" element={<LoginForm/>} /> 
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/:id" element={<UsersDetails/>}/>
        </Routes>
       {/* <LoginForm />*/}
         {/*   <Register/> */}
     
    </div>
  )
}

export default App
