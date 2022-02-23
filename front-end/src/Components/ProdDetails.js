import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function ProdDetails() {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { id } = useParams();

  const [prod, setProd] = useState({
    img: "",
    name: "",
    description: "",
    price: 0,
    rating: 0,
    featured: false,
  });

  useEffect(() => {
    // console.log(`${API}/products/${id}`);
    axios
      .get(`${API}/products/${id}`)
      .then((response) => {
        // console.log(response.data);
        setProd(response.data);
      })
      .catch((error) => console.log("Catch", error));
  }, [API, id]);

  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`${API}/products/${id}`)
      .then(() => navigate("/products"))
      .catch((error) => console.log(`catch `, error));
  };

  const showDescription = () => {
    return prod.description ? (
      <p>Description: {prod.description}</p>
    ) : (
      <p>{prod.description}</p>
    );
  };

  return (
    <div>
      <>
        <p>{prod.name.toUpperCase()}</p>
        <p>
          <img src={prod.img} width="200" alt={prod.name} />
        </p>
        <p>${Number(prod.price).toFixed(2)}</p>
        <p>Rating: {prod.rating}/5</p>
        {showDescription()}
        <Link to={`/`}>
          <p>{prod.featured ? <span>🌟</span> : <span> &nbsp; </span>}</p>
        </Link>
      </>
      <button className="button is-light">
        <Link to={`/products/${id}/edit`}>Edit</Link>
      </button>
      <Link to={`/products`}>
        <button className="button is-light">Back</button>
      </Link>
      <button className="button is-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
export default ProdDetails;
