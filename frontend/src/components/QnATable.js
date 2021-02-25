import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { readRemoteFile } from "react-papaparse";

export function QnATable(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [arr, setArr] = useState([]);

  //   useEffect(() => {
  //     readRemoteFile(props.uspCsvPath, {
  //       complete: (results) => {
  //         setArr(results["data"].slice(0, 20));
  //         setIsLoading(false);
  //         console.log(arr);
  //       },
  //       header: true,
  //     });
  //   }, []);

  const createRow = (model, numMentions) => (
    <Tr>
      <Td>{model}</Td>
      <Td>{numMentions}</Td>
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
              <Th>Car Model</Th>
              <Th>Number of mentions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from(Array(arr.length).keys()).map((i) =>
              createRow("carmodel", "nummentions")
            )}
          </Tbody>
        </Table>
      )}
    </>
  );
}
