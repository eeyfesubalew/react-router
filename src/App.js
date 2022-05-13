import { Route } from "react-router-dom";
import Products from "./components/Products";

import Welcome from "./components/Welcome";
function App() {
  return (
    <div>
      {/* <Route path="/" component={<h2>Let's get started!</h2>}></Route> */}
      <Route path="/welcome">
        <Welcome />
      </Route>

      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
