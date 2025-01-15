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
  import { useForm } from "react-hook-form";// instalo en consola: pnpm add react-hook-form
  import { password, username } from "../utils/validations";
  import { useState } from "react";
  import { useAuth } from "../context/AuthContext";
  
  export const LoginForm = () => {
    const [show, setShow] = useState(false);  //para mostrar la contarseña u ocultar
    const handleClick = () => setShow(!show);
    const { register, formState, handleSubmit } = useForm(); {/* "HOOK". register:para tener la data del input cuando hago el submit. handleSubmit:para enviar el formulario,lo uso en la etiqueta <form> */}
    const { errors } = formState; //:no lleva parentesis, no es funcion. va solo el nombre,es un destructuri.
  
    const {login} = useAuth()  // traigo la funcion de login desde Custom Hook 
    console.log(errors);
  
    const onSubmit =(data)=>{
      login(data)  //funcion que me trae la data, la informacion de los input , un objeto
    }
    return (
      <Box maxW="400px" mx="auto" mt="10">
        <form onSubmit={handleSubmit(onSubmit)}> {/*la funcion handleSubmit tiene como parametro otra funcion que la cree(onSubmit)*/}
          <FormControl isInvalid={errors.username}> {/*valido si hay o no errror. si existe es porque hay un error */}
            <FormLabel htmlFor="username">Usuario</FormLabel> {/* htmlForm: para saber a que input pertenece*/}
            <Input
              type="text"
              id="username"
              placeholder="Ingresa tu nombre/usuario"
              {...register("username", username)}
            />
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            {/*username:objeto del archivo validations*/}
          </FormControl>
          <FormControl isInvalid={errors.password}> {/*validacion del password */}
            <FormLabel htmlFor="password">Contraseña</FormLabel>  {/* htmlForm: para saber a que input pertenece*/}
            <InputGroup size="md">
              <Input
                id="password"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Ingrese su contraseña"
                {...register("password", password)}  
              /> {/* uso el register para tener la data del input cuando hago el submit.  como parametro el nombre del input ,y el objeto de validacion */}
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>  {/*password:objeto del archivo validations*/}
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit" width="100%">
            Iniciar sesión
          </Button>
          {/*el boton siempre dentro del formulario */}
        </form>
      </Box>
    );
  };
  

