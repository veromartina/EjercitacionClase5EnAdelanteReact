//import { useState } from 'react'

import './App.css'
import { VStack } from '@chakra-ui/react'
import { LoginForm } from './componets/LoginForm'
import { Register } from './componets/Register'


function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <VStack>
        <LoginForm />
        <Register/>
      </VStack>
    </>
  )
}

export default App
