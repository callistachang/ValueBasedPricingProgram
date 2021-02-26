import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { readRemoteFile } from "react-papaparse";

export function SentimentTable(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [arr, setArr] = useState([]);
  const [competitorRankArr, setCompetitorRankArr] = useState([]);

  useEffect(() => {
    readRemoteFile(props.uspCsvPath, {
      complete: (results) => {
        setArr(results["data"].slice(0, 20));
      },
      header: true,
    });
    readRemoteFile(props.competitorKeywordPath, {
      complete: (results) => {
        setCompetitorRankArr(results["data"]);
      },
      header: true,
    });
    setIsLoading(false);
  }, []);

  const createRow = (keyword, rank) => {
    const competitorRankIndex = competitorRankArr.findIndex(
      (obj) => obj["word/phrase"] == keyword
    );
    const competitorRank =
      competitorRankIndex == -1 ? "-" : competitorRankIndex + 1;
    // var competitorRank = competitorRankArr.length >0 ? competitorRankArr[0];
    // if (competitorRankArr.length > 0) {
    //   competitorRank

    // }

    // console.log(competitorRank);
    // const competitorRank = competitorRankArr.filter((obj, i) => {
    //   if (obj["word/phrase"] == keyword) {
    //     return i + 1;
    //   }
    // });
    // console.log(competitorRank);

    return (
      <Tr>
        <Td>{keyword}</Td>
        <Td>{rank}</Td>
        <Td>{competitorRank || "-"}</Td>
      </Tr>
    );
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
              <Th>Keyword</Th>
              <Th>Bosch's Ranking</Th>
              <Th>Competitor's Ranking</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from(Array(arr.length).keys()).map((i) =>
              createRow(arr[i]["word/phrase"], i + 1)
            )}
          </Tbody>
        </Table>
      )}
    </>
  );
}
