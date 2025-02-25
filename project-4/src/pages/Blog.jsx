import MyNavbar from "../Components/Navbar";
import { Link, Outlet } from "react-router-dom";
import "./BlogStyle.css";
function Blog() {
  return (
    <div style={{ textAlign: "center" }}>
      <MyNavbar />
      <h1>صفحه مقلات</h1>
      <hr />
      <div className="btnContainer">
        <Link to="/blog/php" className="linkBtn">
          php blog
        </Link>
        <Link to="/blog/js" className="linkBtn">
          JS blog
        </Link>
        <Link to="/blog/react" className="linkBtn">
          React blog
        </Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default Blog;
