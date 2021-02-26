import {
  Container,
  Box,
  Text,
  ListItem,
  OrderedList,
  Stack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useContext } from "react";
import { SideMenuNavBar } from "../components/SideMenuNavBar";
import { USPTable } from "../components/USPTable";
import { Context } from "../data/Store";

function ResultsPage(props) {
  const [state, dispatch] = useContext(Context);

  // From the model, take the top 3 USPs that are not listed in the form
  return (
    <div>
      <SideMenuNavBar />
      <Container>
        <Stack spacing={10}>
          <Heading>USP Results Page</Heading>
          <Box>
            <Text>
              We are able to see the rankings of the USPs inputted. These
              rankings were determined by the Bosch model and the competitor
              model.
            </Text>
          </Box>
          <Box>
            <Text as="b">USP ranking:</Text>
            <USPTable
              USPs={state.USPs}
              USPPrices={state.USPPrices}
              productName={state.product}
            />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default ResultsPage;
