import {
  Box,
  FormLabel,
  Container,
  SimpleGrid,
  Stack,
  InputLeftAddon,
  Input,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { DropdownInput } from "../components/DropdownInput";
import {
  productList,
  productToSubproductDict,
  competitorList,
} from "../data/mock";
import { useHistory } from "react-router-dom";
import { Context } from "../data/Store";
import { Link } from "react-router-dom";

function HomePage() {
  const [inputProduct, setInputProduct] = useState(productList[0]);
  const [subproducts, setSubproducts] = useState(
    productToSubproductDict[productList[0]]
  );
  const [inputSubproduct, setInputSubproduct] = useState(
    productToSubproductDict[productList[0]][0]
  );
  const [inputCompetitor, setInputCompetitor] = useState(competitorList[0]);
  const [costPrice, setCostPrice] = useState(null);
  const [targetSellingPrice, setTargetSellingPrice] = useState(null);
  const [inputUSPPrices, setInputUSPPrices] = useState([]);
  const [inputUSPs, setInputUSPs] = useState([]);
  const [state, dispatch] = useContext(Context);
  const history = useHistory();

  const handleSelectProduct = (event) => {
    const product = event.target.value;
    setInputProduct(product);
    setSubproducts(productToSubproductDict[product]);
  };

  const handleInputUSP = (event) => {
    const i = event.target.id.slice(-1);
    const newUSPs = [...inputUSPs];
    newUSPs[i] = event.target.value;
    setInputUSPs(newUSPs);
  };

  const handleInputUSPPrices = (event) => {
    const i = event.target.id.slice(-1);
    const newPrices = [...inputUSPPrices];
    newPrices[i] = event.target.value;
    setInputUSPPrices(newPrices);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (costPrice == null || targetSellingPrice == null) {
      alert("Make sure that all values are filled in!");
      return;
    }
    const formData = {
      product: inputProduct,
      subproduct: inputSubproduct,
      competitor: inputCompetitor,
      costPrice: costPrice,
      targetSellingPrice: targetSellingPrice,
      USPs: inputUSPs,
      USPPrices: inputUSPPrices,
    };
    dispatch({ type: "SET_INPUT", payload: formData });
    history.push("/results");
  };

  return (
    <Container maxW="8xl" mt={6} centerContent>
      <SimpleGrid columns={3} spacing={[4, 8, 10]}>
        <DropdownInput
          id="product"
          options={Object.keys(productToSubproductDict)}
          title="Product"
          onChange={handleSelectProduct}
        />

        <DropdownInput
          id="subproduct"
          options={subproducts}
          title="Subproduct"
          onChange={(event) => setInputSubproduct(event.target.value)}
        />

        <DropdownInput
          id="competitor"
          options={competitorList}
          title="Competitor [Brands]"
          onChange={(event) => setInputCompetitor(event.target.value)}
        />

        <Box>
          <FormLabel>Cost Price</FormLabel>
          <Input
            type="number"
            placeholder="e.g. 100"
            onChange={(event) => setCostPrice(event.target.value)}
          />
        </Box>

        <Box>
          <FormLabel>Target Selling Price</FormLabel>
          <Input
            type="number"
            placeholder="e.g. 100"
            onChange={(event) => setTargetSellingPrice(event.target.value)}
          />
        </Box>

        <Button mt={8} onClick={handleSubmitForm}>
          Submit
        </Button>

        <Box>
          <FormLabel>Top 6 USPs</FormLabel>
          <Stack>
            {Array.from(Array(6).keys()).map((num) => (
              <InputGroup>
                <InputLeftAddon children={num} />
                <Input id={`usp-${num}`} onChange={handleInputUSP} />
              </InputGroup>
            ))}
          </Stack>
        </Box>

        <Box>
          <FormLabel>Top 6 USP Prices</FormLabel>
          <Stack>
            {Array.from(Array(6).keys()).map((num) => (
              <InputGroup>
                <InputLeftAddon children={num} />
                <Input
                  type="number"
                  id={`usp-price-${num}`}
                  onChange={handleInputUSPPrices}
                />
              </InputGroup>
            ))}
          </Stack>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default HomePage;
