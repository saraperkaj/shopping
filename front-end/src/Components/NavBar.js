import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div>
        <Link to={"/products"}>Products</Link>
      </div>
      <div>
        <Link to={"/new"}>New Product</Link>
      </div>
      {/* <a href="/products/new">New Product</a> */}
    </nav>
  );
}

export default NavBar;
