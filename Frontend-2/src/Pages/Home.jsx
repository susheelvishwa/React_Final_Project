
import { Box, Heading, Button } from "@chakra-ui/react";

const Home = () => {

  function handleClick() {
    console.log("hello");
  }

  return (
    <Box>
      <Heading as="h1" size="xl">
        This is a Home page
      </Heading>
      <Button onClick={handleClick} colorScheme="gray" variant="outline">
        Click me
      </Button>
    </Box>
  );
}

export default Home
