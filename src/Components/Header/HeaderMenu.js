import tradgo_sp from "../../assets/image/vector/tradgo_sp.svg";
import '../../assets/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../assets/css/main.css';
import '../../assets/css/snow_fall.css';
import { Link } from "react-router-dom";
import StoreLink from "../StoreLink/StoreLink";

function HeaderMenu() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={tradgo_sp} alt="tradgo" style={{ width: "150px" }} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary fs-6 fw-semibold ms-2" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary fs-6 fw-semibold ms-2" to="/ContactUs">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary fs-6 fw-semibold ms-2" to="/AboutUs">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary fs-6 fw-semibold ms-2" to="/FAQ">FAQs</Link>
                                </li>
                                <li className="nav-item">
                                <StoreLink/>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default HeaderMenu;