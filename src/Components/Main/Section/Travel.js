import bus from "../../../assets/image/Main_style/assets/image/icons/bus.svg"
import bus1 from "../../../assets/image/Main_style/assets/image/travel_destinations/bus.png"

import '../../../assets/css/main.css';
import LazyImage from "../../../assets/js/LazyImage";

export default function Travel() {
    // const handleServiceClick = () => {
    //     const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    //     let storeLink = "https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN";

    //     if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    //         storeLink = "https://apps.apple.com/in/app/tradgo-recharge-bill-payment/id6478166235";
    //     }

    //     window.open(storeLink, "_blank"); // open in new tab
    // };
    return (
        <>

            <section className="container my-5">
                <div>
                    <h1 className="text-center fw-semibold mb-4">
                        <span className="text-black">Travel Smart, Travel Easy with </span>
                        <span className="text-primary">TradGo</span>
                    </h1>
                    <p className="text-center text-muted mb-5">Explore India, Create Memories for a Lifetime.</p>
                    <div className="row travel_smart_container">
                        <div className="col-12 col-lg-6 d-flex align-items-center ">
                            <div className="row px-3 py-4 gap-3">
                                <div className="col-md-auto">
                                    <div className="service-card bus-card redirect-link">
                                        <LazyImage src={bus} alt="Bus Booking" className="mb-2 lazyload" style={{ width: "64px", height: "64px" }} />
                                        <p className="text-secondary fw-semibold mb-0">Bus <br /> Booking</p>
                                    </div>
                                </div>
                                <div className="col d-flex align-items-center fs-2 fw-semibold">
                                    <span style={{ color: " #1b1464" }}>Grab up to <span style={{ color: " #20a7db" }}>3% off</span> on your favorite Destination</span>
                                </div>
                                <div className="col-12">Tradgo Bus Booking makes exploring India by road effortless. Book from thousands of operators in seconds, enjoy secure payments and live seat maps, plus earn an instant 3% cashback on every trip.</div>
                                <div className="col-12">
                                    <button type="button" className="btn text-white" style={{ backgroundColor: "#1B1464" }}>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-6 pe-0">
                            <LazyImage src={bus1} alt="asdas" className="img-fluid float-end bus-img lazyload" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
