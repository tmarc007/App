import { useEffect, useState } from "react";
import Product from "../components/Product";
import "./Catalog.css";
import DataService from "../services/dataService";

function Catalog() {
  const [data, setData] = useState([]);

  async function loadCatalog() {
    let service = new DataService();
    let cat = await service.getCatalog();
    setData(cat);
  }

  useEffect(function () {
    loadCatalog();
  }, []);

  return (
    <div className="catalog page">
      <h1>Our amazing catalog!</h1>

      {data.map((prod) => (
        <Product key={prod._id} info={prod} />
      ))}

      {/* The above maping feature replaces this section */}
      {/* <Product info={data[0]} />
      <Product info={data[1]} />
      <Product info={data[2]} />
      <Product info={data[3]} />
      <Product info={data[4]} />
      <Product info={data[5]} />
      <Product info={data[6]} />
      <Product info={data[7]} /> */}

      {/* This section was replaced with the above to make things easier */}
      {/* <Product title="Axis & Allies" price="80" image="" />
      <Product title="Unearthed Arcana" price="40" image="" />
      <Product title="Star Frontiers" price="30" image="" />
      <Product title="Fortress America" price="75" image="" /> */}
    </div>
  );
}

export default Catalog;
