import {
    Card as CardChakra,
    CardBody,
    Heading,
    Stack,
    Text,
    CardFooter,
    Button,
  } from "@chakra-ui/react";
  import React from "react";
  import { Navigate, useNavigate, useParams } from "react-router-dom";
  import { useBlog } from "../context/BlogContext";
  
  const CardDetails = () => {
    const { id } = useParams();
  const navigate = useNavigate()
    const { posts } = useBlog();
    const post = posts.find((p) =>   p.id === +id);
    console.log(post);
  
    return (
      <CardChakra maxW="sm">
        {post && (
          <>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">{post.title}</Heading>
  
                <Text color="blue.600" fontSize="2xl">
                  {post.description}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  {post.description}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  {post.description}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  {post.description}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  {post.description}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  {post.description}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  {post.autor}
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button
                onClick={() => navigate(-1)}
                variant="solid"
                colorScheme="blue"
              >
                Atrás
              </Button>
            </CardFooter>
          </>
        )}
      </CardChakra>
    );
  };
  
  export default CardDetails;