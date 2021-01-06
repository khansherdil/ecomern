import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="py-5">
          <Container>
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
