import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { password, username } from "../utils/validations";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const {LoginForm} = useAuth
  console.log(errors);

  const onSubmit =(data)=>{
    LoginForm(data)
  }
  return (
    <Box maxW="400px" mx="auto" mt="10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.username}>
          <FormLabel htmlFor="username">Usuario</FormLabel>
          <Input
            type="text"
            id="username"
            placeholder="Ingresa tu nombre/usuario"
            {...register("username", username)}
          />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <InputGroup size="md">
            <Input
              id="password"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Ingrese su contraseña"
              {...register("password", password)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit" width="100%">
          Iniciar sesión
        </Button>
      </form>
    </Box>
  );
};