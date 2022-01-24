import ProductContainer from "./pages/Product/Product";
import "./styles.css";
import HeaderContainer from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import ContainerCartProduct from "./components/CartProduct/CartProduct";
import OrderFormContainer from "./components/OrderForm/OrderForm";

export default function App() {
  return (
    <div className="App">
      <HeaderContainer className="header" />
      <div className="content">
        <Switch>
          <Route
              // className="cart"
              path="/cart"
              component={() => {
                return (
                  <div className="cart">
                    <ContainerCartProduct />
                    <OrderFormContainer />
                  </div>
                );
              }}
            />
              <Route
                // className="product"
                path="/"
                render={() => <ProductContainer />}
              />
        </Switch>
        </div>
    </div>
  );
}
