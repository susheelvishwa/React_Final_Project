import { Box, Heading, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home12 = () => {
  const toast = useToast();
  const navigate = useNavigate();

  function handleClick() {
    console.log("hello");
    toast({
      title: "Login",
      description: "Welcome to login page.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    navigate(`/Login`);
  }

  return (
    <Box>
      <Heading as="h1" size="xl">
        This is a Home page
      </Heading>
      <Button onClick={handleClick} colorScheme="gray" variant="outline">
        Click me to visite login page
      </Button>
    </Box>
  );
};

export default Home12;
