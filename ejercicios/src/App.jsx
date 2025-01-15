
import { VStack } from '@chakra-ui/react'
import { LoginForm } from './components/LoginForm'
import { UserDashboard } from './components/UserDashboard'
import { useAuth } from './context/AuthContext'


function App() {
 const { user} = useAuth()
  return (
    <VStack>
      {/* <LoginForm/> en lugar de esto*/} 
     {user ? <UserDashboard /> :  <LoginForm />} 
     {/*uso un condicional que pregunte si hay usuario que me muestre el "UserDashboard"para darle la bienvenida, si no hay usuario que me muestre el formulario de login*/}
    
    </VStack>
  )
}

export default App