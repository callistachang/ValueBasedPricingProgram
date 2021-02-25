import {
  Container,
  Box,
  Text,
  ListItem,
  OrderedList,
  Stack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { useContext } from "react";
import { SentimentTable } from "../components/SentimentTable";
import { SideMenuNavBar } from "../components/SideMenuNavBar";
import { USPTable } from "../components/USPTable";
import { Context } from "../data/Store";

function SentimentPage(props) {
  const [state, dispatch] = useContext(Context);
  const wordcloudImageFpath =
    "/wordcloud/" + state.product + "_" + state.subproduct + ".png";

  return (
    <div>
      <SideMenuNavBar />
      <Container>
        <Stack spacing={10}>
          <Heading>Sentiment Results Page</Heading>
          <Box>
            <Text as="b">Keyword wordcloud:</Text>
            <Image src={wordcloudImageFpath} alt="wordcloud" />
          </Box>
          <Box>
            <Text as="b">Keyword Sentiment Table:</Text>
            <SentimentTable />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default SentimentPage;
