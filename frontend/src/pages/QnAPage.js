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
import { QnATable } from "../components/QnATable";
import { SideMenuNavBar } from "../components/SideMenuNavBar";
import { Context } from "../data/Store";

function QnAPage(props) {
  const [state, dispatch] = useContext(Context);
  const qnaFpath =
    "/qnacsv/" + state.product + "_" + state.subproduct + "_Qna.csv";

  return (
    <div>
      <SideMenuNavBar />
      <Container>
        <Stack spacing={10}>
          <Heading>QnA Page</Heading>
          <Box>
            <Text>
              For {state.product} ({state.subproduct}), these vehicle models
              were mentioned most in questions asked by customers.
            </Text>
          </Box>
          <Box>
            <Text as="b">QnA Table:</Text>
            <QnATable qnaFpath={qnaFpath} />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default QnAPage;
