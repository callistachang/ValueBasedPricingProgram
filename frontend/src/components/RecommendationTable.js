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
import { useEffect, useState } from "react";

export function RecommendationTable(props) {
  // const createRow = (usp, inputRank, boschRank, inputPrice, modelPrice) => (
  //   <Tr>
  //     <Td>{usp}</Td>
  //     <Td>{inputRank}</Td>
  //     <Td>{boschRank}</Td>
  //     <Td>{inputPrice}</Td>
  //     <Td>{modelPrice}</Td>
  //   </Tr>
  // );
  //boschRank : get data from backend, run through model
  //competiorRank : get from CSV files

  const [isLoading, setIsLoading] = useState(true);
  const [boschArr, setBoschArr] = useState([]);
  const [competitorArr, setCompetitorArr] = useState([]);

  // IT'S HELAKJSDLFJSLKDFJLADSJF
  const createRow = (usp, inputRank, inputPrice, modelPrice) => {
    var j = 1;
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
        <Td>{inputRank}</Td>
        <Td>{boschRank}</Td>
        <Td>{inputPrice}</Td>
        <Td>{modelPrice || "-"}</Td>
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
      if (!(key in props.USPs)) {
        notInList.push(key);
        if (notInList.length == 3) {
          return notInList;
        }
      }
    }
    return notInList;
  };

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
              props.USPPrices[i],
              boschArr[props.USPs[i]]
            )
          )}
        </Tbody>
      </Table>
    </>
  );
}
