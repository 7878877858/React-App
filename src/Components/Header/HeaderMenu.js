import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import tradgo_sp from "../../assets/image/vector/tradgo_sp.svg";
import { Link } from "react-router-dom";
import "../../assets/css/main.css";
import LazyImage from "../../assets/js/LazyImage";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Api/Authentication/AuthContext";
function HeaderMenu() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const [setProfileOpen] = useState(false);
  const { user, profilePicUrl, setUser } = useAuth();
  return (
    <>
      <header className="sticky">
        <Navbar expand="lg" bg="white" variant="light" fixed="top" className="shadow-sm" expanded={expanded} onToggle={(isExpanded) => setExpanded(isExpanded)} style={{ top: "0px" }}  >
          <Container>
            <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
              <LazyImage src={tradgo_sp} alt="tradgo" style={{ width: "120px" }} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse className=" collapse navbar-collapse w-full" id="navbarNav">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/services" className="text-secondary fs-6 fw-semibold text-nowrap" onClick={() => setExpanded(false)}  > SERVICES </Nav.Link>
                <Nav.Link as={Link} to="/brand-gift-card" className="text-secondary fs-6 fw-semibold text-nowrap" onClick={() => setExpanded(false)} > BRAND GIFT CARD </Nav.Link>
                <Nav.Link as={Link} to="/shopping" className="text-secondary fs-6 fw-semibold text-nowrap" onClick={() => setExpanded(false)} >  SHOPPING </Nav.Link>
                <Nav.Link as={Link} to="/travel" className="text-secondary fs-6 fw-semibold text-nowrap" onClick={() => setExpanded(false)} > TRAVEL </Nav.Link>
              </Nav>
              <ul className="navbar-nav mx-auto">
                <li>
                  <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-search"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end py-0">
                      <li>
                        <div className="input-group">
                          <input type="text" className="form-control border border-0 px-3 py-2" style={{ backgroundColor: "#F5F5F5" }} placeholder="Search" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item ms-3 dropdown profile-dropdown">
                  {user ? (
                    <div className="btn-group">
                      <button type="button" className="btn p-1 d-flex align-items-center gap-2 dropdown-toggle"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <LazyImage src={profilePicUrl || "/default-avatar.png"} alt="Profile" className="user_favicon" width="42" height="42" />
                        <p className="user_name text-ellipsis-2 mb-0"> {user.Name}</p>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end gap-2 py-0" data-bs-popper="static">
                        <li className="p-2">
                          <div className="row row-cols-1 g-2">
                            <div className="col">
                              <a className="btn w-100 text-start fw-medium px-2 py-1 bg-primary-light">
                                <i className="fa fa-window-maximize" aria-hidden="true"></i> ₹ <span> {user.Balance2}</span>
                              </a>
                            </div>
                            <div className="col">
                              <a className="btn w-100 text-start fw-medium px-2 py-1 bg-primary-light">User Profile</a>
                            </div>
                            <div className="col">
                              <a className="btn w-100 text-start fw-medium px-2 py-1 bg-primary-light">Reports</a>
                            </div>
                            <div className="col">
                              <a className="btn w-100 text-start fw-medium px-2 py-1 bg-primary-light"
                                onClick={() => {
                                  localStorage.removeItem("userData");
                                  setUser(null);
                                  navigate("/logincheck");
                                }}>Logout</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="d-flex align-items-center">
                      <a href="/register" className="nav-link text-secondary text-nowrap fs-6 fw-semibold ms-2"> Sign up  </a>
                      <span className="mx-1">|</span>
                      <a href="/logincheck" className="nav-link text-secondary text-nowrap fs-6 fw-semibold ms-2"> Login  </a>
                    </div>


                  )}
                </li>

              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default HeaderMenu;
