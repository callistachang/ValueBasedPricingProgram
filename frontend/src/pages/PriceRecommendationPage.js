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
import { RecommendationTable } from "../components/RecommendationTable";
import { Context } from "../data/Store";

function PriceRecommendationPage(props) {
  const [state, dispatch] = useContext(Context);

  return (
    <div>
      <SideMenuNavBar />
      <Container>
        <Stack spacing={10}>
          <Heading>Price Recommendation Page</Heading>
          <Box>
            <Text>
              Comparison of the USP rankings and prices input by the user, and
              compare them with the rankings and prices determined by the Bosch
              model.
            </Text>
          </Box>
          <Box>
            <Text as="b">Price Recommendation Table:</Text>
            <RecommendationTable
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

export default PriceRecommendationPage;
