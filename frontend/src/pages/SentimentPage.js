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
  const uspCsvPath =
    "/sentimentcsv/" +
    state.product +
    "_" +
    state.subproduct +
    "_Sentiment.csv";
  const competitorKeywordPath =
    "/keywordcsv/" + state.product + "_Competitor Keyword Rank.csv";

  return (
    <div>
      <SideMenuNavBar />
      <Container>
        <Stack spacing={10}>
          <Heading>Sentiment Results Page</Heading>
          <Box>
            <Text>
              For {state.product} ({state.subproduct}), these keywords were
              mentioned most in customers' reviews of Bosch products. This is
              measured against which keywords are mentioned most in competitors'
              products.
            </Text>
          </Box>
          <Box>
            <Text as="b">Keyword wordcloud:</Text>
            <Image src={wordcloudImageFpath} alt="wordcloud" />
          </Box>
          <Box>
            <Text as="b">Top 20 keywords:</Text>
            <SentimentTable
              uspCsvPath={uspCsvPath}
              competitorKeywordPath={competitorKeywordPath}
            />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default SentimentPage;
