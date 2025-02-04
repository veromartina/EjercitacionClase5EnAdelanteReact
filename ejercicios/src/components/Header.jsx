import { Heading, HStack, Link, SimpleGrid } from "@chakra-ui/react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink, Link as RouterLink } from "react-router-dom"; //no uso el "link" de chackra!!! uso el de react-router-dom. evito que me recargue la pagina al ir a otra ruta (me recarga y renderiza al mismo tiempo si uso chackra). Uso "as"para darle tambien las propiedades de chackra.

const Header = () => {
  return (
    <SimpleGrid>
      <Heading>SHOP</Heading>

      <HStack>
        <NavLink as={Link} to="products">
          Products
        </NavLink> {/*se comporta como un link de chackra*/}
        <Link as={RouterLink} to="/">
          Home
        </Link> {/*renombro un link y se comporta como router  */}
      </HStack>
    </SimpleGrid>
  );
};

export default Header;