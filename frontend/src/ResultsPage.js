function ResultsPage(props) {
  return (
    <div>
      <p>chosen product: {props.location.state.product}</p>
      <p>chosen subproduct: {props.location.state.subproduct}</p>
      <p>chosen competitor: {props.location.state.competitor}</p>
      <p>chosen cost price: {props.location.state.costPrice}</p>
      <p>
        chosen target selling price: {props.location.state.targetSellingPrice}
      </p>
      <p>usps:</p>
      <ul>
        {props.location.state.USPs.map((usp) => (
          <li>{usp}</li>
        ))}
      </ul>
      <p>usps prices:</p>
      <ul>
        {props.location.state.USPPrices.map((uspPrice) => (
          <li>{uspPrice}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsPage;