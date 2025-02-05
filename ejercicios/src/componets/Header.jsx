/* eslint-disable no-unused-vars */
import { Heading, HStack, Link, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <SimpleGrid>
      <Heading>SHOP</Heading>

      <HStack>
        <NavLink as={Link} to="products">
          Products
        </NavLink>
        <Link as={RouterLink} to="/">
          Home
        </Link>
      </HStack>
    </SimpleGrid>
  );
};

export default Header;