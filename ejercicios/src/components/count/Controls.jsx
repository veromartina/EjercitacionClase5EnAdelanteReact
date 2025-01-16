import { Button, ButtonGroup } from "@chakra-ui/react";
import { useCounter } from "../../hooks/useCounter";
import { Display } from "./Display";

export const Controls = () => {
  const { decrement, increment, reset, count } = useCounter(); //me traigo las funciones del custom hook (useCounter.js)
  console.log(count)
  return (
    <ButtonGroup variant="outline" spacing="6">
      <Button onClick={increment} colorScheme="green">
        +
      </Button>
        <Display count={count}/>
      <Button onClick={decrement} colorScheme="red">
        -
      </Button>

      <Button onClick={reset} colorScheme="blue">
        Reset
      </Button>
    </ButtonGroup>
  );
};