/* eslint-disable react/prop-types */
import { Heading, Stack } from "@chakra-ui/react"

export const Display = ({count}) => {
   
    console.log(count)
  return (
    <Stack>
        <Heading>{count}</Heading>
    </Stack>
  )
}