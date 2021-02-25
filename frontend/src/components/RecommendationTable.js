import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export function RecommendationTable(props) {
  const createRow = (usp, boschRank, customerRank, price) => (
    <Tr>
      <Td>{usp}</Td>
      <Td>{boschRank}</Td>
      <Td>{customerRank}</Td>
      <Td>{price}</Td>
    </Tr>
  );

  // Bosch perceived ranking: sort the model's results ascending and gfet the rankings
  // recommended pricing: the actual coefficients
  return (
    <>
      <Table variant="striped" colorScheme="red" size="sm">
        <Thead>
          <Tr>
            <Th>USP Title</Th>
            <Th>Customer Perceived Ranking</Th>
            <Th>Bosch Perceived Ranking</Th>
            <Th>Recommended Pricing</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from(Array(props.USPs.length).keys()).map((i) =>
            createRow(props.USPs[i], props.USPPrices[i])
          )}
        </Tbody>
      </Table>
    </>
  );
}
