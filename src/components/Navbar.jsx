/**
 * Components:
 * are functions
 * start with capital letters
 * should always return something
 *
 * are usually exported
 */

import "./Navbar.css";
import { Link } from "react-router-dom";
import DataContext from "../context/dataContext";
import { useContext } from "react";

function Navbar() {
  const cart = useContext(DataContext).cart;

  function getNumProducts() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      /**create the for loop that will travel the list/array */
      let prod = cart[i]; /** Get every single product */
      total +=
        prod.quantity; /** from the product get the quantity. Add the quantity to total */
    }

    return total;
  }

  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
              ></Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/catalog"
              >
                Catalog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/shoppinglist"
              >
                Shopping Cart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <Link className="btn btn-outline-light" to="/cart">
              {getNumProducts()} Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
