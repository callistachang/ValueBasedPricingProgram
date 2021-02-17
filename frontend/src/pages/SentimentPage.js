import { Container, Box } from "@chakra-ui/react";
import { SideMenuButton } from "../components/SideMenuButton";
function SentimentPage(props) {
  return (
    <div>
      <Box bg="#31343A" w="100%" p={2} color="white">
        <SideMenuButton />
      </Box>
      <Box></Box>
      <Container>
        <p>chosen product: {props.location.state.product}</p>
        <p>chosen subproduct: {props.location.state.subproduct}</p>
        <p>chosen competitor: {props.location.state.competitor}</p>
        <p>chosen cost price: {props.location.state.costPrice}</p>
        <p>
          chosen target selling price: {props.location.state.targetSellingPrice}
        </p>
        <p>usps:</p>
        <ul>
          {props.location.state.USPs.map((usp) => (
            <li>{usp}</li>
          ))}
        </ul>
        <p>usps prices:</p>
        <ul>
          {props.location.state.USPPrices.map((uspPrice) => (
            <li>{uspPrice}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default SentimentPage;
