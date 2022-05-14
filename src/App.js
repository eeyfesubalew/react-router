import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/Mainheader";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div>
      <MainHeader />

      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>

          <Route path="/products" exact>
            <Products />
          </Route>

          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
