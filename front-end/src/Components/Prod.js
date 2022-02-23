import { Link } from "react-router-dom";

function Prod({ prod }) {
  return (
    <>
      <Link to={`/products/${prod.id}`}>
        <p>{prod.name.toUpperCase()}</p>
        <p>
          <img src={prod.img} width="200" alt={prod.name} />
        </p>
        <p>${Number(prod.price).toFixed(2)}</p>
        <p>Rating: {prod.rating}/5</p>
        {/* <p>{prod.description}</p> */}
      </Link>
      <Link to={`/`}>
        <p>{prod.featured ? <span>🌟</span> : <span> &nbsp; </span>}</p>
      </Link>
    </>
  );
}

export default Prod;
