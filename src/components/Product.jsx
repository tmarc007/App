import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import constants from "../common/config";

function Product(props) {
  function MyCart() {
    console.log("adding product");
  }

  return (
    <div className="product">
      <img src={constants.IMAGE_PATH + props.info.image} alt="main product" />
      <h6>{props.info.title}</h6>
      <label>${props.info.price}</label>

      <QuantityPicker />

      <button onClick={MyCart} className="btn btn-sm btn-success">
        Cart
      </button>
    </div>
  );
}

export default Product;
