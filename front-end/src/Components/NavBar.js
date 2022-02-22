import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to={"/products"}>
        <header>Products</header>
      </Link>
      <a href="/products/new">New Product</a>
    </nav>
  );
}

export default NavBar;
