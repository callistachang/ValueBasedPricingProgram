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
  const createRow = (usp, rank) => (
    <Tr>
      <Td>{usp}</Td>
      <Td>{rank}</Td>
    </Tr>
  );

  return (
    <>
      <Table variant="striped" colorScheme="red" size="sm">
        <Thead>
          <Tr>
            <Th>USP Title</Th>
            <Th>Ranking</Th>
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
