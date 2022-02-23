import axios from "axios";
import { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function NewProd() {
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [prod, setProd] = useState({
    img: "",
    name: "",
    description: "",
    price: 0,
    rating: 0,
    featured: false,
  });

  const addNewProduct = (aNewProd) => {
    console.log(`${API}/products`, aNewProd);
    axios
      .post(`${API}/products`, aNewProd)
      .then(() => navigate(`/products`))
      .catch((error) => console.log("catch", error));
  };

  const handleSubmit = (event) => {
    // console.log(`${API} hello`);
    event.preventDefault();
    addNewProduct(prod);
  };

  const handleClear = () => {
    setProd({
      img: "",
      name: "",
      description: "",
      price: 0,
      rating: 0,
      featured: false,
    });
  };

  const handleTextChange = (event) => {
    setProd({ ...prod, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setProd({ ...prod, [event.target.id]: !prod.featured });
  };

  //handleNumberChange??

  return (
    <form className="box">
      <div className="field content is-large">
        <label className="label" className="label" htmlFor="name">
          Name:
        </label>
        <input
          className="input"
          id="name"
          name="name"
          value={prod.name.toUpperCase()}
          type="text"
          onChange={handleTextChange}
          placeholder="REAVER VANDAL"
          required
        />
        <br />
        <label className="label" htmlFor="img">
          Image URL:
        </label>
        <input
          className="input"
          id="img"
          name="img"
          value={prod.img}
          type="text"
          onChange={handleTextChange}
          placeholder="https://cx.valorbuff.com/blob/BRcfB9CUan3nlri3KNHnlIbJKVhbBtc0hX9S5txXi6s2hXQ3lriN5aUbi+pGva0E?w=900"
          required
        />
        <br />
        <label className="label" htmlFor="price">
          Price:
        </label>
        <input
          className="input"
          id="price"
          name="price"
          value={prod.price}
          type="number"
          onChange={handleTextChange}
          required
        />
        <br />
        <label className="label" htmlFor="rating">
          Rating:
        </label>
        {/* <input
          id="rating"
          name="rating"
          value={prod.rating}
          type="number"
          onChange={handleTextChange}
        /> */}
        <select
          className="select"
          name="rating"
          id="rating"
          value={prod.rating}
          onChange={handleTextChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label className="label" htmlFor="description">
          Description:
        </label>
        <input
          className="input"
          id="description"
          name="description"
          value={prod.description}
          type="text"
          onChange={handleTextChange}
          placeholder="describe the skin?"
        />
        <br />
        <label className="checkbox" htmlFor="featured">
          Featured?
        </label>
        <br />
        <input
          id="featured"
          name="featured"
          value={prod.featured}
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={prod.featured}
        />
        <br />
        <button className="button is-primary" onClick={handleSubmit}>
          Submit
        </button>
        <button className="button is-danger" onClick={handleClear}>
          Clear
        </button>
        <Link to={`/products`}>
          <button className="button is-light">Back</button>
        </Link>
      </div>
    </form>
  );
}

export default NewProd;
