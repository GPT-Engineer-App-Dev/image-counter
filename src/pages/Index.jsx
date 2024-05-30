import { useState } from "react";
import { Container, Text, VStack, Button, HStack } from "@chakra-ui/react";

const Index = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Simple Counter</Text>
        <Text fontSize="4xl">{count}</Text>
        <HStack spacing={4}>
          <Button colorScheme="teal" onClick={increment}>Increment</Button>
          <Button colorScheme="red" onClick={decrement}>Decrement</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;