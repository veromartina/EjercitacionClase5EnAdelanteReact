//Creo este componente para q cuando inicia sesion en lugar de mostrar un mensaje vamos a poder cambiar de pantalla

import { Button, Stack, Text } from "@chakra-ui/react"
import { useAuth } from "../context/AuthContext"

export const UserDashboard = () => {
    const { user, logout} = useAuth()  // Custom Hooks
  return (
    <Stack>
        <Text>Bienvenido {user.username}</Text>
        <Button onClick={logout}>Cerrar sesión</Button>
    </Stack>
  )
}