import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function USPTable(props) {
  //boschRank : get data from backend, run through model
  //competiorRank : get from CSV files
  const [isLoading, setIsLoading] = useState(true);
  const [boschArr, setBoschArr] = useState([]);
  const [competitorArr, setCompetitorArr] = useState([]);

  const createRow = (usp) => {
    var i = 1;
    var j = 1;
    for (var key of Object.keys(competitorArr)) {
      if (key == usp) {
        break;
      }
      i++;
    }
    const competitorRank = i == Object.keys(competitorArr).length ? "-" : i;
    for (var key of Object.keys(boschArr)) {
      if (key == usp) {
        break;
      }
      j++;
    }
    const boschRank = j == Object.keys(boschArr).length ? "-" : j;

    return (
      <Tr>
        <Td>{usp}</Td>
        <Td>{boschRank}</Td>
        <Td>{competitorRank}</Td>
      </Tr>
    );
  };

  useEffect(async () => {
    const boschPostData = { product_name: props.productName, is_bosch: true };
    const competitorPostData = {
      product_name: props.productName,
      is_bosch: false,
    };
    const boschResponse = await fetch(
      "https://bosch-backend.azurewebsites.net/coef",
      {
        method: "post",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(boschPostData),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(JSON.stringify(data));
        setBoschArr(data);
      });
    const competitorResponse = await fetch(
      "https://bosch-backend.azurewebsites.net/coef",
      {
        method: "post",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(competitorPostData),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(JSON.stringify(data));
        setCompetitorArr(data);
        setIsLoading(false);
      });
  }, []);
  const uspsNotIn = () => {
    var i = 1;
    var notInList = [];
    for (var key of Object.keys(boschArr)) {
      // console.log(key);
      // console.log(props.USPs);
      if (!props.USPs.includes(key)) {
        notInList.push(key);
        if (notInList.length == 3) {
          return notInList;
        }
      }
    }
    return notInList;
  };
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
            createRow(props.USPs[i])
          )}
        </Tbody>
      </Table>
      <br></br>
      <Text as="b">Top 3 USPs not included in choices:</Text>
      <OrderedList>
        {uspsNotIn().map((usp) => (
          <ListItem>{usp}</ListItem>
        ))}
      </OrderedList>
    </>
  );
}
