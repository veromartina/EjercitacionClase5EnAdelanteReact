
import { VStack } from '@chakra-ui/react'
import { LoginForm } from './components/LoginForm'
import { UserDashboard } from './components/UserDashboard'
import { useAuth } from './context/AuthContext'
import { Display } from './components/count/Display'
import { Controls } from './components/count/Controls'

function App() {
 const { user} = useAuth()
  return (
    <VStack>
      {/* <LoginForm/> en lugar de esto*/} 
     {user ? <UserDashboard /> :  <LoginForm />} {/*uso un condicional que pregunte si hay usuario me muestre el "UserDashboard"para darle la bienvenida, si no hay usuario que me muestre el formulario de login*/}
     <Display/>
     <Controls />
    </VStack>
  )
}

export default App