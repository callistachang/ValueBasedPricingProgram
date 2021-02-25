import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { readRemoteFile } from "react-papaparse";

export function SentimentTable(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    readRemoteFile(props.uspCsvPath, {
      complete: (results) => {
        setArr(results["data"].slice(0, 20));
        setIsLoading(false);
        console.log(arr);
      },
      header: true,
    });
  }, []);

  const createRow = (keyword, rank, competitor) => (
    <Tr>
      <Td>{keyword}</Td>
      <Td>{rank}</Td>
      <Td>{competitor}</Td>
    </Tr>
  );

  if (isLoading == true) {
    return <div />;
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <Table variant="striped" colorScheme="red" size="sm">
          <Thead>
            <Tr>
              <Th>Keyword</Th>
              <Th>Bosch's Ranking</Th>
              <Th>Competitor's Ranking</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from(Array(arr.length).keys()).map((i) =>
              createRow(arr[i]["word/phrase"], i + 1, "")
            )}
          </Tbody>
        </Table>
      )}
    </>
  );
}
