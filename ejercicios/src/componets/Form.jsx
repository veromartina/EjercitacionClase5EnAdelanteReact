import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useForm } from "react-hook-form";
  import { name, password } from "../utils/validations";
  
  //importar desde el paquete
  export const Form = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
  
    const methods = useForm()
  
    console.log(methods)
  
    //USO DESTRUCTURING PARA TRAER SOLO LO QUE NECESITO
    const {
      register, //va registrar cada input para manejarlo con el hook
      handleSubmit,
      formState,
      watch,
    } = useForm();
    const { errors } = formState;
    console.log("errors:", errors);
  
    
    //para controlar el input {...register ('nombre del input'), un objeto de validación, }
    const emailWatch = watch('email')
    console.log(emailWatch)
  
    const login = (data) => { //el paquete me da la data por parametros
      console.log(data);
      alert("logueado");
    };
    return (
      <VStack as="form" onSubmit={handleSubmit(login)}>  {/* //hasta ahora veniamos manejando diferente el paquete lo ejecuta así */}
        <Heading>Login</Heading>
        <Input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          placeholder="xxxxxx@hotmail.com"
          type="email"
        />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            {...register("password", password)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text>{errors.password?.message}</Text>
  
      {/* CON CHAKRA */}
        <FormControl  isInvalid={errors.name}>
          <FormLabel>Name</FormLabel>
          <Input {...register('name',name)} placeholder='First name'/>
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
  
        <Button type="submit">Login</Button>
      </VStack>
    );
  };