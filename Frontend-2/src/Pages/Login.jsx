import { Heading, Input, Button, VStack, Container } from "@chakra-ui/react";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

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
    } catch (error) {
      console.log(error);
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
          Login page
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
