import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, {useState} from "react";

function App() {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {}
    const [cartItemsTotal, setCartItemsTotal] = useState(Object.values(cart).length)
  return (
    <div className="App">
          <Router>
            <Navbar cartItemsTotal={cartItemsTotal}/>
            <Switch>
              <Route path="/" exact component={() => <Home setCartItemsTotal={setCartItemsTotal} />} />
              <Route path="/menu" exact component={() => <Menu setCartItemsTotal={setCartItemsTotal} />} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/cart" exact component={() => <Cart setCartItemsTotal={setCartItemsTotal} />} />
            </Switch>

          </Router>
          <Footer/>

    </div>
  );
}

export default App;
