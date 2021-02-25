import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import SentimentPage from "./pages/SentimentPage";
import PriceRecommendationPage from "./pages/PriceRecommendationPage";
import QnAPage from "./pages/QnAPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/results" component={ResultsPage} />
          <Route
            exact
            path="/recommendations"
            component={PriceRecommendationPage}
          />
          <Route exact path="/qna" component={QnAPage} />
          <Route exact path="/sentiments" component={SentimentPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
