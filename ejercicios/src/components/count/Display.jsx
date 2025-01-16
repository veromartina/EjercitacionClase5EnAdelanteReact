/* eslint-disable react/prop-types */
import { Heading, Stack } from "@chakra-ui/react"

export const Display = ({count}) => {
   //{count}viene del js "useCounter"
    console.log(count)
  return (
    <Stack>
        <Heading>{count}</Heading>
    </Stack>
  )
}