import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { readRemoteFile } from "react-papaparse";
import { Context } from "../data/Store";

export function QnATable(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [arr, setArr] = useState([]);
  const [state, dispatch] = useContext(Context);
  // console.log(props.qnaFpath);

  useEffect(() => {
    readRemoteFile(props.qnaFpath, {
      complete: (results) => {
        // console.log(results);
        // lol
        if (results["errors"].length != 7) {
          setArr(results["data"]);
          // console.log("LWEJKLASDJFLJ");
        }
        setIsLoading(false);
        // console.log(arr);
      },
      header: true,
    });
  }, []);

  const createRow = (model, numMentions) => {
    if (model) {
      return (
        <Tr>
          <Td>{model}</Td>
          <Td>{numMentions}</Td>
        </Tr>
      );
    }
  };

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
            {arr.length > 0 ? (
              Array.from(Array(arr.length).keys()).map((i) => {
                console.log("arr " + arr[i]["Brand"]);
                return createRow(arr[i]["Brand"], arr[i]["frequency"]);
              })
            ) : (
              <Tr>
                <Td>No Data</Td>
                <Td>
                  For {state.product} ({state.subproduct})
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      )}
    </>
  );
}
