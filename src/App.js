import Header from "./components/Header/Header";
import "./App.css";
import Pages from "./components/pages/Page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Data from "./components/flashDeals/Data";
import { useState } from "react";
import Cart from "./components/cart/Cart";
function App() {
  // Step 1: f data from database
  const { productItems } = Data;
  const [CartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
    console.log(addToCart);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path="/cart" exact>
            <Cart CartItem={CartItem} addToCart={addToCart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
