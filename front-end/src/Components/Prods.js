import { useState, useEffect } from "react";
import axios from "axios";
import Prod from "./Prod";

function Prods() {
  const [prods, setProds] = useState([]);
  const API = process.env.REACT_APP_API_URL;
  // console.log(`${API}/products`);

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        setProds(response.data);
      })
      .catch((error) => console.log("cAtch", error));
  }, [API]);

  const displayProds = () => {
    return prods ? (
      prods.map((prod) => {
        return (
          <div key={prod.id} className="column">
            <Prod key={prod.id} prod={prod} />
          </div>
        );
      })
    ) : (
      <h3> No Data Yet </h3>
    );
  };

  // if (!prods) {
  //   return null;
  // }

  return <>{displayProds()}</>;
}

export default Prods;
