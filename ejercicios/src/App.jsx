
import { Heading, VStack } from '@chakra-ui/react'
import { Display } from './components/count/Display'
import { Controls } from './components/count/Controls'

function App() {

  return (
    <VStack>
      <Heading  mt="50px" mb="20px">Mi Contador</Heading>
      <Display/>
      <Controls />
    </VStack>
  )
}

export default App