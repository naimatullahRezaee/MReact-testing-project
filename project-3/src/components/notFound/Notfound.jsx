import "./Notfound.css";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="notfoundcontainer">
      <h1>Page Not Found</h1>
      <Link to="/">
        <button>Go To Home</button>
      </Link>
    </div>
  );
}

export default Notfound;
