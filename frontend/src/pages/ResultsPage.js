import {
  Container,
  Box,
  Text,
  ListItem,
  OrderedList,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { useContext } from "react";
import { SideMenuNavBar } from "../components/SideMenuNavBar";
import { USPTable } from "../components/USPTable";
import { Context } from "../data/Store";

function ResultsPage(props) {
  const [state, dispatch] = useContext(Context);

  return (
    <div>
      <SideMenuNavBar />
      <Container>
        <Stack spacing={10}>
          <Heading>USP Results Page</Heading>
          <Box>
            <Text as="b">USP ranking:</Text>
            <USPTable USPs={state.USPs} USPPrices={state.USPPrices} />
          </Box>

          <Box>
            <Text as="b">Top 3 USPs not included in choices:</Text>
            <OrderedList>
              <ListItem>blah1</ListItem>
              <ListItem>blah2</ListItem>
              <ListItem>blah3</ListItem>
            </OrderedList>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default ResultsPage;
