import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ResultsPage from "./ResultsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/results" component={ResultsPage} />
      </Switch>
    </Router>
  );
}

export default App;
