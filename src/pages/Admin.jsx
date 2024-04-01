import { useState } from "react";
import "./Admin.css";

function Admin() {
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });
  const [allCoupons, setAllCoupons] = useState([]);

  const [product, setProduct] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
  });
  const [allProducts, setAllProducts] = useState([]);

  function handleCouponChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    var copy = { ...coupon };
    copy[name] = val;
    setCoupon(copy);
  }

  function saveCoupon() {
    console.log(coupon);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  function handleProductChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    var copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  }

  function saveProduct() {
    console.log(product);

    var copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  }

  return (
    <div className="admin page">
      <h1>Store Administration</h1>

      <div className="parent">
        <div className="prods">
          <h3>Products</h3>

          <div className="form">
            <div>
              <label className="form-label">Title</label>
              <input
                onChange={handleProductChange}
                name="title"
                type="text"
                className="form=control"
              />
            </div>

            <div>
              <label className="form-label">Category</label>
              <input
                onChange={handleProductChange}
                name="category"
                type="text"
                className="form=control"
              />
            </div>

            <div>
              <label className="form-label">Image</label>
              <input
                onChange={handleProductChange}
                name="image"
                type="text"
                className="form=control"
              />
            </div>

            <div>
              <label className="form-label">Price</label>
              <input
                onChange={handleProductChange}
                name="price"
                type="text"
                className="form=control"
              />
            </div>

            <div className="action">
              <button onClick={saveProduct} className="btn btn-outline-success">
                Save Product
              </button>
            </div>
          </div>
          {/* end of prods form */}
          <ul>
            {allProducts.map((p) => (
              <li>
                {p.title} - {p.category} - ${p.price}
              </li>
            ))}
          </ul>
        </div>
        {/* end of prods div */}

        <div className="coupons">
          <h3>Coupons</h3>
          <div className="form">
            <div>
              <label className="form-label">Code</label>
              <input
                onChange={handleCouponChange}
                name="code"
                type="text"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label">Discount</label>
              <input
                onChange={handleCouponChange}
                name="discount"
                type="text"
                className="form-control"
              />
            </div>
            <div className="action">
              <button onClick={saveCoupon} className="btn btn-dark">
                Save Coupon
              </button>
            </div>
          </div>
          {/* end of form */}
          <ul>
            {allCoupons.map((c) => (
              <li>
                {c.code} - ${c.discount}
              </li>
            ))}
          </ul>
        </div>
        {/* end of div */}
      </div>
      {/* end of parent div */}
    </div>
  );
}

export default Admin;
