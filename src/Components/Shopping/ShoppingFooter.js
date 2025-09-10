import React from 'react'
import play_store from "../../assets/image/vector/play_store.svg";
import app_store from "../../assets/image/vector/app_store.svg";
import tradgo_wp from "../../assets/image/vector/tradgo_wp.svg";
import pdrs from "../../assets/image/vector/pdrs_w.svg"
import LazyImage from '../../assets/js/LazyImage';
import '../../assets/css/shopping.css'
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
const ShoppingFooter = () => {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-4 about-company">
                            <LazyImage alt="tradgo" className="web-logo" src={tradgo_wp} />
                            <p className="pr-5 text-white-50">tradgo is an online platform that provides a quick and convenient
                                solution for mobile recharge.</p>
                          <div className='d-flex'>
                              <a href="https://apps.apple.com/in/app/tradgo-recharge-bill-payment/id6478166235" target="_blank" rel="noreferrer">
                                <LazyImage src={app_store} className="web-logo" alt="app_store" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.tradgo" target="_blank" rel="noreferrer">
                                <LazyImage src={play_store} className="web-logo" alt="play_store" />
                            </a>
                          </div>
                            <p className="d-flex mt-3">
                                <a href="https://m.facebook.com/tradgoindia" className="text-white fs-1 me-3 social-icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/Tradgo2" className="text-white fs-1 me-3 social-icon"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.youtube.com/@TradgoApp" className="text-white fs-1 me-3 social-icon"><i className="fab fa-youtube"></i></a>
                                <a href="https://www.instagram.com/tradgo_app/" className="text-white fs-1 me-3 social-icon"><i className="fab fa-instagram"></i></a>
                            </p>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-6 col-sm-4">
                                    <h4 className="mt-lg-0 mt-sm-3">Company</h4>
                                    <p className="d-flex flex-column">
                                        <a href="#" className="">About Us</a>
                                        <a href="#" className="">FAQs</a>
                                    </p>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <h4 className="mt-lg-0 mt-sm-3">Contact Us</h4>
                                    <p className="d-flex flex-column">
                                        <a href="#" className="">info@tradgo.in</a>
                                        <a href="#" className="">+91 97783 44449</a>
                                    </p>
                                </div>
                                <div className="col col-sm-4">
                                    <h4 className="mt-lg-0 mt-sm-3">Help</h4>
                                    <p className="d-flex flex-column">
                                        <a href="#" className="">Payment</a>
                                        <a href="#" className="">Shipping</a>
                                        <a href="#" className="">Cancellation & Return</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <h4 className="mt-lg-0 mt-sm-4">Powered By</h4>
                            <LazyImage alt="pdrs" className="web-logo" src={pdrs} />
                        </div>
                    </div>

                </div>
                <div className="pre-header py-2">
                    <div className="container d-flex flex-column flex-lg-row justify-content-between text-center text-lg-start">
                        <span className="mb-0">Copyright c 2024 TradGo. All Rights Reserved</span>
                        <span className="mb-0">
                            <a href="">Privacy Policy</a> |
                            <a href="">Terms & Conditions</a> |
                            <a href="">Refund Policy</a>
                        </span>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ShoppingFooter
