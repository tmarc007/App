import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1>Welcome to my Home Page</h1>
      <Link className="btn btn-outline-success" to="/catalog">
        Check out our amazing catalog
      </Link>
    </div>
  );
}
export default Home;
