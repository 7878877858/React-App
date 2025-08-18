import play_store from "../../assets/image/vector/play_store.svg";
import app_store from "../../assets/image/vector/app_store.svg";
import tradgo_wp from "../../assets/image/vector/tradgo_wp.svg";

import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            <footer id="footer" className="footer_bg text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4 className="d-flex justify-content-center justify-content-md-start">
                                <img src={tradgo_wp} alt="tradgo" style={{ width: "150px" }} />
                            </h4>
                            <p className="text-center text-md-start">tradgo is an online platform that provides a quick and
                                convenient solution for mobile recharge.</p>
                            <div className="social_links">
                                <a href="https://m.facebook.com/tradgoindia" target="_blank" rel="noreferrer" className="social_item">
                                    <i className="fab fa-facebook fs-5"></i>
                                </a>

                                <a href="https://twitter.com/Tradgo2" target="_blank" rel="noreferrer" className="social_item">
                                    <i className="fab fa-twitter fs-5"></i>
                                </a>

                                <a href="https://www.youtube.com/@TradgoApp" target="_blank" rel="noreferrer" className="social_item">
                                    <i className="fab fa-youtube fs-5"></i>
                                </a>

                                <a href="https://www.instagram.com/tradgo_app/" target="_blank" rel="noreferrer" className="social_item">
                                    <i className="fab fa-instagram fs-5"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-end links ">
                                <div className="d-flex flex-column">
                                    <h4>Company</h4>
                                    <Link to="/AboutUs">About Us</Link>
                                    <Link to="/FAQ">FAQs</Link>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4>Install App</h4>
                                    <a href="https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN"
                                        target="_blank" rel="noreferrer">
                                        <img src={play_store} alt="app_store" className="app_store_img pb-2" />
                                    </a>

                                    <a href="https://apps.apple.com/in/app/tradgo-recharge-bill-payment/id6478166235"
                                        target="_blank" rel="noreferrer">
                                        <img src={app_store} alt="play_store" className="play_store_img" />
                                    </a>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4>Contact Us</h4>
                                    <a href="mailto:info@tradgo.in">
                                        <i className="fa fa-envelope me-2" style={{ width: "16px" }}></i>
                                        info@tradgo.in
                                    </a>

                                    <a href="tel:+919778344449">
                                        <i className="fa fa-phone me-2" style={{ width: "16px" }}></i>
                                        +91 97783 44449
                                    </a>

                                    <a href="https://maps.google.com/?q=316+Trade+Square,+Near+Parishkar+Flat,+Khokhra,+Ahmedabad+380008"
                                        target="_blank" rel="noreferrer">
                                        <i className="fa fa-location-dot me-2" style={{ width: "16px" }}></i>
                                        316 Trade Square, Near Parishkar Flat, Khokhra, Ahmedabad 380008
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-3" />
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between pb-3">
                        <p className="mb-0 text-center text-md-start">Copyright &copy; 2024 TradGo. All Rights Reserved</p>
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <Link to="/PrivacyPolicy" className="text-white text-decoration-none">Privacy Policy</Link>|
                            <Link to="/TermsAndConditions" className="text-white text-decoration-none">Terms &
                                Conditions</Link>|
                            <Link to="/Refundpolicy" className="text-white text-decoration-none">Refund Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;