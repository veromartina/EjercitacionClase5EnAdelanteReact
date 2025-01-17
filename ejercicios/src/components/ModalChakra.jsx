//Usar el hook  useModal.js en un componente para abrir, cerrar o alternar la visibilidad de un modal.

import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { useModal } from '../hooks/useModal'

export const ModalChakra = () => {
const {openModal, closeModal, isOpen}= useModal()   //las funciones que me retorno el custom hook "useModal"

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, officiis? Laborum nobis sed consequatur explicabo deserunt voluptates reprehenderit.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={closeModal}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}