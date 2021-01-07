import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import OrderScreen from "./screens/OrderScreen";

import { Container } from "react-bootstrap";
import Payment from "./components/Payment";
import Syke from "./components/Syke";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="py-5">
          <Container>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/order" component={OrderScreen}></Route>
            <Route path="/syke" component={Syke}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
