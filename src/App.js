import Header from "./components/Header/Header";
import "./App.css";
import Pages from "./components/pages/Page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Data from "./components/flashDeals/Data";
import { useState } from "react";
function App() {
  // Step 1: f data from database
  const { productItems } = Data;
  const [cartItem, setCardItem] = useState([]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/about"></Route> */}
          <Route>
            <Pages productItems={productItems} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
