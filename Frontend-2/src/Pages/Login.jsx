import {
  Heading,
  Input,
  Button,
  VStack,
  Container,
  useToast,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Corrected this line
  const { login } = useContext(AuthContext);
  const toast = useToast();

  async function handleClick() {
    try {
      let res = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      });

      login(res?.data?.token);

      toast({
        title: "Login Successful",
        description: "welcome shivam",
        status: "success",
        duration: 2000, 
        isClosable: true,
      });

      setTimeout(() => {
        navigate(`/about`);
      }, 1000); 
    } catch (error) {
      console.log(error);
      toast({
        title: "Login Failed",
        description: "Please check your credentials",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  return (
    <Container
      maxW={"400px"}
      marginTop={"100px"}
      border={"1px solid gray"}
      borderRadius={"15px"}
      padding={"30px"}
    >
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Login Page
        </Heading>

        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button onClick={handleClick} colorScheme="teal" variant="outline">
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;
