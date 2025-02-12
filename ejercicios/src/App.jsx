import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Routes from "./routes/Routes";

function App() {
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
      <Header/>

      <GridItem pl="2" bg="green.300" area={"main"}>
        
        <Routes />
      </GridItem>
      <Footer />
    </Grid>
  );
}

export default App;