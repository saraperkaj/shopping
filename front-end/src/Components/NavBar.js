import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <button className="button is-link is-inverted">
          <Link to={"/products"}>Products</Link>
        </button>
      </div>
      <div>
        <button className="button is-link is-inverted">
          <Link to={"/new"}>New Product</Link>
        </button>
      </div>
      {/* <a href="/products/new">New Product</a> */}
    </nav>
  );
}

export default NavBar;
