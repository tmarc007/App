import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home page">
      <h1>Welcome to my Home Page</h1>
      <Link className="btn btn-outline-dark" to="/catalog">
        👉👉👉 Check out our amazing catalog 👈👈👈
      </Link>
      <img src="/images/Risk Family.jpg" alt="" />

      <div className="info">
        <h2>Fun for the whole family!</h2>
        <h3>Just a click away!</h3>
      </div>
    </div>
  );
}
export default Home;
