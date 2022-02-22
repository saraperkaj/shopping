//maybe if the product is featured render it on the homepage along with the message??

import { Link, useParams } from "react-router-dom";
import Prod from "../Components/Prod";

function Home({ prod }) {
  const { id } = useParams;

  const featuredProds = () => {
    return prod.featured && <Prod />;
  };

  return (
    <div>
      <h1>Featured Products</h1>
      <Link to={`/products/${id}`}>
        <div>{featuredProds()}</div>
      </Link>
    </div>
  );
}

export default Home;
