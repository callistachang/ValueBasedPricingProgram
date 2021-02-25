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
  const createRow = (usp, inputRank, boschRank, inputPrice, modelPrice) => (
    <Tr>
      <Td>{usp}</Td>
      <Td>{inputRank}</Td>
      <Td>{boschRank}</Td>
      <Td>{inputPrice}</Td>
      <Td>{modelPrice}</Td>
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
            <Th>Input Perceived Ranking</Th>
            <Th>Bosch Perceived Ranking</Th>
            <Th>Input Pricing</Th>
            <Th>Bosch Recommended Pricing</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from(Array(props.USPs.length).keys()).map((i) =>
            createRow(
              props.USPs[i],
              i + 1,
              "MODEL RANKING",
              props.USPPrices[i],
              "MODEL COEFFS"
            )
          )}
        </Tbody>
      </Table>
    </>
  );
}
