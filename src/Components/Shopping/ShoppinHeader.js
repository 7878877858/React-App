import React from 'react'
import '../../assets/css/shopping.css'
import '../../assets/css/style.css'
import tradgoLog from '../../assets/image/vector/tradgo_wp.svg'
import LazyImage from '../../assets/js/LazyImage'

const ShoppinHeader = () => {
  return (
    <div>
      <nav className="navbar navbar-dark header navbar-expand-lg shadow sticky-top" id="myHeader">
        <div className="container">
            <a className="navbar-brand py-0" href="/">
                <LazyImage alt="tradgo" className="web-logo" src={tradgoLog}/>
            </a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-full" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link text-white fs-6 fw-semibold text-nowrap"  href="/">SERVICES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white fs-6 fw-semibold text-nowrap" href="/">BRAND GIFT
                            CARD</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white fs-6 fw-semibold text-nowrap" href="/shopping">SHOPPING</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white fs-6 fw-semibold text-nowrap" href="/">TRAVEL</a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="d-flex text-end">
                            <div className="btn-group">
                                <button type="button" className="btn dropdown-toggle text-white" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="fa fa-search"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end py-0" data-bs-popper="static">
                                    <li>
                                        <div className="input-group">
                                            <input type="text" className="form-control-0 px-3 py-2"
                                                style={{backgroundColor:"#F5F5F5"}} placeholder="Search"
                                                spellCheck={false}   data-ms-editor="true"/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <a href="/" className="btn text-white" aria-label="User Account"><i className="fa fa-user" aria-hidden="true"></i></a>
                            <a href="/" className="btn text-white" aria-label="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></a>
                            <a href="/" className="btn text-white me-2" aria-label="Shopping Cart"><i className="fa fa-shopping-cart"
                                    aria-hidden="true"></i></a>
                            <a href="/logincheck" className="btn btn-outline-light me-2">Login</a>
                            <a href="/register" className="btn btn-light text-dark">Sign-up</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default ShoppinHeader
