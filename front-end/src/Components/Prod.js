import { Link } from "react-router-dom";

function Prod({ prod }) {
  return (
    <tr>
      <Link to={`/products/${prod.id}`}>
        <td>{prod.name}</td>
        <td>
          <img src={prod.img} width="200" alt={prod.name} />
        </td>
        <td>{prod.price}</td>
        <td>{prod.rating}</td>
        {/* <td>{prod.description}</td> */}
      </Link>
      <Link to={`/`}>
        <td>{prod.featured ? <span>🌟</span> : <span> &nbsp; </span>}</td>
      </Link>
    </tr>
  );
}

export default Prod;
