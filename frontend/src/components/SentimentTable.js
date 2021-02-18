import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export function SentimentTable(props) {
  const createRow = (keyword, rank, competitor1, competitor2) => (
    <Tr>
      <Td>{keyword}</Td>
      <Td>{rank}</Td>
      <Td>{competitor1}</Td>
      <Td>{competitor2}</Td>
    </Tr>
  );

  return (
    <>
      <Table variant="striped" colorScheme="red" size="sm">
        <Thead>
          <Tr>
            <Th>Keyword</Th>
            <Th>Ranking</Th>
            <Th>Competitor 1</Th>
            <Th>Competitor 2</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* {Array.from(Array(props.USPs.length).keys()).map((i) =>
            createRow(props.USPs[i], props.USPPrices[i])
          )} */}
        </Tbody>
      </Table>
    </>
  );
}
