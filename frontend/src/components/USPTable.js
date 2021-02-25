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

export function USPTable(props) {
  //boschRank : get data from backend, run through model
  //competiorRank : get from CSV files
  const createRow = (usp, boschRank, competitorRank) => (
    <Tr>
      <Td>{usp}</Td>
      <Td>{boschRank}</Td>
      <Td>{competitorRank}</Td>
    </Tr>
  );

  return (
    <>
      <Table variant="striped" colorScheme="red" size="sm">
        <Thead>
          <Tr>
            <Th>USP Title</Th>
            <Th>Bosch Ranking</Th>
            <Th>Competitor Ranking</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from(Array(props.USPs.length).keys()).map((i) =>
            createRow(
              props.USPs[i],
              "bosch's ranking from the model",
              "from flora's csv OR COMPETITORS RANKING FROM THE MODEL"
            )
          )}
        </Tbody>
      </Table>
    </>
  );
}
