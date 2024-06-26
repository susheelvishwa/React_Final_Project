import { Link as ReactRouterLink } from "react-router-dom";
import {  Link as ChakraLink, Flex } from "@chakra-ui/react";

const links = [
  {
    to: "/",
    label: "HOME",
  },
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
    label:"TICKETS"
  }
];

const Navbar = () => {
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
    </Flex>
  );
};

export default Navbar;
