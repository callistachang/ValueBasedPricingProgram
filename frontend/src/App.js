import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import USPPage from "./pages/USPPage";
import SentimentPage from "./pages/SentimentPage";
import PriceRecommendationPage from "./pages/PriceRecommendationPage";
import { Container, Box } from "@chakra-ui/react";
import { SideMenuButton } from "./components/SideMenuButton";

function App() {
  return (
    <>
      <Box bg="#31343A" w="100%" p={2} color="white">
        <SideMenuButton />
      </Box>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/results" component={ResultsPage} />
          <Route path="/usps" component={USPPage} />
          <Route path="/recommendations" component={PriceRecommendationPage} />
          <Route path="/sentiments" component={SentimentPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
