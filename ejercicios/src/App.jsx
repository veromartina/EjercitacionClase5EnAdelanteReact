import { Text, VStack } from "@chakra-ui/react";
//import { LoginForm } from "./components/LoginForm";
//import { UserDashboard } from "./components/UserDashboard";
//import { useAuth } from "./context/AuthContext";
//import { Display } from "./components/count/Display";
//import { Controls } from "./components/count/Controls";
import { ModalChakra } from "./components/ModalChakra";
import { Modal } from "./modal/Modal";
import { Accordion } from "./accordion/Accordion";

function App() {
  
  return (
    <VStack>
      <ModalChakra />
      <Accordion title="Desplegar lista" > 
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
      </Accordion>
      <Accordion title="Alumnas" >
        <Text>1. Meli</Text>
        <Text>2. Jaz</Text>
        <Text>3. Naty</Text>
        <Text>4. Molly</Text>
      </Accordion>
      <Modal>
        <p>Hola mundo</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quam
          facilis sed adipisci, eaque, cumque, nemo dicta aperiam eius tempora
          blanditiis rem repellat nostrum! Iste illum laborum quidem iusto
          recusandae.
        </p>
      </Modal>
    </VStack>
  );
}

export default App;