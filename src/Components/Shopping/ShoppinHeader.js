// import React from 'react'
// import '../../assets/css/shopping.css'
// import '../../assets/css/style.css'
// import tradgoLog from '../../assets/image/vector/tradgo_wp.svg'
// import LazyImage from '../../assets/js/LazyImage'

// const ShoppinHeader = () => {
//   return (
//     <div className="sticky">
//       <nav className="navbar navbar-dark header navbar-expand-lg shadow sticky-top" id="myHeader">
//         <div className="container">
//             <a className="navbar-brand py-0" href="/">
//                 <LazyImage alt="tradgo" className="web-logo" src={tradgoLog}/>
//             </a>
//             <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//                 aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse w-full" id="navbarNav">
//                 <ul className="navbar-nav mx-auto">
//                     <li className="nav-item">
//                         <a className="nav-link text-white fs-6 fw-semibold text-nowrap"  href="/">SERVICES</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link text-white fs-6 fw-semibold text-nowrap" href="/">BRAND GIFT
//                             CARD</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link text-white fs-6 fw-semibold text-nowrap" href="/shopping">SHOPPING</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link text-white fs-6 fw-semibold text-nowrap" href="/">TRAVEL</a>
//                     </li>
//                 </ul>
//                 <ul className="navbar-nav">
//                     <li className="nav-item">
//                         <div className="d-flex text-end">
//                             <div className="btn-group">
//                                 <button type="button" className="btn dropdown-toggle text-white" data-bs-toggle="dropdown"
//                                     aria-expanded="false">
//                                     <i className="fa fa-search"></i>
//                                 </button>
//                                 <ul className="dropdown-menu dropdown-menu-end py-0" data-bs-popper="static">
//                                     <li>
//                                         <div className="input-group">
//                                             <input type="text" className="form-control-0 px-3 py-2"
//                                                 style={{backgroundColor:"#F5F5F5"}} placeholder="Search"
//                                                 spellCheck={false}   data-ms-editor="true"/>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <a href="/" className="btn text-white" aria-label="User Account"><i className="fa fa-user" aria-hidden="true"></i></a>
//                             <a href="/" className="btn text-white" aria-label="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></a>
//                             <a href="/" className="btn text-white me-2" aria-label="Shopping Cart"><i className="fa fa-shopping-cart"
//                                     aria-hidden="true"></i></a>
//                             <a href="/logincheck" className="btn btn-outline-light me-2">Login</a>
//                             <a href="/register" className="btn btn-light text-dark">Sign-up</a>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
//     </div>
//   )
// }

// export default ShoppinHeader
import React, { useState } from "react";
import "../../assets/css/shopping.css";
import "../../assets/css/style.css";
import tradgoLog from "../../assets/image/vector/tradgo_wp.svg";
import LazyImage from "../../assets/js/LazyImage";
import { useAuth } from "../../Api/Authentication/AuthContext";
import { useNavigate } from "react-router-dom";

const ShoppinHeader = () => {
  const { user, profilePicUrl, setUser } = useAuth();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="sticky">
      <nav
        className="navbar navbar-dark header navbar-expand-lg shadow sticky-top"
        id="myHeader"
      >
        <div className="container">
          <a className="navbar-brand py-0" href="/">
            <LazyImage alt="tradgo" className="web-logo" src={tradgoLog} />
          </a>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse w-full ${
              expanded ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a
                  className="nav-link text-white fs-6 fw-semibold text-nowrap"
                  href="/services"
                >
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fs-6 fw-semibold text-nowrap"
                  href="/brand-gift-card"
                >
                  BRAND GIFT CARD
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fs-6 fw-semibold text-nowrap"
                  href="/shopping"
                >
                  SHOPPING
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fs-6 fw-semibold text-nowrap"
                  href="/travel"
                >
                  TRAVEL
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="d-flex text-end align-items-center">
                  {/* 🔍 Search */}
                  <div className="btn-group me-2">
                    <button
                      type="button"
                      className="btn dropdown-toggle text-white"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end py-0"
                      data-bs-popper="static"
                    >
                      <li>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control-0 px-3 py-2"
                            style={{ backgroundColor: "#F5F5F5" }}
                            placeholder="Search"
                            spellCheck={false}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
 {/* ❤️ Wishlist */}
                  <a
                    href="/wishlist"
                    className="btn text-white"
                    aria-label="Wishlist"
                  >
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </a>
                  {/* 🛒 Cart */}
                  <a
                    href="/cart"
                    className="btn text-white me-2"
                    aria-label="Shopping Cart"
                  >
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </a>
                  {/* 👤 User / Profile */}
                  {user ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn p-1 d-flex align-items-center gap-2 dropdown-toggle text-white"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <LazyImage
                          src={profilePicUrl || "/default-avatar.png"}
                          alt="Profile"
                          className="user_favicon"
                          width="42"
                          height="42"
                        />
                        <p className="user_name text-ellipsis-2 mb-0">
                          {user.Name}
                        </p>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end gap-2 py-0"
                        data-bs-popper="static"
                      >
                        <li className="p-2">
                          <div className="row row-cols-1 g-2">
                            <div className="col">
                              <a className="btn w-100 text-start fw-medium px-2 py-1 bg-primary-light">
                                <i
                                  className="fa fa-window-maximize"
                                  aria-hidden="true"
                                ></i>{" "}
                                ₹ <span>{user.Balance2}</span>
                              </a>
                            </div>
                            <div className="col">
                              <a className="btn w-100 text-start fw-medium px-2 py-1 bg-primary-light">
                                User Profile
                              </a>
                            </div>
                            <div className="col">
                              <a className="btn w-100 text-start fw-medium px-2 py-1 bg-primary-light">
                                Reports
                              </a>
                            </div>
                            <div className="col">
                              <a
                                className="btn w-100 text-start fw-medium px-2 py-1 bg-primary-light"
                                onClick={() => {
                                  localStorage.removeItem("userData");
                                  setUser(null);
                                  navigate("/logincheck");
                                }}
                              >
                                Logout
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      
                    </div>
                  ) : (
                    <div className="d-flex align-items-center">
                      <a
                        href="/register"
                        className="btn btn-light text-dark me-2"
                      >
                        Sign up
                      </a>
                      <a
                        href="/logincheck"
                        className="btn btn-outline-light me-2"
                      >
                        Login
                      </a>        
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ShoppinHeader;
