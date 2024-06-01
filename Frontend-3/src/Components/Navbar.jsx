import { Link as ReactRouterLink } from "react-router-dom";
import {Button, Link as ChakraLink, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";


const links = [
  {
    to: "/",
    label: "HOME",
  },
  // {
  //   to: "/home12",
  //   label: "HOME12",
  // },
  {
    to: "/about",
    label: "ABOUT",
  },
  {
    to: "/login",
    label: "LOGIN",
  },
  {
    to: "/contact",
    label: "CONTACT",
  },
  {
    to: "tickets",
    label: "TICKETS",
  },
];

const Navbar = () => {

  const { logout } = useContext(AuthContext)

  return (
    <Flex
      justify={"space-around"}
      alignItems={"center"}
      backgroundColor={"gray.200"}
      padding={4}
    >
      {links.map((link) => (
        <ChakraLink
          as={ReactRouterLink}
          color="red.400"
          key={link.to}
          to={link.to}
        >
          {link.label}
        </ChakraLink>
      ))}
      <Button onClick={logout} variant="outline" colorScheme="white" backgroundColor={"red"}> Logout </Button>
    </Flex>
  );
};

export default Navbar;
