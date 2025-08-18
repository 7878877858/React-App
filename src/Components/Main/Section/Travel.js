import travel_girl from "../../../assets/image/model/travel_girl.png";
import bus from '../../../assets/image/icons/bus.svg';
import train from '../../../assets/image/icons/train.svg';
import flight from '../../../assets/image/icons/flight.svg';
import hotel from '../../../assets/image/icons/hotel.svg';
import '../../../assets/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../assets/css/main.css';
import '../../../assets/css/snow_fall.css';

const travelSmart = [
    { icon: bus, name: 'Bus Booking' },
    { icon: train, name: 'Train Booking' },
    { icon: flight, name: 'Flight Booking' },
    { icon: hotel, name: 'Hotel Booking' },
];

export default function Travel() {
    const handleServiceClick = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        let storeLink = "https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN"; 

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            storeLink = "https://apps.apple.com/in/app/tradgo-recharge-bill-payment/id6478166235";
        }

        window.open(storeLink, "_blank"); // open in new tab
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <div className="travel_time">
                            <img src={travel_girl} alt="Travel Girl" className="travel_girl" />
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="d-flex flex-column justify-content-center text-end w-100 h-100">
                            <p className="text-secondary text-uppercase" style={{ fontSize: "1.5rem" }}>
                                Travel Time
                            </p>
                            <h1 style={{ fontSize: "3rem" }}>
                                We helping you find your dream location
                            </h1>
                            <p className="fs-5">
                                Experience seamless bus booking with tradgo! Enjoy the convenience of
                                booking your bus tickets hassle-free. What's more? Get an instant 3% cashback on every
                                bus booking you make. It's the perfect way to save while you travel. Book now and enjoy
                                the journey with tradgo!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="container py-5">
                    <h1 className="text-center fw-semibold mb-4">
                        <span className="text-black">Travel Smart, Travel Easy with </span>
                        <span className="text-primary">TradGo</span>
                    </h1>
                    <p className="text-center text-muted mb-5">Explore India, Create Memories for a Lifetime.</p>

                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-4 g-4 text-center" id="travel_smart_container">
                        {travelSmart.map((item, index) => (
                            <div key={index} className="col">
                                <div className="service-card"   onClick={handleServiceClick}
                                style={{ cursor: "pointer" }}>
                                    <img src={item.icon} alt={item.name} className="mb-2" style={{ width: "64px", height: "64px", margin: "0 auto" }} />
                                    <p className="service-name">
                                        {item.name.split(' ').map((word, i, arr) => (
                                            <span key={i}>
                                                {word}
                                                {i < arr.length - 1 && <br />}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
