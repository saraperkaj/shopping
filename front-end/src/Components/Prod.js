import { Link } from "react-router-dom";

function Prod({ prod }) {
  return (
    <div className="content is-large column is-mobile">
      <Link to={`/products/${prod.id}`}>
        <p className="title is-1">{prod.name.toUpperCase()}</p>
        <p>
          <img src={prod.img} width="350" alt={prod.name} />
        </p>
        <p>${Number(prod.price).toFixed(2)}</p>
        <p>Rating: {prod.rating}/5</p>
        {/* <p>{prod.description}</p> */}
      </Link>
      <Link to={`/`}>
        <p>{prod.featured ? <span>🌟</span> : <span> &nbsp; </span>}</p>
      </Link>
    </div>
  );
}

export default Prod;
