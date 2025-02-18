import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function MyNavbar() {
  const expand = "md ";
  return (
    <Navbar
      style={{ backgroundColor: "rgb(186,182,253)" }}
      expand={expand}
      className="mb-3"
    >
      <Container>
        <Navbar.Brand href="#" style={{ fontFamily: "lalazar" }}>
          آموزش برنامه نویسی
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              آموزش برنامه نویسی
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/" className="nav-link">
                صفحه اصلی
              </NavLink>
              <NavLink to="/about" className="nav-link">
                درباره ما
              </NavLink>
              <NavLink to="/blog" className="nav-link">
                مقالات
              </NavLink>
              <NavLink to="/panel" className="nav-link">
                پنل
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
