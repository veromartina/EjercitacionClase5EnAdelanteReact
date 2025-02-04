import { Grid, GridItem } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";


import Routes from "../Routes";

import ScrollToTop from '../components/ScrollToTop'
const AppLayout = () => {
  return (
    <Grid
      templateAreas={`"header"
                  "main"
                  "footer"`}
      gridTemplateRows={"100px 1fr 70px"}
      gap="1"
      fontWeight="bold"
      minHeight="100vh"
    >
      <Header />

      <GridItem pl="2" bg="green.200" area={"main"}>
      <ScrollToTop />
        
        <Routes />
      </GridItem>
      <Footer />
    </Grid>
  );
};

export default AppLayout;