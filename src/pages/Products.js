import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>This is Products page</h1>

      <ul>
        <li>
          <Link to="/products/p1"> product p1</Link>
        </li>
        <li>
          <Link to="/products/p2"> product p2</Link>
        </li>
        <li>
          <Link to="/products/p3"> product p3</Link>
        </li>
      </ul>
    </section>
  );
};
export default Products;
