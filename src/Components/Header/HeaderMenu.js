import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import tradgo_sp from "../../assets/image/vector/tradgo_sp.svg";
import { Link } from "react-router-dom";
import "../../assets/css/main.css";
import LoginModal from "../Authentication/LoginModal";
import LazyImage from "../../assets/js/LazyImage";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function HeaderMenu() {
  const [expanded, setExpanded] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className="sticky">
        {/* Top strip */}
        {/* <div
          className="px-3 py-2 w-full text-center fw-semibold fs-5 text-center text-white"
          style={{ backgroundColor: "#1b1464" }}
        >
          Apki Digital Duniya
        </div> */}

        {/* Navbar */}
        <Navbar
          expand="lg"
          bg="white"
          variant="light"
          fixed="top"
          className="shadow-sm"
          expanded={expanded}
          onToggle={(isExpanded) => setExpanded(isExpanded)}
          style={{ top: "0px" }} // push below top strip
        >
          <Container>
            {/* Logo */}
            <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
              <LazyImage src={tradgo_sp} alt="tradgo" style={{ width: "120px" }} />
            </Navbar.Brand>

            {/* Toggle */}
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              {/* Center Nav links */}
              <Nav className="mx-auto">
                <Nav.Link
                  as={Link}
                  to="/services"
                  className="text-secondary fs-6 fw-semibold text-nowrap"
                  onClick={() => setExpanded(false)}
                >
                  SERVICES
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/brand-gift-card"
                  className="text-secondary fs-6 fw-semibold text-nowrap"
                  onClick={() => setExpanded(false)}
                >
                  BRAND GIFT CARD
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/shopping"
                  className="text-secondary fs-6 fw-semibold text-nowrap"
                  onClick={() => setExpanded(false)}
                >
                  SHOPPING
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/travel"
                  className="text-secondary fs-6 fw-semibold text-nowrap"
                  onClick={() => setExpanded(false)}
                >
                  TRAVEL
                </Nav.Link>
              </Nav>

              {/* Right side */}
              <ul className="navbar-nav">
                {/* Search dropdown */}
                <li>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end py-0">
                      <li>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control border-0 px-3 py-2"
                            style={{ backgroundColor: "#F5F5F5" }}
                            placeholder="Search"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Login button */}
                <li className="nav-item">
                  <button
                    className="btn nav-link text-secondary text-nowrap fs-6 fw-semibold ms-2"
                    onClick={() => setShowLogin(true)}
                  >
                    Sign up | Login
                  </button>
                </li>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/* Login Modal */}
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
    </>
  );
}

export default HeaderMenu;
