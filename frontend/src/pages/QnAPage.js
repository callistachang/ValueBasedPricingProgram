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
import { SentimentTable } from "../components/SentimentTable";
import { SideMenuNavBar } from "../components/SideMenuNavBar";
import { USPTable } from "../components/USPTable";
import { Context } from "../data/Store";

function QnAPage(props) {
  const [state, dispatch] = useContext(Context);

  return (
    <div>
      <SideMenuNavBar />
      <Container>
        <Stack spacing={10}>
          <Heading>Sentiment Results Page</Heading>
          <Box>
            <Text as="b">Keyword Sentiment Table:</Text>
            <SentimentTable />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default QnAPage;
