import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>{/* <Route path="/about"></Route> */}</Switch>
      </Router>
    </div>
  );
}

export default App;
