import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function ProdDetails() {
  const [prod, setProd] = useState([]);
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { id } = useParams();

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
    axios.delete(`${API}/products/${id}`).then(() => navigate("/products"));
  };

  return (
    <div>
      <tr>
        <td>{prod.name}</td>
        <td>
          <img src={prod.img} width="200" alt={prod.name} />
        </td>
        <td>{prod.price}</td>
        <td>{prod.rating}</td>
        <td>{prod.description}</td>
        <td>{prod.featured ? <span>🌟</span> : <span> &nbsp; </span>}</td>
      </tr>
      <Link to={`/products/${prod.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to={`/products/`}>
        <button>Back</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default ProdDetails;
